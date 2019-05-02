let palabra = prompt ('Palabra')
let resultado = ''

for (let i = 0 ; i < palabra.length ; i++) {
    if (i % 2 === 0) {
        resultado += palabra[i].toUpperCase()
    } else {
        resultado += palabra[i].toLowerCase()
    }
}

console.log(resultado)