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
    console.log('users access error', err)
  }
}