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
}

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
  try {
    const foundUser = await User.findOne({
      where: {
        id,
      },
    });
    if (foundUser) {
      const updatedUser = await User.update({
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
      })
    }
    return foundUser;
  } catch (err: any) {
    console.log('err', err)
    return null;
  }
}