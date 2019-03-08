const order_stats = (getter, calc_median) => {
    const all_rows = document.querySelectorAll('tbody>tr[id]')
    const orders = { total: [], male: [], female: [] }
    getter(all_rows, orders)

    const result = {
        orders_count: all_rows.length,
        orders_total: _.ceil(_.sum(orders.total), 2),
        median_value: calc_median(orders.total),
        average_check: _.ceil(_.mean(orders.total), 2),
        average_male: _.ceil(_.mean(orders.male), 2),
        average_female: _.ceil(_.mean(orders.female), 2)
    }

    return result_html(result)
}

const result_html = (obj) => {
    const result_td = {}
    _.map(obj, (item, index) => {
        if (index !== 'orders_count') { item = `$ ${item}` }
        result_td[index] = `<td colspan=6>${item}</td>`
    })
    return result_td
}

export default order_stats