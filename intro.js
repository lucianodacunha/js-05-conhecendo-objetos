import {faker} from '@faker-js/faker';

// 1
const livro = {
  titulo: faker.lorem.words(3),
  autor: faker.person.fullName(),
  anoPublicacao: faker.date.between(
                    {from: '1950-01-01', to: new Date()}).getFullYear(),
  genero: faker.music.genre()
}

console.log("Livro: ");
console.log(livro);


// 2
const anoAtual = new Date().getFullYear();
livro.tempoDePublicacao = `${anoAtual - livro.anoPublicacao} anos`
console.log("Tempo de publicação: ");
console.log(livro);


// 3
console.log("Acessando propriedades: ");
console.log(`titulo: ${livro["titulo"]}\n` + 
            `autor: ${livro["autor"]}\n` +  
            `anoPublicacao: ${livro["anoPublicacao"]}\n` +
            `genero: ${livro["genero"]}\n` +
            `tempoDePublicacao: ${livro["tempoDePublicacao"]}`);


// 4
livro.avaliacao = faker.number.float({min: 1, max: 10, fractionDigits: 2});
console.log("Avaliação: ");
console.log(livro);


// 5
livro.genero = "Aventura";
console.log("Gênero: ");
console.log(livro);


// 6
const avaliacaoDeletada = delete livro.avaliacao;

if (avaliacaoDeletada){
  console.log("Avaliação deletada:");
  console.log(livro);
}