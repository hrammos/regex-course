/**
 * Observação:
 * 	-> utilizar template strings para representar textos com múltiplas linhas
 */
const textoUmaLinha = '...';
const textoMultiplasLinhas = `
  linha 1
  linha 2
	linha 3
`;


/**
 * Cuidados com o tab:
 *  -> Se no console exibir [' '] o que foi encontrado foram ESPAÇOS em branco
 *  -> Se no console exibir ['\t'] aí sim foi encontrado o TAB
 */
console.log('	'.match(/\s/g))