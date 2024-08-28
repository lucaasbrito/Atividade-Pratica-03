// exercicio 1

let maiorAltura;
let menorAltura;

for (let i = 0; i < 15; i++) {
  let altura = parseFloat(prompt(" Digite sua altura " + (i + 1) + " :"));

  if (i === 0) {
    maiorAltura = altura;
    menorAltura = altura;
  } else {
    if (altura < menorAltura) {
      menorAltura = altura;
    }

    if (altura < menorAltura) {
      menorAltura = altura;
    }
  }
}

alert("A menor altura do grupo é:" + menorAltura);
alert("A maior altura do grupo é:" + maiorAltura);

// exercicio 2

let alturaPedro = 1.5;
let alturaLucas = 1.1;

const crescimentoPedro = 0.02;
const crescimentoLucas = 0.03;

let anosParaIgualar = 0;
let anosParaMaior = 0;

while (alturaPedro > alturaLucas) {
  alturaPedro += crescimentoPedro;
  alturaLucas += crescimentoLucas;
  anosParaIgualar++;
}

while (alturaLucas <= alturaPedro) {
  alturaPedro += crescimentoPedro;
  alturaLucas += crescimentoLucas;
  anosParaMaior++;
}

alert("Anos para que Lucas e Pedro tenham a mesma altura " + anosParaIgualar);
alert("Anos para que Lucas seja maior que Pedro " + anosParaMaior);

// exercicio 3

let numero = parseInt(prompt("Digite um numero para a tabuada:"));
let quaantidade = parseInt(
  prompt("Digite a quaantidade de vezes para a tabuada:")
);

let contador = 1;

while (contador <= quaantidade) {
  let produto = contador * numero;
  console.log(`${numero} x ${contador} = ${produto}`);
  contador += 1;
}

//exercicio 4

for (let numero = 1; numero <= 250; numero++) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`${numero} é múltiplo de 3 e de 5`);
  } else if (numero % 3 === 0) {
    console.log(`${numero} é múltiplo de 3`);
  } else if (numero % 5 === 0) {
    console.log(`${numero} é múltiplo de 5`);
  }
}

// exercicio 5

let valor = parseInt(prompt("Digite um valor:"));
let = contagem = "";

for (let i = 0; i <= valor; i++) {
  contagem += i;
  if (i < valor) {
    contagem += ",";
  }
}

contagem += ",FIM";

alert("Contagem:" + contagem);

// exercicio 6

let resultado = "";

for (let i = 30; i >= 1; i--) {
  if (i === 1) {
    resultado += i + " ";
  } else if (i === 2 || i === 3) {
    resultado += "[" + i + "]";
  } else if (i % 2 === 0 || i % 3 === 0) {
    resultado += i + " ";
  } else {
    let primo = true;
    if (i < 2) {
      primo = false;
    } else if (i === 2 || i === 3) {
      primo = true;
    } else {
      for (let j = 5; j * j <= i; j += 6) {
        if (i % j === 0 || i % (j + 2) === 0) {
          primo = false;
          break;
        }
      }
    }
    if (primo) {
      resultado += "[" + i + "]";
    } else {
      resultado += i + " ";
    }
  }
}

alert(resultado);

//exercicio 7

let adicao = 0;
let positivo = 0;
let negativo = 0;

for (let i = 0; i < 10; i++) {
  let numero = parseFloat(prompt(" Digite o numero " + (i + 1) + ":"));
  adicao += numero;

  if (numero > 0) {
    positivo++;
  } else if (numero < 0) {
    negativo++;
  }
}

let media = adicao / 10;
let percentualPositivo = (positivo / 10) * 100;
let percentualNegativo = (negativo / 10) * 100;

alert(" Media Aritmética " + media);
alert(" Quantidade de Valores Positivos: " + positivo);
alert(" Quantidade de Valores Negativos: " + negativo);
alert(" Percentual de Valores Positivos: " + percentualPositivo + "%");
alert(" Percentual de Valores Negativos: " + percentualNegativo + "%");
