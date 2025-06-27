/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados

Referências (mutável) - array, object, function - Passados por referência
*/

const a = {
    nome: ' ALberto',
    sobrenome: 'da Silva',

};

const b = a;

a.nome = 'joão';
console.log(b)