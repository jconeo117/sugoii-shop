const mongoose = require('mongoose')
require("dotenv").config()

const uri = process.env.MONGO_STRING

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=>{
    console.log('DataBase is connected')
})
.catch(err=>{
    console.log('the conection to DB is failed to error ', err)
})

module.exports = mongoose