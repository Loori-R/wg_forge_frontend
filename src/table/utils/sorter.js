const sorter = (callback) => {
  const table = document.querySelector('table')
  const tbody = document.querySelector('tbody')
  const theads = table.children[0].children[0].children

  table.addEventListener('click', (e) => {
    const col = e.target.cellIndex
    const rows = document.querySelectorAll('tr[id]')
    if (e.target.nodeName !== 'TH' || col === 4 || e.target.children.length > 0) return
    const activeTH = _.filter(theads, ['children.length', 1])
    _.map(activeTH, (item) => { item.lastChild.remove() })
    if (e.target.children.length == 0) e.target.insertAdjacentHTML('beforeEnd', '<span>&#8595;</span>');
    let res
    switch (col) {
      case 1:
        res = _.sortBy(rows, [(item) => {
          const fullname = item.cells[col].firstChild.textContent;
          const name = _.join(_.slice(fullname, 4))
          return name
        }]);
        break
      default:
        res = _.sortBy(rows, [(item) => {
          return item.cells[col].textContent
        }]);
        break;
    }
    const row = _.map(res, (item) => { return item.outerHTML })
    tbody.innerHTML = _.join(row, '')
    callback();
  })
}

export default sorter