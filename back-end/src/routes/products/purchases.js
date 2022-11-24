const express = require('express')
const app = express.Router()
app.use(express.json())


const GetPurchases = async (req,res)=>{
    const {id} = req.params
    console.log(user)
    res.json({
        status:"funcionando"
    })
}

const PostPurchase = async (req,res)=>{

}

module.exports={
    GetPurchases
}