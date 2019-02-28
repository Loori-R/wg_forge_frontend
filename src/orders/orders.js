export default class Orders {
  constructor(id, transaction_id, created_at, user_id, total, card_type, card_number, order_country, order_ip) {
    this.id = id;
    this.transaction_id = transaction_id;
    this.user_info = user_id;
    this.order_date = created_at;
    this.order_amount = total;
    this.card_number = card_number;
    this.card_type = card_type;
    this.location = `${order_country} (${order_ip})`;
  }

  hideCardNum(str) {
    if (!str || str.length < 7) { return 'check the card number is correct' }
    const arr_num = str.match(/(^\d{2})(\d+)(\d{4})/)
    const hide_num = arr_num[2].replace(/\d/g, '*')
    return (arr_num[1] + hide_num + arr_num[3])
  }

  convertDate(date) {
    if (!date) { return 'N/A' }
    const format_date = new Date(date * 1000)
    const options = { hour12: true }
    return (format_date.toLocaleString("en-GB", options).toUpperCase())
  }

  fullInfo() {
    return `
    <tr id="${this.id}">
      <td>${this.transaction_id}</td>
      <td class="user_data">${this.user_info}</td>
      <td>${this.convertDate(this.order_date)}</td>
      <td>$ ${this.order_amount}</td>
      <td>${this.hideCardNum(this.card_number)}</td>
      <td>${this.card_type}</td>
      <td>${this.location}</td>
    </tr>`;
  }
};
