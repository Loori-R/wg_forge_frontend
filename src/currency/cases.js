const cases = (currency) => {
    let res
    switch (currency) {
        case 'EUR':
            res = '€'
            break;
        case 'CNY':
            res = '¥'
            break;
        case 'RUB':
            res = '₽'
            break;
        default:
            res = '$'
            break;
    }
    return res
}
export default cases