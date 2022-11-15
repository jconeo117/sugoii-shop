const mongoose = require('mongoose');

const BuySchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    productsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
  
    totalPrice: Number
}, { versionKey: false });

module.exports = mongoose.model('buy', BuySchema);