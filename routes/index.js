var express = require('express');
var router = express.Router();

/* GET home page.首页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//登录路由配置
router.get('/login', function(req, res) {
  res.render('login', {});
});

//注册路由配置
router.get('/sign', function(req, res) {
  res.render('sign', {});
});

//写文章路由配置
router.get('/write', function(req, res) {
  res.render('write', {});
});


//文章详情页路由配置
router.get('/article', function(req, res) {
  res.render('details', {});
});
module.exports = router;
