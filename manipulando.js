import {faker} from '@faker-js/faker'

// 1
const pessoa = {
  nome: faker.person.firstName(),
  idade: faker.number.int(80, 18),
  estadoCivil: faker.helpers.arrayElement(["Solteiro", "Casado"]),
  veiculos: ["", "", ""].map((e) => e = faker.vehicle.vehicle())
}

const imprimePessoa = function (pessoa) {
  
  console.log(`nome: ${pessoa.nome},  tipo: ${typeof pessoa.nome}`);  
  console.log(`idade: ${pessoa.idade},  tipo: ${typeof pessoa.idade}`);  
  console.log(`estadoCivil: ${pessoa.estadoCivil}, ` +
              `tipo: ${typeof pessoa.estadoCivil}`);  
  console.log(`veiculos: ${pessoa.veiculos.toString()}, ` +
              `tipo: ${typeof pessoa.veiculos}`);  
}

console.log("Imprime pessoas1: ");
imprimePessoa(pessoa);
console.log()


// 2
pessoa.endereco = {
  rua: faker.location.streetAddress(),
  cidade: faker.location.city(),
  estado: faker.location.county()
}

const imprimePessoa2 = function (pessoa) {
  
  console.log(`nome: ${pessoa.nome},  tipo: ${typeof pessoa.nome}`);  
  console.log(`idade: ${pessoa.idade},  tipo: ${typeof pessoa.idade}`);  
  console.log(`estadoCivil: ${pessoa.estadoCivil}, ` +
              `tipo: ${typeof pessoa.estadoCivil}`);  
  console.log(`veiculos: ${pessoa.veiculos.toString()}, ` +
              `tipo: ${typeof pessoa.veiculos}`);  
  console.log(`endereco: \n` +
                `\trua: ${pessoa.endereco.rua}, ` +
                  `tipo: ${typeof pessoa.endereco.rua}\n` +
                `\tcidade: ${pessoa.endereco.cidade}, ` +
                  `tipo: ${typeof pessoa.endereco.cidade}\n` +
                `\testado: ${pessoa.endereco.estado}, ` +
                  `tipo: ${typeof pessoa.endereco.estado}`);  

}

console.log("Imprime pessoas2: ");
imprimePessoa2(pessoa);
console.log()


// 3
const criarPessoa = () => {
    return  {
      nome: faker.person.firstName(),
      idade: faker.number.int(80, 18),
      cidade: faker.location.city()
    }
  }

const pessoas = [null, null, null, null].map((e) => e = criarPessoa());

// a
const mostrarPessoa = (pessoa) => {
  console.log(`nome: ${pessoa.nome}, ` +
              `idade: ${pessoa.idade}, ` +
              `cidade: ${pessoa.cidade}`);
}

const mostrarListaDePessoas = (pessoas) => {
  pessoas.forEach(element => {
    mostrarPessoa(element);
  });
}

console.log("Mostra pessoas: ");
mostrarListaDePessoas(pessoas);
console.log();

// b
pessoas.push(criarPessoa());

// c 
console.log("Mostra pessoa pushada: ");
mostrarListaDePessoas(pessoas);
console.log();

// d
const filtraPorIdade = (p, i) => p.filter((e) => e.idade > i);

console.log("Filtro por idade: ");
mostrarListaDePessoas(filtraPorIdade(pessoas, 30));
console.log();


// 4
const calculadora = (a, b, op) => {
  let result = 0

  if (op === "soma") {
    result = a + b;
  } else if (op === "subtracao"){
    result = a - b;
  } else if (op === "divisao"){
    result = a / b;
  } else if (op === "multiplicacao"){
    result = a * b;
  } else if (op === "media"){
    result = (a + b) / 2;
  } else {
    console.log(`${op}, operação desconhecida.`);
  }

  return result
}

console.log("Calculadora: ");
console.log(`Soma: 8 + 2: ${calculadora(8, 2, "soma")}`);
console.log(`divisao: 8 / 2: ${calculadora(8, 2, "divisao")}`);
console.log(`multiplicacao: 8 * 2: ${calculadora(8, 2, "multiplicacao")}`);
console.log(`subtracao: 8 - 2: ${calculadora(8, 2, "subtracao")}`);
console.log(`media: (8 + 2) / 2: ${calculadora(8, 2, "media")}`);
console.log();


// 5
const conta = {
  titular: criarPessoa(),
  saldo: faker.number.float({min: 100, max: 10000.0, fractionDigits: 2}),
  depositar: function (valor) {
    if (valor < 0){
      console.log(`Valor não permitido: ${valor}`);
    } else {
      console.log(`Depositando ${valor} ...`);
      this.saldo += valor;
    }
  },
  sacar: function (valor) {
    if (valor > this.saldo){
      console.log(`Valor não permitido: ${valor}`);
    } else {
      console.log(`Sacando ${valor} ...`);
      this.saldo -= valor;
    }
  }
}

const imprimeConta = (conta) => {
  return `nome: ${conta.titular.nome}, ` +
         `idade: ${conta.titular.idade}, ` +
         `cidade: ${conta.titular.cidade}, ` +
         `saldo: ${conta.saldo}`;
}

console.log("Imprime conta");
console.log(imprimeConta(conta));

conta.depositar(faker.number.float({min: 100, max: 1000.0, fractionDigits: 2}));
console.log(imprimeConta(conta));
conta.sacar(faker.number.float({min: 100, max: 1000.0, fractionDigits: 2}));

console.log(imprimeConta(conta));


