const texto = 'Bom\ndia';

console.log(texto.match(/.../gi));
console.log(texto.match(/..../gi));


/**
 * o . (Ponto - coringa) não resolve o \n
 * 
 * dotall - algumas linguagens tem um flag/exp/s, mas Javascript não!
 */