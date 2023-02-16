require('dotenv').config()


const express = require('express')

//express app
const app = express();


//midleware
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next();
})

//routes
app.get('/',(req, res)=>{
    res.json({mssg: "Welcome to the app"})
})

app.get('/more', (req, res)=>{
    res.json('Jeeell')
})

//listen for request s

app.listen(process.env.PORT, ()=>{
    console.log('listening on port ', process.env.PORT)
})