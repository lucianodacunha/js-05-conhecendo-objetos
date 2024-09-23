// 1

const estudantes = require('./estudantes.json');
// console.log(estudantes);

function encontrarPorCPF(lista, valor){
  const result =  lista.find((e) => e.cpf === valor);
  return result ? result : "Não encontrado";
}

// cpf = '15203942975'; // inexistente
cpf = '05203942975'; // existente
console.log(encontrarPorCPF(estudantes, cpf));
console.log();


// 2
function filtraEstudantesPorIdade(lista, idade){
  return lista.filter((e) => e.idade > idade);
}

console.log(filtraEstudantesPorIdade(estudantes, 30));
console.log();


// 3
function filtraOrdenarPorIdade(lista, idade){
  return lista.filter(e => e.idade >= idade).sort((a, b) => a.idade - b.idade);
}

console.log(filtraOrdenarPorIdade(estudantes, 30));
console.log();


// 4
function ordernarPorIdade2(lista, crescente){
  return lista.sort(
    (a, b) => crescente ? a.idade - b.idade : b.idade - a.idade);
}

console.log(ordernarPorIdade2(estudantes, false));
console.log();


// 5
function buscarEstudantePorNome(estudantes, nome){
  const estudante = estudantes.find(estudante => estudante.nome === nome);
  return estudante ? estudante : "Não encontrado";

}

console.log(buscarEstudantePorNome(estudantes, "Carolyne"));