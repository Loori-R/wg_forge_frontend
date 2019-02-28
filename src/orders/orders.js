export default class Orders {
  constructor(order_obj) {
    this.id = order_obj.id;
    this.transaction_id = order_obj.transaction_id;
    this.user_id = order_obj.user_id;
    this.order_date = order_obj.created_at;
    this.order_amount = order_obj.total;
    this.card_number = order_obj.card_number;
    this.card_type = order_obj.card_type;
    this.location = `${order_obj.order_country} (${order_obj.order_ip})`;
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

  userInfo(user) { this.user_id = user.fullInfo() }

  fullInfo() {
    return `
    <tr id="${this.id}">
      <td>${this.transaction_id}</td>
      <td class="user_data">${this.user_id}</td>
      <td>${this.convertDate(this.order_date)}</td>
      <td>$ ${this.order_amount}</td>
      <td>${this.hideCardNum(this.card_number)}</td>
      <td>${this.card_type}</td>
      <td>${this.location}</td>
    </tr>`;
  }
};
