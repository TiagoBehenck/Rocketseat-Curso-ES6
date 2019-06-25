// 5.1 

const arr = [1, 2, 3, 4, 5, 6];

// REST 
const [x, ...y] = arr;

console.log(x);
console.log(y);

function soma (...nums) {
  return nums.reduce((a, b) => a + b);
}

// 5.2 

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };

// SPREAD

const usuario2 = { ...usuario, nome: "Gabriel" };
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: "Lontras" }};

console.log(usuario2);
console.log(usuario3);