const blogModel=require("../model/blog")
const AuthorModel=require('../model/author')
const mongoose = require("mongoose")
const Object_id = mongoose.Types.ObjectId
const getAllBlogs=async function(req,res){
    try{  
        const details=await blogModel.find({$and:[{isDeleted:true},{isPublished:true}]}).select()
       
        res.status(200).send({msg:details, status: true })
        }
    catch(err){
        console.log(err)
                res.status(404).send({msg:err.message})
                }
    }
const getfilterblog=async function(req,res){
  try{  
        const authorId=req.query.authorId
        const category=req.query.category
        const tag=req.query.tag
        const subcategory=req.query.subcategory
        if(!authorId)return res.status(400).send({msg:"please enter the authorId"})
        // if(!tag)return res.status(400).send({msg:"please enter the tag"})
        if(!category)return res.status(400).send({msg:"please enter the category"})
        // if(!subcategory)return res.status(400).send({msg:"please enter the subcategory"})
        if(authorId&&category){
                    const filterAuthor=AuthorModel.find(authorId)
                    const id =filterAuthor[0].authorId
                    const filtercategory=blogModel.find({authorId:id})
                    res.status(200).send({msg:filtercategory})
        }
        
        //     const filterAuthor=AuthorModel.find().populate(authorId)
        // const filtercategory=blogModel.find(category)
        // const filtertags=blogModel.find(tag)
        // const filtersubcategory=blogModel.find(subcategory)


// res.send()
}
catch(err){
res.status(500).send({msg:err.message})
}
   }
   
   
   module.exports.getAllBlogs=getAllBlogs
   module.exports.getfilterblog=getfilterblog