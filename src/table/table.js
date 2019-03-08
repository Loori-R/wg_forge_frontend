import info_orders from '../../data/orders.json';
import info_users from '../../data/users.json';
import table_template from './table.template';
import Orders from '../orders/orders';
import checkID from './utils/checkID';
import events from './utils/events'
import './index.css'

window.addEventListener('load', events)

const all_info = _.map(info_orders, (item_order) => {
  const order = new Orders(item_order)
  checkID(info_users, order)
  return order.fullInfo()
})

export default table_template(all_info) 