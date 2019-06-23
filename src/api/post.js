import postController from '../controllers/post'

export default function postApi (app) {
  app.post('/api/posts', postController.create)

  app.get('/api/posts', postController.list)
  app.get('/api/posts/:postId', postController.getDetails)

  app.put('/api/posts/:postId', postController.update)

  app.delete('/api/posts/:postId', postController.destroy)
}
