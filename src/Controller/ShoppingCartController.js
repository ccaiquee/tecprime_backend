const ShoppingCart = require('../Model/ShoppingCart')

module.exports = {
    async store(req, res){        
        const user = req.userId

        const { produto_id, nome, preco, qtd } = req.body

        const shopping = await ShoppingCart.create({
            user, produto_id, nome, preco, qtd 
        })

        return shopping ? res.status(201).json(shopping) : res.status(404).json({error: 'It was not possible to insert the product in the cart'})
    },
    async index(req, res){
        const user = req.userId

        const shopping = await ShoppingCart.findAll({ where: {user}})

        return shopping ? res.status(200).json(shopping) : res.status(404).json({error: 'Could not find any products'})
    },
    async update(req, res){       
        const { id, qtd } = req.body
      
        const product = await ShoppingCart.findByPk(id)
        
        const shopping = await product.update({ qtd })

        return shopping ? res.status(200).json(shopping) : res.status(404).json({error: 'Could not update product'})
    },
    async delete(req, res){
        const { id } = req.query       

        const shopping = await ShoppingCart.destroy({
            where: { id }
        })

        return shopping ? res.status(200).json({message: 'Successful product deletion'}) : res.status(404).json({error: 'Could not delete product'})
    },
    async checkout(req, res){
        const user = req.userId

        const shopping = await ShoppingCart.destroy({
            where: {user}
        })

        return shopping ? res.status(200).json({message: 'Successful product deletion'}) : res.status(404).json({error: 'Could not delete product'})
    }
}