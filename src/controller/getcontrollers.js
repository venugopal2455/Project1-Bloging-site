const blogModel=require("../model/blog")
const AuthorModel=require('../model/author')
const mongoose = require("mongoose")
const Object_id = mongoose.Types.ObjectId


   const getFilterBlog = async function (req, res) {
        try {
             let data=req.query
             console.log(data)
             let getData =await blogModel.find( {$and : [data, { isDeleted: false }, { isPublished: true }]})
             console.log( [data, { isDeleted: false }, { isPublished: true }])
            if(!(data))
        getData = await blogModel.find({ isDeleted: false, isPublished: true})
            
            if (getData.length===0)
                return res.status(404).send({ status: false, msg: "Blogs not present" })
            res.status(200).send({ status: true, msg: getData })
        }
        catch (error) {
            res.status(400).send({ status: false, msg: error.message })
        }
    }
   
module.exports.getFilterBlog=getFilterBlog
  