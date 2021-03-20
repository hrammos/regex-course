const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>';

// Quantificadores por padrão são gulosos (greedy)

console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));

// Usando quantificadores de forma lazy (não gulosos)

console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));