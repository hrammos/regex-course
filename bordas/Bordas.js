const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador';

console.log(texto.match(/r/gi));


/**
 * ^ (circunflexo) 
 * Dentro de um conjunto representa um conjunto negado.
 * Fora de um conjunto, ele representa um início de uma linha/string.
 */

console.log(texto.match(/^r/gi));

// $ Representa o final de uma linha/string.

console.log(texto.match(/r$/gi));

/**
 * Retorna null devido o problema do dotall no Javascript
 *
 * dotall => . não resolve \n
 */ 
console.log(texto.match(/^r.*r$/gi)); 