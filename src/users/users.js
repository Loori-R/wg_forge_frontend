import companies from '../../data/companies'

export default class Users {
  constructor(user_obj) {
    this.id = user_obj.id;
    this.gender = (user_obj.gender === 'Male') ? 'Mr.' : 'Ms.';
    this.name = `${user_obj.first_name} ${user_obj.last_name}`
    this.birthday = (user_obj.birthday) ? user_obj.birthday : ''
    this.avatar = (user_obj.avatar) ? user_obj.avatar : 'https://robohash.org/yuryMolodov.jpg?size=100x100&set=set1'
    this.company_id = (user_obj.company_id) ? user_obj.company_id : 'n/a'
    this.company = this.checkCompany()
  }

  convertDate(date) {
    if (!date) { return 'n/a' }
    const format_date = new Date(date * 1000)
    return (format_date.toLocaleDateString("en-GB"))
  }

  checkCompany() {
    const res = companies.find(item => item.id === this.company_id);
    if (!res) {
      const err = { full: '' }
      return err
    }
    else if (!res.url) { res.full = `<p>Company: ${res.title}</p><p>Industry: ${res.industry}</p>` }
    else (res.full = `<p>Company: <a href="${res.url}" target="_blank"">${res.title}</a></p><p>Industry: ${res.industry}</p>`)
    return res
  }

  fullInfo() {
    return (`<a href="#">${this.gender} ${this.name}</a>
    <div class="user-details">
            <p>Birthday:${this.convertDate(this.birthday)}</p>
            <p><img src="${this.avatar}" width="100px"></p>
            ${this.company.full}            
    </div>`)
  }
};
