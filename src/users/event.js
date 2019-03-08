const show_hide = (e) => {
  e.preventDefault()
  const details = e.target.nextElementSibling
  switch (details.style.height) {
    case '300px':
      details.style.height = '0px';
      break;
    default: details.style.height = '300px';
      break;
  }
}

const name_event = () => {
  const elem = document.querySelectorAll('.user-name')
  _.map(elem, (item) => {
    item.style.pointerEvents = 'auto';
    item.addEventListener('click', (e) => { show_hide(e) })
  })
}


export default name_event