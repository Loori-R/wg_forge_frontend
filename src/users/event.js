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

export default show_hide