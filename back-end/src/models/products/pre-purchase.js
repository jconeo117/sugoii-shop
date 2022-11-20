const mongoose = require('mongoose')
const {Schema} = mongoose


const pre_pruchase = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    name: String,
    description: String,
    type: String, //cambie por un array
    photos:String
},{versionKey:false})

module.exports = mongoose.model('pre-pruchase', pre_pruchase);