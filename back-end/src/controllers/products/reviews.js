const mongoose = require('mongoose')
const Product = require('../../models/products/products')
const Reviews = require('../../models/products/reviews')

const addReview = async({userId, rating, comment},{id})=>{

    const product = await Product.findById(id)
   
    const review = new Reviews({
        userId,
        ProductId:id,
        rating,
        comment
    })
    
    await review.save()
    const rat = await Reviews.find().select('rating')
    product.reviews = product.reviews.concat(review)
    product.rating = Number(((rat.map(e=>e.rating).reduce((a,b)=>a+b,0))/rat.length).toFixed(2))  
    await product.save()
    return review
}

module.exports={
    addReview
}