/**
 * Flag g - global
 *  Ex: Buscar letra a
 *    -> ao utilizar a flag g, irá buscar todos os a(s) do texto
 *    -> caso não utilizar, irá buscar apenas o primeiro a
 * 
 * Flag i - insensitive = ignore case
 *  Ex: Buscar letra a
 *    -> ao utilizar a flag i, irá buscar a maiúsculo e minúsculo 
 */

const texto = 'Carlos assinou o abaixo-assinado.';

console.log(texto.match(/C|ab/)); // encontra apenas o "C"
console.log(texto.match(/c|ab/i)); // encontra apenas o "C"
console.log(texto.match(/ab|c/gi)); // encontra "ab" e o "C"