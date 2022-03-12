const User = require('../models').User;

export const getUserByEmail = async (email: string) => {
  try {
    const userToken = await User.findOne({
      where: {
        email,
      }
    })
    return userToken;
  } catch (err: any) {
    console.log('users access error', err)
  }
}