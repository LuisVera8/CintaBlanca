// Aqui solo hago variables agregando el Id de las etiquetas

let nombre = document.getElementById('nombre')
let email = document.getElementById('email')
let edad = document.getElementById('edad')
let boton = document.getElementById('button-addon2')
let nombreView = document.getElementById('nombreView')
let emailView = document.getElementById('emailView')
let edadView = document.getElementById('edadView')
let noView = document.getElementById('nover')

// Creo la funcion

const clickEvent = () => {

    let inputNombre = nombre.value //el valor que contendrá el id nombre lo guardo en la variable inputNombre
    let inputEmail = email.value //el valor que contendrá el id email lo guardo en la variable inputEmail
    let inputEdad = edad.value //el valor que contendrá el id edad lo guardo en la variable inputEdad

    nombreView.innerHTML = inputNombre //el valor que se guardo en la variable inputNombre, se lo paso a la etiqueta <li> con id nombreView para que la muestre en la página, se usa innerHTML ya que la etiqueta <li> usa string
    emailView.innerHTML = inputEmail //el valor que se guardo en la variable inputEmail, se lo paso a la etiqueta <li> con id emailView para que la muestre en la página
    edadView.innerHTML = inputEdad //el valor que se guardo en la variable inputEdad, se lo paso a la etiqueta <li> con id edadView para que la muestre en la página
    noView.classList.remove('quitar') //la variable aquí tiene toda la etique con el Id nover y dentro de esa etiqueta se encuentra una clase "quitar" con remove solo la remueve y el navegador ya no la toma en cuenta y es cuando se ven los datos en el navegador
}

// se ejecuta el evento
boton.addEventListener ('click',clickEvent) 