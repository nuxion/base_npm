process.env.NODE_ENV = 'test';

const BASE_URI = process.env.BASE_URI || '/api/v1';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../lib/index');

describe('routes : root', () => {

  describe(`GET ${BASE_URI}/`, () => {
    it('should return json', (done) => {
      chai.request(server)
      .get(`${BASE_URI}/`)
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.equal('success');
        res.body.message.should.eql('hello, world!');
        done();
      });
    });
  });

  describe(`POST ${BASE_URI}/`, () => {
    it('should return json', (done) => {
      chai.request(server)
      .post(`${BASE_URI}/`)
      .send({ test: 'hello post' })
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.eql(201);
        res.type.should.eql('application/json');
        res.body.status.should.equal('success');
        res.body.message.should.include.keys('test');
        done();
      });
    });
  });

});
