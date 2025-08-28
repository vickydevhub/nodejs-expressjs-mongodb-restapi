const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const http = require('http');
//const app = require('../app');
const UserModel = require('../models/User'); 
const request = require('supertest');
let should = chai.should();
chai.use(chaiHttp);
const expect = chai.expect;

describe('User API', () => {
  const baseurl = 'http://localhost:6000';
  var bookingId;
  var token;

  before(function(done) {
      request(baseurl)
          .post('/user/signing')
          .send({
              "email": "user@test.com",
              "password": "password123"
          })
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
          .end(function(err, res) {
              expect(res.statusCode).to.be.equal(200);
              expect(res.body.token).not.to.be.null;
              token = res.body.token;
              if (err) {
                  throw err;
              }
              done();
          });
  });
  it('should successfully create a product',async () => {
     this.timeout(20000);
    const res = await request(baseurl)
      .post('/product/add')
      .send({
        "name": "Ball",
        "price": 1.0
      })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
      const body = res.body;
        //.end(function(err, res) {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body._id).not.to.be.null;
        expect(res.body.name).to.be.equal("Ball");
        expect(res.body.price).to.be.equal(1.0);
        productId = res.body._id;
        // if (err) {
        //     throw err;
        // }
        // done();
        //}).catch((err) => done(err)); // this is missing
});
  
});