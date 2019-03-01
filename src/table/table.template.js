const baseTable = (info) => `
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
    ${_.join(info, "")}
  </tbody>
</table>`;

export default baseTable