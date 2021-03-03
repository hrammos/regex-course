const texto = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f';

const regexNove = RegExp('9');
console.log('Métodos da RegExp...');

// Verifica se 9 está no texto
console.log(regexNove.test(texto));

// Retorna o 9 e o index que 9 está no texto
console.log(regexNove.exec(texto));

const regexLetras = /[a-f]/g;

console.log('Métodos da string...');

/**
 * Retorna as letras de a-f
 * Retorna o index que o a (primeiro elemento) foi encontrado
 * Retorna o texto
 * Retorna groups
 */
console.log(texto.match(regexLetras));

// Retorna o index que o a (primeiro elemento) foin encontrado
console.log(texto.search(regexLetras));

// Substitui tudo que foi encontrado pela string do segundo parâmetro
console.log(texto.replace(regexLetras, 'Achei'));

// Separa o texto a partir de tudo que foi encontrado pela regex
console.log(texto.split(regexLetras));