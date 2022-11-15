const mongoose = require('mongoose')
const Product = require('../../models/products/products')
const User = require('../../models/users/user')

const AddFavorite = async (userId, productId)=>{
   try{ 
        const getProduct = await Product.findById(productId)
        const getUser = await User.findById(userId)

        let filerFav = getUser.favorites.filter(x => {
            return x.toString() === productId
        })

        if (!filerFav.length) {
            getUser.favorites = getUser.favorites.concat(productId)
            await getUser.save()
            return {message:"el producto fue añadido a favoritos", data:{getProduct, getUser}}
        }else{
            return {message:"el producto ya esta añadido a favoritos", data:null}
        }

    }catch(err){
        return err
    }
}

const RemoveFavorite = async (userId, productId)=>{
    try{
        const getProduct = await Product.findById(productId)
        const getUser = await User.findById(userId)

        getUser.favorites =  getUser.favorites.filter(e => {
            return e.toString() !== productId
        })

        await getUser.save()
        return {message:"el producto fue removido a favoritos", data:{getProduct, getUser}}

    }catch(err){
        return err
    }
}

module.exports = {
    AddFavorite,
    RemoveFavorite
}