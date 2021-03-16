const texto = '1,2,3,a.b c!d?e[f';

console.log(texto.match(/\D/g));
console.log(texto.match(/[^0-9]/g));
console.log(texto.match(/[^\d!\?\[\s,\.]/g));

const outroTexto = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';

console.log(outroTexto.match(/[^!-/:-@\s]/g));
