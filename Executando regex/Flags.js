// g - global
// i - ignorar case

const texto = 'Carlos assinou o abaixo-assinado'
console.log('texto :>> ', texto.match(/C|ab/));
console.log('texto :>> ', texto.match(/c|ab/i));
console.log('texto :>> ', texto.match(/c|ab/gi));