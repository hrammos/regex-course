const texto = 'João é calmo, mas no transito fica nervoso.';

console.log(texto.match(/[\wÀ-ú]+/gi));

// Positive lookahead:

/**
 * Se determina um grupo Positive lookahead com (?=)
 * Verifica primeiro o que tem dentro do grupo e se encontrar,
 * retorna a expressão anterior.
 * 
 * Nos exemplos abaixo retorna a palavra que está antes de uma virgula (CALMO), 
 * na primeira expressão, e a palavra que está na frente de um ponto (NERVOSO), na segunda.
 */

console.log(texto.match(/[\wÀ-ú]+(?=,)/gi));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));



// Negative lookahead:

/**
 * Se determina um grupo Negative lookahead com (?!)
 * Verifica primeiro o que tem dentro do grupo e se encontrar, 
 * retorna a expressão anterior.
 * 
 * Nos exemplos abaixo retorna palavras que não estão antes da virgula (todas a palavras exceto CALMO e É),
 * na primeira expressão, e todas as palavras que não estão na frente de um ponto (todas as palavras exceto NERVOSO), na segunda.
 */
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi));
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));