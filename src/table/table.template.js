const table_template = (main) => `
<a href=#stats>Statistic</a>
<table>
  <thead>
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