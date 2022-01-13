const texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.' // Palavra casa em várias opções

const regex = /casa/gi
console.log(texto.match(regex))
console.log(texto.match(/a a/))
console.log(texto.match(/a b/))
console.log(texto.match(/a c/))