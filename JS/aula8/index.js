// Luiz Otávio Miranda tem 30 anos , pesa 84 kg tem 1.80 de altura e seu IMC é de 25.925925925

const nome = 'Alexandre';
const sobrenome = 'Kwiatkowski';
const idade = 19;
const altura = 1.83;
const peso = 65;
let IMC;

IMC = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${IMC}`);