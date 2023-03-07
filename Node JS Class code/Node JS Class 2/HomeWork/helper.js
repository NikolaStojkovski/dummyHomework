class Users {
  constructor(username, password, age, isActive, date) {
    (this.username = username),
      (this.password = password),
      (this.age = age),
      (this.isActive = isActive),
      (this.date = date);
  }
}
module.exports = { Users };
