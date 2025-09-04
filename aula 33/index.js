const pessoa = {
	nome: "Otávio",
	sobrenome: "Miranda",
	idade: 30,
	endereco: {
		rua: "Dr Paulo Fortes",
		numero: 1335,
	},
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(n, sobrenome);
