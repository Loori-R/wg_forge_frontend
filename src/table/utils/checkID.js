import Users from '../../users/users';

const checkID = (info_users, order) => {
  _.map(info_users, (item_user) => {
    if (item_user.id === order.user_id) {
      const user = new Users(item_user)
      order.userInfo(user)
    }
  })
}

export default checkID