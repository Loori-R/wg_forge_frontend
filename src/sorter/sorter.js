import cases from './cases'

const sorter = (callback) => {
  const table = document.querySelector('table')
  table.addEventListener('click', (e) => {
    const target = e.target
    //table elements
    const tbody = table.children[1]
    const theads = table.children[0].children[1].cells //table>thead>tr>th
    const rows = tbody.children //table>tbody>tr   
    const col = target.cellIndex
    //prevent event
    const nothing = _.some(rows, ['cells.length', 1])
    const has_arrow = target.children.length > 0
    const card_num = col === 4
    const other_row = target.parentNode.rowIndex !== 1
    const tag = target.nodeName !== 'TH'
    if (nothing || has_arrow || card_num || other_row || tag) return
    //reset arrow for sorted th
    const activeTH = _.filter(theads, ['children.length', 1])
    _.map(activeTH, (item) => { item.lastChild.remove() })
    //add arrow for sorted th
    target.insertAdjacentHTML('beforeEnd', '<span>&#8595;</span>')
    tbody.innerHTML = cases(col, rows)
    callback(); //add events for user name link
  })
}

export default sorter