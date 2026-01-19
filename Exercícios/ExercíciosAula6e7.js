//Aula 6 -- Ex 1

const depositoInicial = 500;
const juros = 0.01;
const depositoMes2 = 200;
const saqueMes3 = 50;

let saldo = depositoInicial;

// 1º mês
saldo = saldo + (saldo * juros);

// 2º mês
saldo = saldo + (saldo * juros);
saldo = saldo + depositoMes2;

// 3º mês
saldo = saldo + (saldo * juros);
saldo = saldo - saqueMes3;

// 4º mês
saldo = saldo + (saldo * juros);

console.log("Saldo final: R$", saldo.toFixed(2));


//Ex 2

const nomeUsuario = "Victor";
let idadeUsuario = 18;
const emailUsuario = "victor@email.com";
let statusAtivo = true;
let numeroLogins = 0;

// simulando login
numeroLogins++;

console.log(nomeUsuario);
console.log(idadeUsuario);
console.log(emailUsuario);
console.log(statusAtivo);
console.log(numeroLogins);


//Ex 3 

// Área do retângulo
let largura = 5;
let altura = 10;
let area = largura * altura;

// Perímetro do círculo
const pi = 3.14;
let raio = 7;
let perimetro = 2 * pi * raio;

// Média de três números
let n1 = 8;
let n2 = 6;
let n3 = 10;
let media = (n1 + n2 + n3) / 3;

console.log(area);
console.log(perimetro);
console.log(media);


//Ex 4

const produto = "Notebook";
let preco = 3500;

// Concatenação
console.log("Produto: " + produto + " | Preço: R$ " + preco);

// Template literal
console.log(`Produto: ${produto} | Preço: R$ ${preco}`);

// Métodos de string
console.log(produto.toUpperCase());
console.log(produto.toLowerCase());
console.log(produto.length);


//Ex 5

let nome = "";
let idade = 0;

if (nome) {
  console.log("Nome válido");
} else {
  console.log("Nome inválido");
}

if (idade) {
  console.log("Idade válida");
} else {
  console.log("Idade inválida");
}


//Ex 6

console.log(5 == "5");   // true
console.log(5 === "5");  // false

console.log(true == 1);  // true
console.log(true === 1); // false


//Ex 7

const usuario1 = "admin";
const senha1 = "123456";

if (usuario1 === "admin" && senha1 === "123456") {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}


//Aula 7 -- Ex 1

let nota1 = 7;
let nota2 = 6;
let nota3 = 8;

let media1 = (nota1 + nota2 + nota3) / 3;

if (media1 >= 7) {
  console.log("Aprovado");
} else if (media1 >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

console.log("Média:", media1.toFixed(1));


//Ex 2

let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

// Verifica se forma um triângulo
if (lado1 + lado2 > lado3 &&
    lado1 + lado3 > lado2 &&
    lado2 + lado3 > lado1) {

  if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo Equilátero");
  } else if (
    lado1 === lado2 ||
    lado1 === lado3 ||
    lado2 === lado3
  ) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }

} else {
  console.log("Não forma um triângulo");
}


//Ex 3

const usuario = "admin";
const senha = "123456";

if (usuario === "admin" && senha === "123456") {
  console.log("Acesso de administrador");
} else if (usuario === "joao" || usuario === "maria") {
  console.log("Acesso de usuário");
} else {
  console.log("Acesso negado");
}