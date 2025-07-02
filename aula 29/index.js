function getDiaSemanaTexto (diaDaSemana) {
    switch (diaDaSemana) {
let diaDaSemanaTexto;
        case 0:
            diaDaSemanaTexto = 'Domingo';
            return;
        case 1:
            diaDaSemanaTexto = 'Segunda';
            return;
        case 2:
            diaDaSemanaTexto = 'Terça';
            return;
        case 3:
            diaDaSemanaTexto = 'Quarta';
            return;
        case 4:
            diaDaSemanaTexto = 'Quinta';
            return;
        case 5:
            diaDaSemanaTexto = 'Sexta';
            return;
        case 6:
            diaDaSemanaTexto = 'Sábado';
            return;
            default:
                diaDaSemanaTexto = '';
    };
    return diaDaSemana

;}

const data  = new Date('1987-04-21 00:00:00');
const diaDaSemana = data.getDay();
let diaDaSemanaTexto;
