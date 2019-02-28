import baseTable from './table.template';
import info_orders from '../../data/orders.json';
import info_users from '../../data/users.json';
import Orders from '../orders/orders';
import checkID from './checkID';

const all_info = info_orders.map((item_order) => {
  const order = new Orders(item_order)
  checkID(info_users, order)
  return order.fullInfo()
})



export default baseTable(all_info) 