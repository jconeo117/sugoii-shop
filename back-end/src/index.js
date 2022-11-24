const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()
const {mongoose} = require('./db')
const cors = require('cors')

//config server
app.set('port', process.env.PORT || 3002)

//midleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.use(require('./routes/index'))



app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
})