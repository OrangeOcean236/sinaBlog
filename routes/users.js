var express = require('express');
var router = express.Router();

// 用户模块导入
let User=require('../models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/addUser',(req, res, next)=>{

  let userInfo={
    username: req.body.username,
    password: req.body.password,
    password1: req.body.password1,
  }
// if(userInfo.password!=password1){
//   // console.log('两次密码不一致！')
//   let error={
//     status:0,
//     stack:''
//   }
//   res.render('error',{message:'密码不一致'})
// }

  let userI=new User(userInfo)
  userI.save((err,result)=>{
    if(!err){
      res.send(result)
    }
  })
})

module.exports = router;