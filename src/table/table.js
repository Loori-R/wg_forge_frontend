import baseTable from './table.template';
import info_orders from '../../data/orders.json';
import info_users from '../../data/users.json';
import Orders from '../orders/orders';
import checkID from './utils/checkID';
import sorter from './utils/sorter';
import userNameEvent from '../users/event';
import './index.css'

const event = () => {
  sorter(userNameEvent)
  userNameEvent()
}

window.addEventListener('load', event)

const all_info = _.map(info_orders, (item_order) => {
  const order = new Orders(item_order)
  checkID(info_users, order)
  return order.fullInfo()
})

export default baseTable(all_info) 