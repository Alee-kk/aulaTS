// Argumentos que sustenta todos os argumentos enviados
    function funcao(a, b ,c ) {
    let i = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total)
;}
funcao(1, 2, 3, 4, 6, 7);