require('dotenv').config()

const express = require('express')

const app = express()

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    return res.render(`Hello ${process.env.USER}!`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Server Started at ${PORT}`);
})


