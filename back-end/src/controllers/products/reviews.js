const mongoose = require('mongoose')
const Product = require('../../models/products/products')
const Reviews = require('../../models/products/reviews')
const User = require('../../models/users/user')


const addReview = async({userId, rating, comment},{id})=>{

    const product = await Product.findById(id)
   
    const review = new Reviews({
        userId,
        ProductId:id,
        rating,
        comment
    })
    
    await review.save()
    const rat = await Reviews.find()
    
    product.reviews = product.reviews.concat(review)
    product.rating = Number(((rat.filter(el=>el.ProductId.toString() === product._id.toString()).map(e=>e.rating).reduce((a,b)=>a+b,0))/rat.filter(el=>el.ProductId.toString() === product._id.toString()).length).toFixed(2))  
    await product.save()
    return review
}

const deleteReview = async ({user_id}, {id}, {reviewId})=>{
    const product = await Product.findById(id)
    const user = await User.findById(user_id)
    const review = await Reviews.findById(reviewId)

    if(!(review.userId.toString() === user._id.toString()) || !(user.roles.includes('User'))){
        return "no puedes hacer eso, esta review no esta tuya :/"
    }

    await Reviews.findByIdAndRemove(reviewId)
    const rat = await Reviews.find()
    
    product.reviews = product.reviews.filter(el=>el.toString() !== review._id.toString())
    product.rating = Number(((rat.filter(el=>el.ProductId.toString() === product._id.toString()).map(e=>e.rating).reduce((a,b)=>a+b,0))/rat.filter(el=>el.ProductId.toString() === product._id.toString()).length).toFixed(2))  
    
    product.save()

    return review
}

module.exports={
    addReview,
    deleteReview
}