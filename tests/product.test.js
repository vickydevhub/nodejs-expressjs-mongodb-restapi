const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../app'); // Update the path accordingly
const UserModel = require('../models/userModel'); // Update the path accordingly

chai.use(chaiHttp);
const expect = chai.expect;

describe('User API', () => {
  // Stub for the UserModel.create method
  let createUserStub;

  beforeEach(() => {
    createUserStub = sinon.stub(UserModel, 'create');
  });

  afterEach(() => {
    createUserStub.restore();
  });

  it('should register a new user', async () => {
    const user = { username: 'testuser', password: 'testpass' };
    
    createUserStub.resolves(user);

    const res = await chai.request(app)
      .post('/api/users/register')
      .send(user);

    expect(res).to.have.status(201);
    expect(res.body.username).to.equal(user.username);
    expect(createUserStub.calledOnce).to.be.true;
  });
});