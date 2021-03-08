const texto = 'ABC [abc] a-c 1234';

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g)); // Não define um range
console.log(texto.match(/[A-z]/g)); // Intervalos usam a ordem da tabela UNICODE

/**
 * Intervalos devem respeitar a ordem da tabela UNICODE!
 * Os exemplos abaixo geram erro "Range out of order in character class":
 * 
 * console.log(texto.match(/[a-Z]/g));
 * console.log(texto.match(/[4-1]/g)); 
 */
