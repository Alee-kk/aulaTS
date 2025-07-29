// Factory Functions / Constructor Functions / Classes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// {} <- this -> this

// Variável aponta para endereço e endereço aponta para o valor 
// p1 = (ENDEREÇOMEMÓRIA) = {nome: 'Outra coisa'}
// p1 = (ENDEREÇOMEMÓRIA) -> 'Valor'


const p1 = new Pessoa('Luiz', 'Otávio');
Object.freeze(p1); // Não permite modificar o objeto
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Maria', 'Oliveira');
console.log(p1)
console.log(p2)