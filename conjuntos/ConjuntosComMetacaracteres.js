const texto = '.$+*?-';

/**
 * Dentro de conjuntos, metacarateres são funcionam de forma literal
 * Regra não vale para o - 
 */

console.log(texto.match(/[+.?*$]/g));
console.log(texto.match(/[+.?*$]./g));

// Isso é um intervalo (range)
console.log(texto.match(/[$-?]/g));

// Não é um intervalo (range)
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));

/**
 * Metacaracteres que podem precisar de escape dentro do conjunto:
 * - [ ] ^ 
 */