import createError from 'http-errors'

class UserController {

  create (req, res, next) {
    return next(createError(501, 'Not implemented'))
  }

  list (req, res, next) {
    return next(createError(501, 'Not implemented'))
  }

  listWithPosts (req, res, next) {
    return next(createError(501, 'Not implemented'))
  }

  getDetails (req, res, next) {
    return next(createError(501, 'Not implemented'))
  }

  update (req, res, next) {
    return next(createError(501, 'Not implemented'))
  }

  destroy (req, res, next) {
    return next(createError(501, 'Not implemented'))
  }
}

export default new UserController()
