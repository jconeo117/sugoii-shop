const express = require('express')
const app = express.Router()
app.use(express.json())

//controladores
const {
    getReviews,
    addReview,
    deleteReview
} =require('../../controllers/products/reviews')


const GetReviews = async (req,res)=>{
    try{
        const reviews = await getReviews(req.params)

        res.json({
            message:"funcionando",
            data:reviews
        })
    }catch(err){
        res.status(404).json({
            error:"error del tipo: "+err
        })
    }
}

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
    GetReviews,
    PostReview,
    DeleteReviews
}