import UserApi from './user'
import PostApi from './post'

export default function ApiRoutes (app) {
  UserApi(app)
  PostApi(app)
}
