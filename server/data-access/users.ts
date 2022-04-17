const User = require('../models').User;


export const createUser = async (
  email: string, 
  password: string, 
  firstName: string, 
  lastName: string, 
  age: number, 
  sex: string
) => {
  try {
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      age,
      sex,
    })
    return user;
  } catch (err: any) {
    console.log('user create error', err)
  }
};

export const updateUser = async (
  id: string,
  email: string, 
  password: string, 
  firstName: string, 
  lastName: string, 
  age: number, 
  sex: string,
  avatar: string,
) => {
  let updatedUser = null;
  try {
    const foundUser = await User.findOne({
      where: {
        id,
      },
    });

    if (foundUser) {
      const [ rows, result ] = await User.update({
        email,
        password,
        firstName,
        lastName,
        age,
        sex,
        avatar,
      }, {
        where: {
          id,
        },
        individualHooks: true,
        returning: true,
      })
      const user = result[0].get({ raw: true })
      user.avatar = result[0].avatar
      user.password = '';
      updatedUser = user;
    }

    return updatedUser;
  } catch (err: any) {
    console.log('err', err)
    return null;
  }
};