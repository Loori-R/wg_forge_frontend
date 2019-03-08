const calc_median = (array) => {
    const arr_sorted = _.sortBy(array, (item) => { return item })
    const length = (arr_sorted.length)
    if (length % 2 === 0) {
        const first = (length / 2) - 1
        const second = (first + 1)
        const index_median = (arr_sorted[first] + arr_sorted[second]) / 2
        return index_median
    } else {
        const index_median = _.ceil(length / 2) - 1
        return arr_sorted[index_median]
    }
}

export default calc_median