import userController from '../controllers/user'

export default function userApi (app) {
  app.post('/api/users', userController.create)

  app.get('/api/users', userController.list)
  app.get('/api/users/posts', userController.listWithPosts)
  app.get('/api/users/:userId', userController.getDetails)

  app.put('/api/users/:userId', userController.update)

  app.delete('/api/users/:userId', userController.destroy)
}
