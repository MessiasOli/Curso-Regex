const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'
console.log(texto1.match(/\bdia\w+/gi))
console.log(texto1.match(/\w+dia\b/gi))
console.log(texto1.match(/\w+dia\w+/gi))
console.log(texto1.match(/\bdia\b/gi))

// botda é não \w, que é [^A-Za-z0-9]... temos problemas com acentos!
const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi))
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // a virgula esta entrando
console.log(texto2.match(/([\wÀ-ù-]*)dia([\wÀ-ù-]*)?/gi)) // Não vem a virgula
