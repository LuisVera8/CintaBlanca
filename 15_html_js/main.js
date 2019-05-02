// con javascript te trae toda la etiqueta con sus atributos

let nombres = document.getElementById('nombre')
let boton = document.getElementById('boton')
let textoS = document.getElementById('texto')



// escuchador de eventos -> recibe dos parametros; 1er tipo de evento a realizar, 2do funcion que se ejecuta cuando se cumple el 1er parametro

const clickEvent = () => {

    let inputTexto = nombres.value
    // texto.innerText = inputText
    textoS.innerHTML = inputTexto
}

boton.addEventListener ('click',clickEvent)