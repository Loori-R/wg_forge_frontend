export default class Users {
  constructor(user_obj) {
    this.id = user_obj.id;
    this.gender = (user_obj.gender === 'Male') ? 'Mr.' : 'Ms.';
    this.name = `${user_obj.first_name} ${user_obj.last_name}`
  }

  fullInfo() {
    return `<a href="#">${this.gender} ${this.name}</a>`;
  }
};
