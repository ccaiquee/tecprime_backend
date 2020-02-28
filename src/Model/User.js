const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

class User extends Model{
    static init(sequelize){
        super.init({
            code: {
                type: DataTypes.UUID,
                primaryKey: true
            },
            email: DataTypes.STRING,
            password: DataTypes.VIRTUAL,
            password_hash: DataTypes.STRING
        }, {
            sequelize,
            timestamps: false
        })
        this.addHook('beforeSave', async (user) => {
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password, 8)
            }
        })
        return this
    }
    checkPassword(password){
        return bcrypt.compare(password, this.password_hash)
    }
    static associate(models){
        this.hasOne(models.ShoppingCart, { foreignKey: 'code', as: 'user' })
    }
}

module.exports = User