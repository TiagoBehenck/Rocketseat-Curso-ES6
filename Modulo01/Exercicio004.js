const empresa = {
  nome: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
 };

// 4.1
 
const { nome, endereco: { cidade, estado }} = empresa;

console.log(empresa);

// 4.2 

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
 }
 console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
