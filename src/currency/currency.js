import exchange_rates from './fetch'
import cases from './cases'

let count = 1

const currency = (stats) => {
    const rows = document.querySelectorAll('tbody>tr[id]')
    const buttons = document.querySelector('#currency_converter')
    buttons.addEventListener('click', (e) => {
        if (e.target.nodeName !== 'BUTTON') { return }
        const currency = e.target.value
        const rate = exchange_rates[0].rates[currency]
        const symbol = cases(currency)
        if (count === rate) { return }
        _.map(rows, (item) => {
            const str = _.slice(item.cells[3].textContent, 2)
            const num = parseFloat(_.join(str, '')) / count
            const res = _.ceil(num * rate, 2)
            item.cells[3].innerHTML = `${symbol} ${res}`
        })
        count = rate
        stats(symbol)
    })
}

export default currency

