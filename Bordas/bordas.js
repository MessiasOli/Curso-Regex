const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ inicio da string ou da linha
console.log(texto.match(/r$/gi)) // $ Fim da string ou da linha

console.log(texto.match(/^r.*r$/gi)) // problema do dotall