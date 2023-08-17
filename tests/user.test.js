const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const http = require('http');
const app = require('../app');
const UserModel = require('../models/User'); 
const request = require('supertest');
let should = chai.should();
chai.use(chaiHttp);
const expect = chai.expect;

describe('User API', () => {
  let server;
  let createUserStub;

  before(async () => {
    server = http.createServer(app);
    await server.listen(0);
  });

  after(async () => {
    await server.close();
  });

  beforeEach(() => {
    createUserStub = sinon.stub(UserModel, 'create');
  });

  afterEach(() => {
    createUserStub.restore();
  });
  

  it('should register a new user',  async function () { // Note the "done" parameter
    const user = { username: 'testuser',  password: 'testpass' };
    
    createUserStub.resolves(user);

    chai.request(server)
      .post('/user/add')
      .send(user)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(201);
        expect(res.body.username).to.equal(user.username);
        expect(createUserStub.calledOnce).to.be.true;
        done(); // Signal the completion of the test
      });
  });
});

describe('GET /user/signin', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/user/signin')
      .auth('email', 'password')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});