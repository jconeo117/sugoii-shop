const express = require('express')
const app = express.Router()
app.use(express.json())


const Products = require('../../models/products/products')
const User = require('../../models/users/user')

const GetProducts = async (req,res) => {
    const product  = await Products.find()
    res.json(product)
}

const GetProductsById = async (req,res) => {
    const {id} = req.params
    const product  = await Products.findById(id)
    res.json(product)
}

const PostProducts = async (req,res)=>{
    try{
        
        const admin = await User.findById(req.user.user_id)

        if(!admin.roles.includes('Admin')){
            return res.status(400).json({
                message:"No estas autorizado para hacer esto :/"
            })
        }

        const product = new Products(req.body)
        await product.save()
        res.json(product)

    }catch(err){
        res.json(err)
    }
}

const UpdateProduct = async (req,res)=>{
    try{

        const admin = await User.findById(req.user.user_id)

        if(!admin.roles.includes('Admin')){
            return res.status(400).json({
                message:"No estas autorizado para hacer esto :/"
            })
        }

        const {id} = req.params
        const UpdProduct = req.body
        await Products.findByIdAndUpdate(id, UpdProduct)
        res.json(UpdProduct)

    }catch(err){
        res.json(err)
    }
}

const DeleteProducts = async (req,res) => {
    try{

        const admin = await User.findById(req.user.user_id)

        if(!admin.roles.includes('Admin')){
            return res.status(400).json({
                message:"No estas autorizado para hacer esto :/"
            })
        }

        const {id} = req.params
        const product  = await Products.findByIdAndRemove(id)
        res.json(product)

    }catch(err){
        res.json(err)
    }
}


module.exports = {
    GetProducts,
    GetProductsById,
    PostProducts,
    UpdateProduct,
    DeleteProducts
}