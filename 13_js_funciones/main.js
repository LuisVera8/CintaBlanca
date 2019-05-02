// sintaxis

// function nombre_funcion (parametro/argumrnto) {
//     intruccion
// }

// ejecucion de la function

// nombre_funcion ();

// ejercicio

// function suma (x,y) {
//     let sumaNumeros = x + y
//     // let sumaNumeros = x - y
//     console.log ("El resultado es: " + sumaNumeros)
// }

// let x = Number(prompt ('Dame el primer valor'))
// let y = Number(prompt ('Dame el segundo valor'))

// suma(x,y)

// Funciones

function suma (x,y) {
    let opesuma = x + y
    console.log ("El resultado es: " + opesuma)
}

function resta (x,y,z) {
    let operesta = x - y - z
    console.log ("El resultado es: " + operesta)
}

function multiplicacion (x,z) {
    for (let i=1; i <= z; i++) {
    let opermultiplicacion = x * i
    console.log ("El resultado es: " + opermultiplicacion)
    }
}

// Ejecucion de las funciones

let calculadora = prompt('¿Qué operación deseas: SUMA[+], RESTA[-] O MULTIPLICACIÓN[*]')

if (calculadora === 'SUMA' || calculadora === 'suma' || calculadora === '+') {
    
    let x1 = Number(prompt ('Dame el primer valor'))
    let y1 = Number(prompt ('Dame el segundo valor'))
    suma (x1,y1)

} else if (calculadora === 'RESTA' || calculadora === 'resta' || calculadora === '-') {

    let x1 = Number(prompt ('Dame el primer valor'))
    let y1 = Number(prompt ('Dame el segundo valor'))
    let z1 = Number(prompt ('Dame el primer valor'))
    resta (x1,y1,z1)

} else if (calculadora === 'MULTIPLICACION' || calculadora === 'multiplicacion' || calculadora === '*'){
    
    let x1 = Number(prompt ('Dame el número a multiplicar'))
    let y1 = Number(prompt ('Dame el número de las veces a multiplicar'))
    multiplicacion (x1,y1)

} else {
    
    console.log ('Debes de meter alguna operacion; SUMA[+], RESTA[-] O MULTIPLICACIÓN[*]')

}