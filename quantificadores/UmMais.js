const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const outroTexto = 'There is a big fog in NYC';

/**
 * Quantificador +
 * Um ou mais
 * 
 * O caractere que está ao lado do + pode ter um ou mais.
 * Logo, pode ter um ou vários "O" em "fogo"
 */

const regex = /fogo+/gi;

console.log(texto.match(regex));
console.log(outroTexto.match(regex));

const terceiroTexto = 'Os números: 0123456789.';

console.log(terceiroTexto.match(/[0-9]/g));
console.log(terceiroTexto.match(/[0-9]+/g));