const User = require('../Model/User')

const uuid = require('uuid')

module.exports = {
    async store(req, res){
        const code = uuid()
        const { email, password } = req.body

        const user = await User.create({ code, email, password })
        
        return user ? res.status(201).json(email) : res.status(404).json({error: 'Unable to create new account'})
    }
}