import chai from 'chai'
import chaiHttp from 'chai-http'

import app from '../../src/app'
import { User } from '../../src/models'

process.env.NODE_ENV = 'test'

const should = chai.should()
chai.use(chaiHttp)

describe('User API', function () {
  describe('GET', function () {
    it('should get all users', function (done) {
      chai
        .request(app)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })

    it('should get all users with their posts', function (done) {
      chai
        .request(app)
        .get('/api/users/posts')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })

    it('should get a specific user', function (done) {
      const userId = 1
      chai
        .request(app)
        .get(`/api/users/${userId}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })

    it('should get a specific user\'s posts', function (done) {
      const userId = 1
      chai
        .request(app)
        .get(`/api/users/${userId}/posts`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
  })

  describe('POST', function () {
    it('should create a new user', function (done) {
      const userData = {
        name: 'Steven Payne',
        email: 'steven.g.payne@hotmail.com'
      }

      chai
        .request(app)
        .post('/api/users')
        .send(userData)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.be.a('object')
          res.body.should.have.property('success').eq(true)
          done()
        })
    })
  })

  describe('PUT', function () {
    it('should update a user', function (done) {
      const userId = 1
      const userData = {
        name: 'Update McGee',
        email: 'mcgee@update.com'
      }

      chai
        .request(app)
        .put(`/api/users/${userId}`)
        .send(userData)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.be.a('object')
          res.body.should.have.property('success').eq(true)
          done()
        })
    })
  })

  describe('DELETE', function () {
    it('should delete a user', function (done) {
      const userId = 1

      chai
        .request(app)
        .delete(`/api/users/${userId}`)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.be.a('object')
          res.body.should.have.property('success').eq(true)
          done()
        })
    })
  })
})
