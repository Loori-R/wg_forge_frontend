const cases = (col, rows) => {
    let res
    switch (col) {

        case 1: //user info
            res = _.sortBy(rows, (item) => {
                const full_name = item.cells[col].firstChild.textContent;
                const name = _.join(_.slice(full_name, 4))
                return name
            });
            break;

        case 3: //order amount
            res = _.sortBy(rows, (item) => {
                const arr = _.slice(item.cells[col].textContent, 2)
                const num = parseFloat(_.join(arr, ''))
                return num
            });
            break;

        default:
            res = _.sortBy(rows, (item) => { return item.cells[col].textContent });
            break;
    }
    const rows = _.map(res, (item) => { return item.outerHTML })
    return _.join(rows, '')
}
export default cases