import orders from './orders'
import calc_median from './median'
import get_orders_info from './getter'
import tfoot from './stats.template'

const stats = () => {
    const order_stats = orders(get_orders_info, calc_median)
    const table = document.querySelector('table')
    table.innerHTML += tfoot(order_stats)
}

export default stats