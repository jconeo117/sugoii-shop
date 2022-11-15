const express = require('express')
const app = express.Router()
app.use(express.json())

//controladores
const {
    AddFavorite,
    RemoveFavorite
} = require('../../controllers/products/favorites')



const addFav = async (req, res)=>{
    try{
        const FavProduct = await AddFavorite(req.body.userId , req.body.productId)
        res.json({
            error:null,
            message:FavProduct.message,
            data:FavProduct.data
        })

    }catch(err){
        res.status(404).json({
            err: "el error es de tipo: "+err
        })
    }
}

const removeFav = async (req, res)=>{
    try{
        const FavProduct = await RemoveFavorite(req.body.userId , req.body.productId)
        res.json({
            error:null,
            message:FavProduct.message,
            data:FavProduct.data
        })

    }catch(err){
        res.status(404).json({
            err: "el error es de tipo: "+err
        })
    }
}

module.exports={
    addFav,
    removeFav
}