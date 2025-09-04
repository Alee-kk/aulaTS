// // const treshoras = 60 * 60 * 3 * 1000;
// // const umdia = 60 * 60 * 24 * 1000;
// // const data = new Date(0 + treshoras + umdia); //01/01/1970 TimeStamp unix ou época unix.
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMouth()); // Mês começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getDateHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Ms', data.getMilliseconds());
// console.log('Dia da Semana', data.getDay()); // 0 = Domingo, 6 = Sábado

function zeroAesquerda(num) {
	return num >= 10 ? num : `0${num}`;
}

function formatData(data) {
	const dia = zeroAesquerda(data.getDate());
	const mes = zeroAesquerda(data.getMouth());

	return `${dia}/${mes}`;
}

const data = new Date();
const dataBrasil = formatData(data);
