const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const outroTexto = 'There is a big fog in NYC';

/**
 * Quantificador *
 * Zero ou mais
 * 
 * O caractere que está ao lado do * pode não existir ou ter vários "tanto faz".
 * Logo, pode não o último "O" em "fogo", pode ter um ou ter vários.
 */

const regex = /fogo*/gi;

console.log(texto.match(regex));
console.log(outroTexto.match(regex));