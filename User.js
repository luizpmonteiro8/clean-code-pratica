class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  sayHello() {
    return `Olá, ${this.name}!`;
  }
}

module.exports = User;
