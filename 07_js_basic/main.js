// Tipos de variables

// let numerico = 10;
// let string = 'Hola soy un texto';
// let booleanos = true
// let booleanos1 = false

// let numero1 = 100;
// let numero2 = 200;

// let suma = numero1 + numero2;

// console.log(suma)

// let nombre = prompt ('Como te llamas?')

// prompt -> es un input con pantalla tipo alert
// console -> es un onput muestra en consola lo que se desea mostrar
// console.log(nombre)

// ejercicio:
// en 3 prompt preguntar nombre, edad y correo
// mostrarlo junto

// let nombre = prompt ('Como te llamas? ');
// let edad = prompt ('cual es tu edad? ')
// let correo = prompt ('cual es tu correo? ')

// console.log(nombre + ' ' + edad + ' ' + correo)

// Operadores matematicos
//  + - * / %

// let arreglo = [ 12, 123, 'hola'  ]
// console.log(arreglo)

// let nombre = prompt ('Como te llamas? ')
// let edad = prompt ('cual es tu edad? ')
// let correo = prompt ('cual es tu correo? ')

// let arreglo = [nombre, edad, correo]

// console.log(arreglo);

// console.log(arreglo[0])
// console.log(arreglo[1])
// console.log(arreglo[2])

// Reasignacion de variable

// let x = 10;
// x = 100;
// x = x + 50;

function func(n) {
    if (n<=1){
    return 1;
    }
    return n*func(n-1);
}

func(5)

// let ironhack = {
//     escuela:{
//         salon:{
//             maestro: 'diego',
//             alumnos: 'luis',
//         }
//     }
// }

// console.log(ironhack)