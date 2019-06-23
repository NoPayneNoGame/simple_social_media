import chai from 'chai'
import chaiHttp from 'chai-http'

import app from '../../src/app'
import { Post } from '../../src/models'

process.env.NODE_ENV = 'test'

const should = chai.should()
chai.use(chaiHttp)

describe('Post API', function () {
  describe('GET', function () {
    it('should get all posts', function (done) {
      chai
        .request(app)
        .get('/api/posts')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })

    it('should get a specific post', function (done) {
      const postId = 1
      chai
        .request(app)
        .get(`/api/posts/${postId}`)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
  })

  describe('POST', function () {
    it('should create a new post', function (done) {
      const postData = {
        userId: 1,
        content: 'Hello World',
        timestamp: Date.now()
      }

      chai
        .request(app)
        .post('/api/posts')
        .send(postData)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.be.a('object')
          res.body.should.have.property('success').eq(true)
          done()
        })
    })
  })

  describe('PUT', function () {
    it('should update a post', function (done) {
      const postId = 1
      const postData = {
        userId: 1,
        content: 'Hello Update',
        timestamp: Date.now()
      }

      chai
        .request(app)
        .put(`/api/posts/${postId}`)
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
    it('should delete a post', function (done) {
      const postId = 1

      chai
        .request(app)
        .delete(`/api/posts/${postId}`)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.be.a('object')
          res.body.should.have.property('success').eq(true)
          done()
        })
    })
  })
})