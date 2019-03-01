import Users from '../../users/users';

const checkID = (info_users, order) => {
  info_users.map((item_user) => {
    if (item_user.id === order.user_id) {
      const user = new Users(item_user)
      order.userInfo(user)
    }
  })
}

export default checkID