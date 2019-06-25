const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 Map 
// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

// "Normal"
const idades = usuarios.map(function(item) {
    return item.idade;
    });

// Arrow Function
const idadesArrow = usuarios.map(item => item.idade)

console.log(idades);
console.log(idadesArrow);

// 2.2 Filter
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const empresa = usuarios.filter(
    usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
    );

console.log(empresa);

// 2.3 Find
// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

const empresas = usuarios.find(
    usuario => usuario.empresa === "Google"
    );

console.log(empresas);

// 2.4 Map and Filter

const user = usuarios
    .map(usuario => ({...usuario, idade: usuario.idade * 2}))
    .filter(usuario => usuario.idade <= 50);

console.log(user);