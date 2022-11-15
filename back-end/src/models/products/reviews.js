const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    // buyId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'buy'
    // },
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
    rating: Number,
    comment: String,

}, { versionKey: false })

module.exports = mongoose.model('Reviews', ReviewSchema)