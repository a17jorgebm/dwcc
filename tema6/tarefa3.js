const listado=document.getElementById('listado')
const boton=document.getElementById('newElement')
const botonBorrarPrimeiro=document.getElementById('deleteFirst')
const botonBorrarUltimo=document.getElementById('deleteLast')


window.addEventListener('load', function (){
    boton.addEventListener('click',engadirElemento)
    botonBorrarPrimeiro.addEventListener('click',borrarPrimeiroLi)
    botonBorrarUltimo.addEventListener('click',borrarUltimoLi)
})

function engadirElemento(){
    let nombre=prompt('Indica o nombre do elemento')
    if (nombre.trim()){
        let elemento=document.createElement('li')
        elemento.innerText=nombre
        listado.appendChild(elemento)
    }
}

function borrarPrimeiroLi(){
    let elemento=listado.firstElementChild
    if (elemento){
        listado.removeChild(elemento)
    }
}

function borrarUltimoLi(){
    let elemento=listado.lastElementChild
    if (elemento){
        listado.removeChild(elemento)
    }
}

