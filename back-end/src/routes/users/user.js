const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../../models/users/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()


 const RegisterUser = async (req,res)=>{
   
    try{
        const UserExist = await User.findOne({email:req.body.email})

        if(UserExist){
           return res.json({Error:"El correo ya esta registrado"})
        }

        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)

        
        const user = new User({
            userName:req.body.userName,
            email:req.body.email,
            password:password
        })
        
        const token = jwt.sign(
            { user_id: user._id },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );


        if(process.env.ADMIN_EMAIL.includes(user.email)){
            user.roles[0] = 'Admin'
        }else{
            user.roles[0] = 'User'
        }
        
        await user.save()
        res.json({
            message:"bienvenido",
            usuario:user,
            key:token
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
    
        const token = jwt.sign(
            { user_id: user._id },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
        );


        res.json({
            message: 'bienvenido',
            usuario:user,
            key:token
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