const express=require('express')
const data=require("../controllers/controller.js")

const router=express.Router();

router.get('/getdata',data.get_data);
router.post('/adddata',data.add_data);

module.exports=router;