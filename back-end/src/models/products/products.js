const mongoose = require('mongoose')
const {Schema} = mongoose


const Products = new Schema({
    name: String,
    description: String,
    type: String, //cambie por un array
    price: Number, // aca paso de number a string
    category:String,
    serie:String,
    stock:Boolean,
    rating:{
        type:Number,
        default:0
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
    }],
    purchaseId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Purchase'
    }],
    photos:[String]
},{versionKey:false})

module.exports = mongoose.model('Products', Products)