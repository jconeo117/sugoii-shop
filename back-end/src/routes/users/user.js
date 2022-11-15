const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../models/users/user')

 const RegisterUser = async (req,res)=>{
   
    try{
        const UserExist = await User.findOne({email:req.body.email})

        if(UserExist){
            res.json({Error:"El correo ya esta registrado"})
        }

        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)

        
        const user = new User({
            userName:req.body.userName,
            email:req.body.email,
            password:password

        })

        await user.save()
        res.json(
            {
                status:"funcionando",
                usuario:user
        })
    }
    catch(err){
        res.status(404).json({
            error:"el error es "+err
        })
    }
 }

const LoginUser = async (req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email})
        if(!user) return res.status(400).json({error: 'Usuario no encontrado'})
        
        // Validacion de password en la base de datos
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword) return res.status(400).json({error: 'Constraseña invalida'})
    
        res.json({
            error: null,
            message: 'bienvenido',
            daata:user
        })
    }catch(err){
        res.status(404).json({
            error:"error type: "+err
        })
    }
}

module.exports = {
    RegisterUser,
    LoginUser
}