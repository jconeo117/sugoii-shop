const mongoose = require('mongoose')
const Product = require('../../models/products/products')
const Reviews = require('../../models/products/reviews')

const addReview = async({userId, rating, comment},{id})=>{

    const product = await Product.findById(id)
   
    const review = new Reviews({userId,productId:id,rating,comment})
    
    await review.save()

    product.reviews = product.reviews.concat(review)
    await product.save()
    
    return {message:"la review fue posteada con exito",data:review}
}

module.exports={
    addReview
}