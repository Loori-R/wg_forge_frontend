import baseTable from './table.template';
import orders from '../../data/orders.json';
import Orders from '../orders/orders';

const infoOrders = orders.map((item) => {
  const order = new Orders(item.id, item.transaction_id, item.created_at, item.user_id, item.total, item.card_type, item.card_number, item.order_country, item.order_ip)
  return order.fullInfo()
})

export default baseTable(infoOrders) 