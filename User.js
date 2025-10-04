class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  login(password) {
    return this.password === password
      ? "Login bem-sucedido!"
      : "Senha incorreta.";
  }

  sayHello() {
    return `Olá, ${this.name}!`;
  }
}

module.exports = User;
