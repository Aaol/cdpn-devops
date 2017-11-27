'use strict';

exports.mail = ((req, res) => {
    let mail = req.body == undefined ? undefined : req.body.mail;
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    res.json(mail != undefined && mail.length !== 0 && regex.test(mail))
});

exports.password = ((req,res) => {
    let password = req.body == undefined ? undefined : req.body.password;
    res.json(password != undefined && password.length >4 && /[A-Z]/.test(password) )
});