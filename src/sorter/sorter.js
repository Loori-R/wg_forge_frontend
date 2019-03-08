import cases from './cases'

const sorter = (callback) => {
  const table = document.querySelector('table')
  table.addEventListener('click', (e) => {
    const target = e.target
    //table elements
    const tbody = table.children[1]
    const theads = table.children[0].children[0].cells //table>thead>tr>th
    const rows = tbody.children //table>tbody>tr>th    
    const col = target.cellIndex
    //prevent event
    const prevent = target.nodeName !== 'TH' || col === 4 || target.children.length > 0 || target.id === 'stats'
    if (prevent) return
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