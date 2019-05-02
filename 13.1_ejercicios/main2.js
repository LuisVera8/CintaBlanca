// // ajadrez

// for (let i = 0; i < 8; i++){
//     let hashtag = i % 2
//     if (hashtag === 0){
//         console.log ('#   #   #   #')
//     } else {
//         console.log('  #   #   #')
//     }
// }

// for (let i = 1; i < 8; i++){
//     for (let j = 1; j < 8; j++){
//         let array = [i,j]
//         array [i,j] = (i + j) % 2;
//         console.log ('#' + array[i,j] + 's')
//     }
//     console.log(' ')
// }

// for (let i = 1 ; i < 8 ; i++ ) {
//     // console.log (i + 's')
//     for (let j = 1; j < 8 ; j++) {
//         // console.log(j)
//         let array = [i,j]
//         console.log(array[i,j])
//     }
// }

let espacios = ''

for ( let i = 0 ; i <= 6 ; i++ ) {
    // console.log('a')
    for ( let j = 0 ; j <= 6 ; j++ ) {
        // console.log('b')
        if ( (i + j) % 2 === 0 ) {
            espacios += ' '
        } else {
            espacios += '#'
        }
    }
    espacios += '\n'
}

console.log(espacios)