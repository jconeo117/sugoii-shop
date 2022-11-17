const express = require('express')
const app = express.Router()
app.use(express.json())

//controladores
const {
    addReview,
    deleteReview
} =require('../../controllers/products/reviews')



const PostReview = async(req,res)=>{
   try{
        const review = await addReview(req.body, req.params)
        res.json({
            message:"review posteada con exito",
            data:review
        })

   }catch(err){
        res.status(404).json({
            error:"error del tipo: "+err
        })
   }
}

const DeleteReviews = async(req,res)=>{
    try{
        const review = await deleteReview(req.user, req.params, req.body)
        res.json({
            message:"review borrada con exito",
            data:review
        })
    }catch(err){
        res.status(404).json({
            error:"error del tipo: "+err
        })
    }
}

module.exports={
    PostReview,
    DeleteReviews
}