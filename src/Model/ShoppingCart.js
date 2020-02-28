const { Model, DataTypes } = require('sequelize')

class ShoppingCart extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            user: DataTypes.UUID,
            produto_id: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            preco: DataTypes.DECIMAL,
            qtd: DataTypes.INTEGER,                             
        }, {
            sequelize,
            timestamps: false
        })        
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user', as: 'shoppcart'})
    }
}
module.exports = ShoppingCart