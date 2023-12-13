const User = require('../models/users');
const auth = require('./authFunction');
exports.login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await auth.login(username,password);
        if(!user){
            return res.status(400).json({status:'fail',message:'username or password is wrong'});
        }
        return res.status(200).json({status:'success',message:'login success',data:user});    
    } catch (error) {
        throw error
    }
}

exports.register = async (req, res) => {
    try {
        const {username,email,password,confirmPassword} = req.body;
        if(password !== confirmPassword){
            return res.status(400).json({status:'fail',message:'password and confirm password is not match'});
        }
        const userId = Math.floor(Math.random() * 1000000000);
        await auth.register(userId,username,email,password);
        return res.status(200).json({status:'success',message:'register success'});
    } catch (error) {
        throw error
    }
}