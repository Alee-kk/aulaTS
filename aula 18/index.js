const pessoa1 = {
	nome: "Otávio",
	sobrenome: "Miranda",
	idade: 23,

	fala() {
		console.log("${this.nome} ${this.sobrenome} está falando oi...");
	},
};

pessoa1.fala();
