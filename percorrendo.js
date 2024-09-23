import {faker} from '@faker-js/faker';

const criarPessoa = () => {
  return  {
    nome: faker.person.firstName(),
    notas: [0,0,0,0].map((e) => faker.number.int(10, 1)),
    calcularMediaDasNotas: function(){
      const total = this.notas.reduce((a, e) => a + e, 0);
      return total / this.notas.length;
    },
    classificarDesempenho: function(media){
      let desempenho;
      if (media >= 9){
        desempenho = `Desempenho excelente, média >= 9`;
      } else if (media >= 7.5) {
        desempenho = `Bom desempenho, 7.5 <= média entre 7.6 e 8.9`;
      } else if (media >= 6) {
        desempenho = `Desempenho regular, 6 <= média entre 6 e 7.5`;
      } else {
        desempenho = `Desempenho insuficiente, média < 6`;
      }

      return desempenho;
    }
  }
}

const imprimePessoa = (pessoa) => {
  console.log(`Nome:  ${pessoa.nome}\n` + 
              `Notas:  ${pessoa.notas}\n` + 
              `Média:  ${pessoa.calcularMediaDasNotas()}\n` +
              `Classificação:  ${pessoa.classificarDesempenho(
                                  pessoa.calcularMediaDasNotas())}\n` 
              );
}

imprimePessoa(criarPessoa());


// 2
const criarCarro = () => {
  return {
    marca: faker.vehicle.manufacturer(),
    modelo: faker.vehicle.type(),
    ano: faker.date.between({from: '2000-01-01', to: new Date()}).getFullYear(),
    cor: faker.color.human()
  }
}

const carro = criarCarro();

for(let chave in carro){
  console.log(`chave: ${chave}, valor: ${carro[chave]}`);
}
console.log();

carro.combustivel = faker.vehicle.fuel();

for(let chave in carro){
  console.log(`chave: ${chave}, valor: ${carro[chave]}`);
}
console.log();


// 3 
carro.ligado = faker.helpers.arrayElement([true, false]);
carro.ligar = function () {
  if (this.ligado){
    console.log("O carro já está ligado!");
  } else {
    console.log("Ligando o carro...");
    this.ligado = true;
  }
}
carro.desligar = function () {
  if (this.ligado){
    console.log("Desligando o carro...");
    this.ligado = false;
  } else {
    console.log("O carro já está desligado!");
  }
}
carro.obterDetalhes = function(){
  return `marca: ${this.marca}\n` +
         `modelo: ${this.modelo}\n` +
         `ano: ${this.ano}\n` +
         `cor: ${this.cor}\n` +
         `combustivel: ${this.combustivel}\n` +
         `ligado: ${this.ligado}`
}

console.log(carro.obterDetalhes());
carro.ligar();
carro.desligar();
console.log(carro.obterDetalhes());
console.log();


// 4
Object.defineProperty(carro, 'placa', {
  value: faker.vehicle.vrm(),
  enumerable: false
});

for(let chave in carro){
  if (typeof carro[chave] != "function")
    console.log(`chave: ${chave}, valor: ${carro[chave]}`);
}
console.log();

const chaves = Object.keys(carro);
console.log(`Array de keys: ${chaves}`);
console.log();

console.log(`Placa: ${carro.placa}`);
console.log();


// 5
let outroCarro = criarCarro();
console.log(outroCarro);
console.log();

outroCarro = {...carro, ...outroCarro};
console.log(outroCarro);
console.log();

outroCarro.cor = faker.color.human();
console.log(outroCarro);
