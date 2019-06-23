
export default function PostModel (sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    userId: DataTypes.STRING,
    timestamp: DataTypes.STRING,
    content: DataTypes.STRING
  }, {})

  Post.associate = function PostAssociate (models) {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }

  return Post
}
