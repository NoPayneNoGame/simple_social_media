import createError from 'http-errors'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import ApiRoutes from './api'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

// Routes
ApiRoutes(app)

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
  // res.render('error')
})

export default app
