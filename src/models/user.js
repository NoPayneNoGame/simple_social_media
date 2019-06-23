
export default function UserModel (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {})

  User.associate = function UserAssociate (models) {
    User.hasMany(models.Post, {
      foreignKey: 'userId',
      as: 'comments'
    })
  }

  return User
}
