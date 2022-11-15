const mongoose = require('mongoose');

const userReviewSchema = mongoose.Schema({
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

module.exports = mongoose.model('user_Review', userReviewSchema)