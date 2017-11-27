var chai = require('chai');
var expect = chai.expect;
let chaiHttp = require('chai-http');
var validationController = require('../api/controllers/validationController');
var http = require('http');
let server = require("../server");
const should = chai.should();
chai.use(chaiHttp);
describe('Validation', () => {
    describe('POST /validate/mail', () => {

    it('validateEmail should return false if the mail passed is not valid', (done) => {
        chai.request(server)
        .post('/validate/email')
        .send({mail:"test@test"})
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.eql(false);
            done();
        })
    });
    it('validateEmail should return false if the mail passed is empty', (done) => {
        chai.request(server)
        .post('/validate/email')
        .send({mail:null})
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.eql(false);
            done();
        })
    });
    it('validateEmail should return true if the mail passed is valid', (done) => {
        chai.request(server)
        .post('/validate/email')
        .send({mail:"test@test.com"})
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.eql(true);
            done();
        })
    })
});
    describe( 'POST /validate/password', () => {

    it('validatePassword should return false if the password is not long enough', (done) => {
        let password = {password:"tesT"}; 
        chai.request(server)
        .post('/validate/password')
        .send(password)
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.eql(false);
            done();
        })
    })
    it('validatePassword should return false if the password does not contain an upperCasse', (done) => {
        chai.request(server)
        .post('/validate/password')
        .send({password:"testt"})
        .end((err,res)=>{
            should.exist(res);
            res.should.have.status(200);
            should.exist(res.body);
            res.body.should.be.eql(false);
            done();
        })
    })
    it('validatePassword should return true if the password contains an upperCasse and has at least 5 char', (done) => {
        chai.request(server)
        .post('/validate/password')
        .send({password:"Testt"})
        .end((err,res)=>{
            console.log(res.body);
            res.should.have.status(200);
            res.body.should.be.eql(true);
            done();
        })
    })
})

});