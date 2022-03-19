'use strict';
const bcrypt = require('bcrypt');
const config = require('../config/app.ts');


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: {
      type: DataTypes.STRING,
      get () {
        const avatar = this.getDataValue('avatar');
        const sex = this.getDataValue('sex');
        const url = `http://127.0.0.1:8080`;
        if (!avatar) {
          if (!sex) {
            return `${url}/male.svg`;
          }
          return `${url}/${this.getDataValue('sex')}.svg`;
        }
      },
    },
    age: DataTypes.NUMBER,
    sex: {
      type: DataTypes.STRING,
      get() {
        const sex = this.getDataValue('sex');
        if (!sex) {
          return 'male';
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    }
  });
  return User;
};

const hashPassword = async (user) => {
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  return user;
}