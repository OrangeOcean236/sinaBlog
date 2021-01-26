var express = require('express');
var router = express.Router();
// let Joi = require('joi');
// const { schema } = require('../models/user');

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


// joi 验证
// const Schema = Joi.object({
//     username: Joi.string().min(2).required().error(new Error('用户名不符合验证规则')),
//     password: Joi.string().regex(/^[a-zA-A0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
//     password: Joi.ref('password'),
// })

// try {
//   const value = await schema.validateAsync(userInfo);
// }
// catch (err) {
//   console.log(err.message);
// }

  let userI=new User(userInfo)

  userI.save((err,result)=>{
    if(!err){
      res.send(result)
    }
  })
})



 //登录---查询


 router.post('/login', (req, res, next) => {
  //从表单获取数据
  let userinfo = {
    username: req.body.username,
    password: req.body.password,
  }
  // console.log(userinfo);

  User.findOne(userinfo, function (err, result) {
    //错误处理
    if (err) {
      return console.log(err);
    }
    if (result == null) {
      console.log('登录失败');
      res.redirect('/sign');
    } else {
      // 将用户登录信息存储
      req.session.username  = userinfo.username

      console.log('登陆成功');
      //路由重定向
      res.require('/')
    }
  })
})

module.exports = router;