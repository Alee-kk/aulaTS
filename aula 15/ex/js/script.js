const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
/*
Raiz quadrada:
se é inteiro:
É NaN:
Arredondado para baixo:
Arredondado para cima:
Com duas casas decimais:
*/
numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada do seu número é: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN?: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Seu número arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Seu número arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Seu número com duas casas decimais: ${numero.toFixed(2)}.</p>`;