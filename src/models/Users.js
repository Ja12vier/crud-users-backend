const { DataTypes } = require('sequelize')

const sequelize = require('../utils/connection')
 // En Mayúsculas y singular      // en minúsculas y singular
const Users = sequelize.define('users', {
// Definimos las columnas aquí

firt_name: {
  type: DataTypes.STRING,
  allowNull:false
},

last_name: {
  type: DataTypes.STRING,
  allowNull:false
},

emal: {
  type: DataTypes.STRING,
  allowNull:false
},

password: {
  type: DataTypes.STRING,
  allowNull:false
},

birthday: {
  type: DataTypes.DATEONLY,
  allowNull:false
}

});
module.exports = Users;
