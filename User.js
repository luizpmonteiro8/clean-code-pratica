class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  login(password) {
    return this.password === password
      ? "Login bem-sucedido!"
      : "Senha incorreta.";
  }

  register() {
    return `Usuário ${this.name} registrado com email ${this.email}.`;
  }

  sayHello() {
    return `Olá, ${this.name}!`;
  }
}

module.exports = User;
