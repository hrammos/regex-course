const applyColor = (text, regex, color) => text.replace(regex, `<span style="color: #${color}"><b>$1</b></span>`);

const files = require('./files');

const texto = files.read('codigoFonte.html');

const codeRegex = /<code>[\s\S]*<\/code>/i;

let codigo = texto.match(codeRegex)[0];

// Strings..
codigo = applyColor(codigo, /(\".*\")/g, 'ce9178');

// Palavras reservadas..
codigo = applyColor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf');

// Tipos..
codigo = applyColor(codigo, /\b(void|int)\b/g, '1385e2');

// Comentários de multiplas linhas..
codigo = applyColor(codigo, /(\/\*[\s\S]*\*\/)/g , '267703');

// Comentários de uma única linha..
codigo = applyColor(codigo, /(\/\/.*?\n)/g , '267703');

const conteudoFinal = texto.replace(codeRegex, codigo);

files.write('codigoFonte.html', conteudoFinal);
