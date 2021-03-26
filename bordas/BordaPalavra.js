const textoSemAcentos = 'dia diatonico diafragma media wikipedia bom_dia melodia radial';

console.log(textoSemAcentos.match(/\bdia\w+/gi));
console.log(textoSemAcentos.match(/\w+dia\b/gi));
console.log(textoSemAcentos.match(/\w+dia\w+/gi));
console.log(textoSemAcentos.match(/\bdia\b/gi));

/**
 * Uma borda é o oposto de \W, que é [^A-Za-z0-9_]
 * Por isso palavras com acento são consideradas como borda
 */

const textoComAcentos = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial';

 /**
  * Expressão abaixo seleciona 4 vezes a palavra dia por considerar
  * como bordas os seguintes caracteres: 
  * é - 
  */

console.log(textoComAcentos.match(/\bdia\b/gi));
console.log(textoComAcentos.match(/(\S*)?dia(\S*)?/gi)); // nessa expressão a virgula é encontrada: "diafragma,"
console.log(textoComAcentos.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi));