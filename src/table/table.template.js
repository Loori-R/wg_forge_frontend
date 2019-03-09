const table_template = (main) => `
<table>
  <thead>
    <tr>
      <th>Search:</th>
      <th><input type="text" id="search" disabled autofocus></th>
      <th colspan='5' id='currency_converter'>
      <button value='USD'>USD</button>
      <button value='EUR'>EUR</button>      
      <button value='CNY'>CNY</button>
      <button value='RUB'>RUB</button></th>
    </tr>
    <tr>
      <th>Transaction ID</th>
      <th>User Info</th>
      <th>Order Date</th>
      <th>Order Amount</th>
      <th>Card Number</th>
      <th>Card Type</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    ${_.join(main, "")}
  </tbody>
</table>`;

export default table_template