class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  register() {
    return `Usuário ${this.name} registrado com email ${this.email}.`;
  }

  sayHello() {
    return `Olá, ${this.name}!`;
  }
}

module.exports = User;
