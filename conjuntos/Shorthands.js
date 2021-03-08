const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`;

console.log(texto.match(/\d/g)); // números -> equivalente à [0-9]
console.log(texto.match(/\D/g)); // não números -> equivalente à [^0-9]

console.log(texto.match(/\w/g)); // caracteres -> equivalente à [a-zA-Z0-9_]
console.log(texto.match(/\W/g)); // não caracteres -> equivalente à [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)); // espaços em branco -> equivalente à [ \t\n\r\f]
console.log(texto.match(/\S/g)); // não espaços em branco -> equivalente à [^ \t\n\r\f]
