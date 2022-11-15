const express = require('express')
const app = express.Router()
app.use(express.json())

//controladores
const {
    addReview
} =require('../../controllers/products/reviews')

const PostReview = async(req,res)=>{
   try{
        const review = await addReview(req.body, req.params)
        res.json(review)
   }catch(err){
        res.status(404).json({
            error:"error del tipo: "+err
        })
   }
}

module.exports={
    PostReview
}