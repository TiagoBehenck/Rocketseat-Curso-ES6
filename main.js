// class TodoList {
//     constructor() {
//         this.todos = [];
//     }

//     addTodo() {
//         this.todos.push('Novo');
//         console.log(this.todos);
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.addTodo();
// } 

const arr = [1, 3, 4, 5, 8, 9];

// O forEach() não necessita de um return e não retorna um novo array,
// já o map() sempre precisa retornar o resultado final e sempre retorna
// um novo Array. Sendo assim, utilize o map() sempre que “eu quero
// alterar a propriedade de um ou mais elementos do meu array e retornar
// um novo array”.


const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);

// Com Arrow Function
// Utilizar em funções anônimas

const newArrow = arr.map(item => item * 2);

console.log(newArrow);

// Para retornar um objeto deve estar entre ( { objeto } )

const teste = () => ({ nome: 'Tiago' });

const sum = arr.reduce(function (total, next) {
    return total + next;
});

// 0
// 1

// 1
// 3

// 4 
// 5 

console.log(sum);

// utilizar o filter sempre que
// “preciso adicionar num novo array
// todos os elementos que satisfazem minha condição”.

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
    return item === 4;
});

// Conceito de desestruturação, pode se usar em parâmetros de funções também

const usuario = {
    nome: 'Tiago',
    idade: '22',
    endereco: {
        cidade: 'Criciúma',
        estado: 'SC',
    },
};

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

// REST 

function soma (...params) {
    
}

console.log(soma(1,3,4));

// SPREAD

const user = { ...usuario, nome: 'João'};

console.log(user); 