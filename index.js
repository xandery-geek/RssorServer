const express = require('express')
const router = require('./src/router')
const cors = require('cors')



const app = express()

//Middleware
app.use(express.urlencoded({extended: false}))
app.use(cors())  // CORS

app.use('/api', router)

app.listen(3000, ()=>{
    console.log("Runing at http://127.0.01:3000 !")
})
