const config = require('../config/database')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(config)

const User = require('../Model/User')
const ShoppingCart = require('../Model/ShoppingCart')

User.init(sequelize)
ShoppingCart.init(sequelize)

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
