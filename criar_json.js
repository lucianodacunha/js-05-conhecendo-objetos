import {faker} from '@faker-js/faker';
import fs from 'fs';

const criarEstudante = () => {
  return {
    nome: faker.person.firstName(),
    idade: faker.number.int({min: 18, max: 80}),
    cpf: faker.string.numeric(11),
    telefones: ["", ""].map((e) => e = faker.phone.number()),
    endereco: {
      rua: faker.location.streetAddress(),
      numero: faker.number.int({min: 1, max: 500}),
      complemento: ""
    }
  }
}

function escreverParaArquivo(conteudo, nomeDoArquivo){
  fs.writeFile(nomeDoArquivo, conteudo, 'utf-8', (err) => {
    if (err) {
      console.error(`Erro ao gravar o arquivo: ${err}`);
      return;
    } 
    
    console.log(`Arquivo gravado com sucesso.`);
  })
}

const estudantes = ["","","","","","",].map((e) => e = criarEstudante());
const estudantesJSON = JSON.stringify(estudantes, null, 2);
escreverParaArquivo(estudantesJSON, "estudantes.json");
