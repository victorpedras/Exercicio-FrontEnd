//Ex 1

let notas = [7, 8, 6, 9, 5];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma = soma + notas[i];
}

let media = soma / notas.length;

console.log("Média da turma:", media.toFixed(2));


//Ex 2

let opcoes = ["pedra", "papel", "tesoura"];

let vitorias = 0;
let derrotas = 0;
let empates = 0;

// escolha do usuário
let usuario = "pedra";

// escolha do computador
let computador = opcoes[Math.floor(Math.random() * 3)];

console.log("Usuário:", usuario);
console.log("Computador:", computador);

if (usuario === computador) {
  empates++;
  console.log("Empate");
} else if (
  (usuario === "pedra" && computador === "tesoura") ||
  (usuario === "papel" && computador === "pedra") ||
  (usuario === "tesoura" && computador === "papel")
) {
  vitorias++;
  console.log("Usuário venceu");
} else {
  derrotas++;
  console.log("Computador venceu");
}

console.log("Vitórias:", vitorias);
console.log("Derrotas:", derrotas);
console.log("Empates:", empates);


//Ex 3 

function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(ehPrimo(7));  // true
console.log(ehPrimo(10)); // false


//Ex 4 

let n = 10;

let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i < n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Sequência de Fibonacci:");
console.log(fibonacci);