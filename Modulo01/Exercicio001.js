class Usuario {

    constructor(email, senha) {

        this.email = email;
        this.senha = senha;
    }

    // Método para saber se é ou não admin 
    isAdmin(){
        return this.admin === true;
    }
}

class Admin extends Usuario {

    constructor(email, senha) {

        // Passando para a classe pai
        super(email, senha);

        // Atribuindo valor true para a variável admin para certificar que é admin
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin());  // true