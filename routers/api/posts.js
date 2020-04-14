const express=require('express')
const post=require("../../models/post")

const router=express.Router()

//get All router
router.get('/',async(req,res)=>{
    try{
        const posts = await post.find()
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
})

//find a post
router.get('/:id',async(req,res)=>{
    try{
        const found = await post.findById(req.params.id)
        res.json(found)
    }catch(err){
        res.json({message: err})
    }

})

//create a post
router.post('/',async(req,res)=>{

    const newPost=new post({
        title:req.body.title,
        description: req.body.description
    })

    try{
        const savedPost= await newPost.save()
        res.json(savedPost)
    }catch(err){
        res.json({message: err})
    }
})



module.exports= router