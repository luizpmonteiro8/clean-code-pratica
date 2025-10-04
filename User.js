class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Olá, ${this.name}!`;
  }
}

module.exports = User;
