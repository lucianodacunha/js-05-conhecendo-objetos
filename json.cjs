// 1, 2
const fs = require('fs');
const estudantes = require('./estudantes.json');

console.log(typeof estudantes);
console.log(estudantes);
console.log(estudantes[0].nome);
console.log(estudantes[2].cpf);
console.log(estudantes[4].endereco);
console.log();


// 3

const estudante =   {
  nome: 'Theodore',
  idade: 22,
  cpf: '11179015726',
  telefones: [ '1-222-620-3333 x8754', '1-462-4444-4444' ],
  endereco: { 
    rua: '11 Torn Ben', 
    numero: 11,
    complemento: '' }
}

const estudante1 = {
  nome: 'Olga',
  idade: 53,
  cpf: '33079015726',
  telefones: [ '1-239-620-3652 x8754', '1-462-985-6583' ],
  endereco: { rua: '128 Fisher Gardens', numero: 77, complemento: '' }
}

let estudanteStr = JSON.stringify(estudante, null, 2);
console.log(estudanteStr);
console.log();

// 4
estudantes.pop();
console.log(estudantes);
estudantes.push(estudante);
console.log(estudantes);

function escreverParaArquivo(conteudo, nomeDoArquivo){
  fs.writeFile(nomeDoArquivo, conteudo, 'utf-8', (err) => {
    if (err) {
      console.error(`Erro ao gravar o arquivo: ${err}`);
      return;
    } 
    
    console.log(`Arquivo gravado com sucesso.`);
  })
}

estudanteStr = JSON.stringify(estudantes, null, 2);
escreverParaArquivo(estudanteStr, 'estudantes.json');


// 5
const pessoaOriginal = {
  id: 1,
  nome: "Alice",
  idade: 30
}

function retornaNovoObjeto(objeto){
  return {...objeto};
}

const novaPessoa = retornaNovoObjeto(pessoaOriginal);
novaPessoa.cpf = '05203942975';
console.log(pessoaOriginal);
console.log(novaPessoa);
