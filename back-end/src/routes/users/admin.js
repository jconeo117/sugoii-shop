const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const Admin = require('../../models/users/admin')

 const RegisterAdmin = async (req,res)=>{
   
    try{
        const AdminExist = await Admin.findOne({email:req.body.email})

        if(AdminExist){
            res.json({Error:"El correo ya esta registrado"})
        }

        const salt = await bcrypt.genSalt(10)
        const password = await bcrypt.hash(req.body.password, salt)

        
        const admin = new Admin({
            userName:req.body.userName,
            email:req.body.email,
            password:password

        })

        await admin.save()
        res.json(
            {
                message:"Cuenta creada correctamente",
                administrador:admin
        })
    }
    catch(err){
        res.status(404).json({
            error:"el error es "+err
        })
    }
 }

const LoginAdmin = async (req,res)=>{
    try{
        const admin = await Admin.findOne({email: req.body.email})
        if(!admin) return res.status(400).json({error: 'Usuario no encontrado'})
        
        // Validacion de password en la base de datos
        const validPassword = await bcrypt.compare(req.body.password, admin.password)
        if(!validPassword) return res.status(400).json({error: 'Constraseña invalida'})
    
        res.json({
            error: null,
            message: 'bienvenido',
            data:admin
        })
    }catch(err){
        res.status(404).json({
            error:"error type: "+err
        })
    }
}

module.exports = {
    RegisterAdmin,
    LoginAdmin
}