class User {
  constructor(name, email, password) {
    this.name = name;
  }

  sayHello() {
    return `Olá, ${this.name}!`;
  }
}

module.exports = User;
