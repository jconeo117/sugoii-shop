const mongoose = require('mongoose')
const { Schema } = mongoose

const AdminSchema = new Schema({
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
        unique:true
    },
    admin:{
        type:Boolean,
        default:true
    },
    products:{
        
    }
})

// AdminSchema.pre('save', function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const document = this
//         bcrypt.hash(document.password, saltRound, (err, hashedPassword) => {
//             if (err) {
//                 next(err);
//             } else {
//                 document.password = hashedPassword;
//                 next();
//             }
//         })
//     } else {
//         next();
//     }
// });

// AdminSchema.methods.isCorrectPassword = function (password, callback) {
//     bcrypt.compare(password, this.password, function (err, same) {
//         if (err) {
//             callback(err)
//         } else {
//             callback(err, same)
//         }
//     })
// }

module.exports = mongoose.model('Admin',AdminSchema)