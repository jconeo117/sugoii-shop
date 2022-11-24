const express = require('express')
const app = express.Router()
app.use(express.json())

const Products = require('../../models/products/products')

const SliderProducts = async (req,res) =>{
    try{
    var slider = []

    const products = await Products.find()
    
    for (let i = 0; i < 6; i++) {
        slider = [...slider, products[Math.floor(Math.random() * products.length)]]
    }
    
    res.json(slider)

    }catch(err){
        res.json(err)
    }
}

const SliderNews = async (req,res) =>{

    try{
    
    var slideNew = []

    const products = await Products.find()
    
    for (let i = products.length - 10; i < products.length; i++) {
        slideNew = [...slideNew, products[i]]
    }

    res.json(slideNew)

    }catch(err){
        res.json(err)
    }
}

module.exports = {
    SliderProducts,
    SliderNews
}