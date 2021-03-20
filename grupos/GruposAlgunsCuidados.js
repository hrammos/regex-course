const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!';

/**
 * Dentro de um conjunto não existe grupo.
 * Detro de grupos é possível ter conjustos.
 */
console.log(texto.match(/[(abc)]/gi)); 
console.log(texto.match(/([abc])/gi));
console.log(texto.match(/(abc)/gi));

// Evitar criar grupos quando desnecessário