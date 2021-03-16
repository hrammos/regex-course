const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const outroTexto = 'There is a big fog in NYC';

/**
 * Operador ?
 * Zero ou um (Opcional)
 * 
 * O caractere que está ao lado do ? é opcional.
 * Logo, pode ter ou não o último em "fogo"
 */

const regex = /fogo?/gi;

console.log(texto.match(regex));
console.log(outroTexto.match(regex));