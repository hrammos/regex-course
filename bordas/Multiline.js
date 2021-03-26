const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`;

console.log(texto.match(/\n/g));
console.log(texto.match(/^(\w).+\1$/gi)); // Dotall aqui
console.log(texto.match(/^(\w).+\1$/gim)); // Com a flag m (multiline) resolve a expressão