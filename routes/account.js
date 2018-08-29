const router = require('express').Router();

const User = require('../model/user');

router.route('/register')
    // 返回注册页面
    .get(function (req, res) {
        res.render('account/register.hbs', {title: '注册'});
    })
    // 接受用户表单
    .post(function (req, res, next) {
        let username = req.body.username || '',
            password = req.body.password || '';

        if (username.length === 0 || password.length === 0) {
            return res.status(400).end("argv error");
        }
        User.create({
            username: username,
            password: password
        }, function (err) {
            if (err) {
                return next(err)
            }
            res.status(201).end('register success');
        });
    });

module.exports = router;