const {Router}=require('express');
router=Router();
const isLoggedin=require('../routes/CheckUser')

router.get('/',isLoggedin,(req,res)=>{
    console.log(req.user);
    res.render('index',{success:false});
});

module.exports=router