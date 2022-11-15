const mongoose = require('mongoose')
const {Schema} = mongoose


const UserSchema = new Schema({
    userName :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    // status: {
    //     type: String,
    //     enum: ['Pending', 'Active'],
    //     default: 'Pending'
    // },
    // confirmationCode: {
    //     type: String,
    //     unique: true
    // },
    token: { 
        type: String 
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }],
    buyId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'buy'
    }],
})


module.exports = mongoose.model('Users', UserSchema)