const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador';

/**
 * No Javascript não tem um flag para resolver o \n
 * portanto está sendo usado um conjunto com dois shorthands complementares [\s\S]*
 * para fazer o mesmo papel do coringa (.), e nesse caso selecionando também o \n
 */

console.log(texto.match(/^r[\s\S]*r$/gi));