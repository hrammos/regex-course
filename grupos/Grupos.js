const texto = 'O José Simão é muito engraçado... hehehehehe';

// Grupos são definidos por () (parentêses)

console.log(texto.match(/(he)+/g));

const outroTexto = 'http://www.site.info www.escola.ninja.br google.com.ag';

console.log(outroTexto.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g));