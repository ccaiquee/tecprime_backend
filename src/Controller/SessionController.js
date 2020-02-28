const User = require('../Model/User')
const Secret = require('../config/secret')
const jwt = require('jsonwebtoken')


module.exports = {
    async store(req, res){
        const { email, password } = req.body        
        const user = await User.findOne({ where: { email }})

        if(!user){
            return res.status(401).json({error: 'User not found'})
        }

        if(!(await user.checkPassword(password))){
            return res.status(401).json({error: 'Password does not match'})
        }

        const { code } = user.dataValues

        return res.status(200).json({
            token: jwt.sign({ code }, Secret, { expiresIn: '7d' })
        })
    }
}