class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Olá, ${this.name}!`);
    return `Olá, ${this.name}!`;
  }
}

module.exports = User;
