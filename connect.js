const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/testdb")

mongoose.connection.once('open',()=>{console.log('connected to db')})