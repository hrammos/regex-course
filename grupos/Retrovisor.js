const texto = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>';

console.log(texto.match(/<(\w+)>.*<\/\1>/g));

const outroTexto = 'Lentamente é mente muito lenta.';

console.log(outroTexto.match(/(lenta)(mente).*\2.*\1/gi));

// Utilizando ?: para não armazenar valores dos grupos
console.log(outroTexto.match(/(?:lenta)(mente).*\1/gi));


console.log(outroTexto.match(/(lenta)(mente)/gi));
console.log(outroTexto.match(/(lenta)(mente)?/gi));
console.log(outroTexto.replace(/(lenta)(mente)/gi, 'ABC $1 EF'));
console.log(outroTexto.replace(/(lenta)(mente)/gi, '$2'));

const terceiroTexto = 'abcdefghijkll';

console.log(terceiroTexto.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g));