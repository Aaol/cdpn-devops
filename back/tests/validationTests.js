var chai = require('chai');
var expect = chai.expect;
let chaiHttp = require('chai-http');
var validationController = require('../api/controllers/validationController');
var http = require('http');
let server = require("../server");
chai.use(chaiHttp);
describe('validationController', () => {
    describe('POST /validate/mail', () => {

    it('validateEmail should return false if the mail passed is not valid', () => {
        chai.request(server)
        .post('/validate/email')
        .send({mail:"test@test"})
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.equal.to(false);
            done();
        })
    });
    it('validateEmail should return false if the mail passed is empty', () => {
        chai.request(server)
        .post('/validate/email')
        .send({mail:null})
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.equal.to(false);
            done();
        })
    });
    it('validateEmail should return true if the mail passed is valid', () => {
        chai.request(server)
        .post('/validate/email')
        .send({mail:"test@test.com"})
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.equal.to(true);
            done();
        })
    })
});
    describe( 'POST /validate/password', () => {

    it('validatePassword should return false if the password is not long enough', () => {
        chai.request(server)
        .post('/validate/password')
        .send({password:"tesT"})
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.equal.to(false);
            done();
        })
    })
    it('validatePassword should return false if the password does not contain an upperCasse', () => {
        chai.request(server)
        .post('/validate/password')
        .send({password:"testt"})
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.equal.to(false);
            done();
        })
    })
    it('validatePassword should return true if the password contains an upperCasse and has at least 5 char', () => {
        chai.request(server)
        .post('/validate/password')
        .send({password:"Testt"})
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.equal.to(true);
            done();
        })
    })
})

});