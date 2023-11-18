const botonCrear: HTMLElement | null = document.getElementById('crear');
const botonCerrar: HTMLElement | null = document.getElementById('cerrar');
const ventana:Window= window;
const divBotonesVentana: HTMLElement | null = document.getElementById('botones-ventana');
const movArriba: HTMLElement | null = document.getElementById('arriba');
const movAbajo: HTMLElement | null = document.getElementById('abajo');
const movIzq: HTMLElement | null = document.getElementById('izq');
const movDer: HTMLElement | null = document.getElementById('dr');
const btnAumento: HTMLElement | null = document.getElementById('aumenta');
const btnRedimension: HTMLElement | null = document.getElementById('redimensiona');

let novaVentana: Window | null;

ventana.addEventListener('click', ():void => {
    if (novaVentana){
        novaVentana.focus()
    }
})

const crearVentana = ():void => {
    if (!novaVentana){
        let consent:boolean=confirm('Quieres abrir una nueva ventana?')
        if (consent){
            novaVentana=window.open(
                "",
                "",
                "height=300," +
                "width=300," +
                "top=400," +
                "left=400");
            let ventanaDocument: Document=novaVentana.document;
            let titulo : HTMLHeadElement =ventanaDocument.createElement('h3')
            titulo.textContent='Exemplo de Ventá nova'
            let url : HTMLParagraphElement=ventanaDocument.createElement('p')
            url.textContent='URL: ' + novaVentana.location.href
            let protocolo : HTMLParagraphElement=ventanaDocument.createElement('p')
            protocolo.textContent='Protocolo: ' + novaVentana.location.protocol
            let navegador : HTMLParagraphElement=ventanaDocument.createElement('p')
            navegador.textContent='Navegador: ' + novaVentana.navigator.appCodeName
            let javaDisponible : HTMLParagraphElement=ventanaDocument.createElement('p')
            navegador.textContent=novaVentana.navigator.javaEnabled() ? 'Java esta disponible' : 'Java no esta disponible'
            ventanaDocument.body.append(titulo,url,protocolo,navegador,javaDisponible)

            divBotonesVentana.style.display='block';

            novaVentana.addEventListener('beforeunload' , ():void => {
                novaVentana=null
                divBotonesVentana.style.display='none';
            })

        }
    }else {
        alert('La ventana ya esta abierta')
    }

}

const cerrarVentana = ():void => {
    if (novaVentana){
        novaVentana.close()
    }
    else{
        alert('A ventana xa esta cerrada!')
    }
}

botonCrear.addEventListener('click',crearVentana)
botonCerrar.addEventListener('click',cerrarVentana)

movArriba.addEventListener('click', function ():void{
    moverVentana('arriba')
})
movAbajo.addEventListener('click', function ():void{
    moverVentana('abajo')
})
movIzq.addEventListener('click', function ():void{
    moverVentana('izq')
})
movDer.addEventListener('click', function ():void{
    moverVentana('dr')
})
function moverVentana(movimiento: String):void {
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

btnAumento.addEventListener('click', ():void => {
    if (novaVentana){
        novaVentana.resizeBy(50,50)
    }
})

btnRedimension.addEventListener('click', ():void => {
    if (novaVentana){
        novaVentana.resizeTo(500,500)
    }
})




