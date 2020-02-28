const { Router } = require('express')

const routes = Router()

const Middleware = require('./Middleware/Auth')

const UserController = require('./Controller/UserController')
const SessionController = require('./Controller/SessionController')
const ShoppingCartController = require('./Controller/ShoppingCartController')

routes.post('/account', UserController.store)
routes.post('/session', SessionController.store)

routes.use(Middleware)

routes.post('/shoppingcart', ShoppingCartController.store)
routes.get('/shoppingcart', ShoppingCartController.index)
routes.put('/shoppingcart', ShoppingCartController.update)
routes.delete('/shoppingcart', ShoppingCartController.delete)
routes.delete('/shoppingcart/checkout', ShoppingCartController.checkout)

module.exports = routes