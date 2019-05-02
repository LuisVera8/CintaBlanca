let edad = 18
const nacionalidad = 'mx'
let residencia = 'mx'
let ine = true
// If anidados
if (edad >= 18) {
    if (nacionalidad === 'mx') {
        if (ine === true) {
            if (residencia === 'mx') {
                console.log (' Acude a tu modulo más cercano ')
            } else {
                console.log (' Acude a la embajada ')
            }
        } else {
            console.log (' Debes tener ine ')
        }
} else {
    console.log (' Debes ser mexicano ')
}