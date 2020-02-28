const jwt = require('jsonwebtoken')

const User = require('../Model/User')
const Secret = require('../config/secret')

const { promisify } = require('util')

module.exports = async(req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({message: 'User not authorization'})
    }
    try{
        const decoded = await promisify(jwt.verify)(authHeader, Secret)

        const { code } = decoded

        const user = await User.findOne({ where: { code }})

        if(user){
            req.userId = code
            next()
        }else{
            res.status(401).json({message: 'User not authorization'})
        }
    }
    catch(err){
        return res.status(401).json({error: 'Token invalid'})
    }
}