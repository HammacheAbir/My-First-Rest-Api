const express=require('express')

const app= express()

//require('dotenv/config')

const PORT=process.env.PORT||5000

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routers
const postsRoute = require('./routers/api/posts')


app.use('/api/posts',postsRoute)

app.get('/',(req,res)=>{
    res.send('Abir')
})


app.listen(PORT,()=>{
    console.log('server running on PORT',PORT)
})