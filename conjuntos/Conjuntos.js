const texto = '1,2,3,4,5,6,a.b c!d?e[f';

// Para definir uma classe (ou conjunto) de caracteres se utiliza []
 
const regexPares = /[02468]/g;

console.log(texto.match(regexPares));

const outroTexto = 'João não vai passear na moto.';

const regexComESemAcento = /n[aã]/g;

console.log(outroTexto.match(regexComESemAcento));