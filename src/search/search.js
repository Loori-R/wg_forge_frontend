const search = (stats) => {
    const input = document.querySelector('input')
    const tbody = document.querySelector('tbody')
    const rows = tbody.children
    const nothing = `<tr><td colspan='7'>Nothing found</td></tr>`
    input.disabled = false

    function searching() {
        const reg = new RegExp(input.value, 'i')
        _.map(rows, (item) => {
            (reg.test(item.textContent)) ? item.style.display = '' : item.style.display = 'none'
        })
        if (_.every(rows, ['style.display', 'none'])) {
            tbody.innerHTML += nothing
        }
        stats()
    }
    input.addEventListener('keyup', searching)
}

export default search