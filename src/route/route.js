const express = require("express")

const router=express.Router();
const authorController=require("../controller/authorcontroller")






router.get("/get",function(req,res){
    res.send("hello")
})
router.post("/createAuthor",authorController.createAuthor)

module.exports=router;