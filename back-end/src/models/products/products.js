const mongoose = require('mongoose')
const {Schema} = mongoose


const Products = new Schema({
    name: String,
    description: String,
    type: String, //cambie por un array
    price: Number, // aca paso de number a string
    category:String,
    stock:Boolean,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews'
    }],
    buyId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'buy'
    }],
    photos:String
},{versionKey:false})

module.exports = mongoose.model('Products', Products)