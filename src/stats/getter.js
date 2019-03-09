const get_orders_info = (all_rows, obj) => {
    _.map(all_rows, (item) => {
        //get number
        const str = _.slice(item.cells[3].textContent, 2)
        const num = parseFloat(_.join(str, ''))
        obj.total.push(num)
        //get gender
        const name = item.cells[1].firstChild.textContent
        const test_male = /mr/i.test(name)
        test_male ? obj.male.push(num) : obj.female.push(num)
    })
}

export default get_orders_info