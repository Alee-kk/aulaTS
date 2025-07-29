// IIFE => immediately invoked function expression

(function (idade, peso, altura) {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
    console.log(criaNome('Otavio'));
}

falaNome();
console.log(idade, peso, altura);
})(19, 65, 1.83);
