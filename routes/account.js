var express = require("express");
var router = express.Router();

router.get("/login", function(req, res){
    return res.send("这是个登陆界面");
});

router.get("/register", function(req, res){
    return res.send("这是个注册界面");
});

module.exports = router;