const botonCrear=document.getElementById('crear');
const botonCerrar=document.getElementById('cerrar');
const ventana = self.window
const divBotonesVentana=document.getElementById('botones-ventana')
const movArriba=document.getElementById('arriba')
const movAbajo=document.getElementById('abajo')
const movIzq=document.getElementById('izq')
const movDer=document.getElementById('dr')
const btnAumento=document.getElementById('aumenta')
const btnRedimension=document.getElementById('redimensiona')


let novaVentana;

ventana.addEventListener('click', () => {
    if (novaVentana){
        novaVentana.focus()
    }
})

const crearVentana = () => {
    if (!novaVentana){
        let consent=confirm('Quieres abrir una nueva ventana?')
        if (consent){
            novaVentana=window.open(
                "",
                "",
                "height=300," +
                "width=300," +
                "top=400," +
                "left=400");
            ventanaDocument=novaVentana.document;
            let titulo=ventanaDocument.createElement('h3')
            titulo.textContent='Exemplo de Ventá nova'
            let url=ventanaDocument.createElement('p')
            url.textContent='URL: ' + novaVentana.location.href
            let protocolo=ventanaDocument.createElement('p')
            protocolo.textContent='Protocolo: ' + novaVentana.location.protocol
            let navegador=ventanaDocument.createElement('p')
            navegador.textContent='Navegador: ' + novaVentana.navigator.appCodeName
            let javaDisponible=ventanaDocument.createElement('p')
            navegador.textContent=novaVentana.navigator.javaEnabled() ? 'Java esta disponible' : 'Java no esta disponible'
            ventanaDocument.body.append(titulo,url,protocolo,navegador,javaDisponible)

            divBotonesVentana.style.display='block';

            novaVentana.addEventListener('beforeunload' , () => {
                novaVentana=null
                divBotonesVentana.style.display='none';
            })

        }
    }else {
        alert('La ventana ya esta abierta')
    }

}

const cerrarVentana = () => {
    if (novaVentana){
        novaVentana.close()
    }
    else{
        alert('A ventana xa esta cerrada!')
    }
}

botonCrear.addEventListener('click',crearVentana)
botonCerrar.addEventListener('click',cerrarVentana)

movArriba.addEventListener('click', function (){
    moverVentana('arriba')
})
movAbajo.addEventListener('click', function (){
    moverVentana('abajo')
})
movIzq.addEventListener('click', function (){
    moverVentana('izq')
})
movDer.addEventListener('click', function (){
    moverVentana('dr')
})
function moverVentana(movimiento){
    if (novaVentana){
        switch (movimiento){
            case 'arriba':
                novaVentana.moveBy(0,-10)
                break;
            case 'abajo':
                novaVentana.moveBy(0,10)
                break;
            case 'izq':
                novaVentana.moveBy(-10,0)
                break;
            case 'dr':
                novaVentana.moveBy(10,0)
                break;
        }
    }
}

btnAumento.addEventListener('click', () => {
    if (novaVentana){
        novaVentana.resizeBy(50,50)
    }
})

btnRedimension.addEventListener('click', () => {
    if (novaVentana){
        novaVentana.resizeTo(500,500)
    }
})




