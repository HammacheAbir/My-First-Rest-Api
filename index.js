const express=require('express')

const mongoose=require('mongoose')

const app= express()

//require('dotenv/config')

const PORT=process.env.PORT||5000

//body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Routers
const postsRoute = require('./routers/api/posts')




// // DB Config
// const db = require('./config/keys').mongoURI;

// // Connect to MongoDB
// mongoose
//   .connect(db, { useNewUrlParser: true }) // Let us remove that nasty deprecation warrning :)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

mongoose.connect("mongodb://localhost:27017/testdb")

mongoose.connection.once('open',()=>{console.log('connected to db')})

app.use('/api/posts',postsRoute)

app.get('/',(req,res)=>{
    res.send('Abir')
}) 

app.listen(PORT,()=>{
    console.log('server running on PORT',PORT)
})