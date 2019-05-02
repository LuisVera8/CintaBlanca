// numeracion del 0 al 100
// y ver si es divisible entre 3 o 5
// si es 3 fizz
// si es 5 buzz
// si es 3 y 5 fizz buzz


// un ajedrez

// google



// for (let i = 1 ; i <= 100; i++){
//     let tres = i % 3
//     if (tres === 0){
//         console.log ( i + ' FIZZ')
//     }
// }

// for (let i = 1 ; i <= 100; i++){
//     let tres = i % 5
//     if (tres === 0){
//         console.log ( i + ' BUZZ')
//     }
// }


for (let i = 1 ; i <= 100; i++){
    let tres = i % 3
    let cinco = i % 5
    if (tres === 0 && cinco === 0) {
        console.log ( i + ' FIZZ BUZZ' )
    } else if (tres === 0){
        console.log ( i + ' FIZZ')
    } else if ( cinco === 0) {
        console.log ( i + ' BUZZ')
    } else {
        console.log ( i )
    }
}