const express = require("express")

const router=express.Router();
const authorController=require("../controller/authorcontroller")
const getController=require("../controller/getcontrollers")

router.get("/get",function(req,res){
    res.send("hello")
})
router.post("/createAuthor",authorController.createAuthor)
router.get("/getallblogs",getController.getAllBlogs)
router.get("/getfilterblog",getController.getfilterblog)
module.exports=router;