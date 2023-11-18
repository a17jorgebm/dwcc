var botonCrear = document.getElementById('crear');
var botonCerrar = document.getElementById('cerrar');
var ventana = window;
var divBotonesVentana = document.getElementById('botones-ventana');
var movArriba = document.getElementById('arriba');
var movAbajo = document.getElementById('abajo');
var movIzq = document.getElementById('izq');
var movDer = document.getElementById('dr');
var btnAumento = document.getElementById('aumenta');
var btnRedimension = document.getElementById('redimensiona');
var novaVentana;
ventana.addEventListener('click', function () {
    if (novaVentana) {
        novaVentana.focus();
    }
});
var crearVentana = function () {
    if (!novaVentana) {
        var consent = confirm('Quieres abrir una nueva ventana?');
        if (consent) {
            novaVentana = window.open("", "", "height=300," +
                "width=300," +
                "top=400," +
                "left=400");
            var ventanaDocument = novaVentana.document;
            var titulo = ventanaDocument.createElement('h3');
            titulo.textContent = 'Exemplo de Ventá nova';
            var url = ventanaDocument.createElement('p');
            url.textContent = 'URL: ' + novaVentana.location.href;
            var protocolo = ventanaDocument.createElement('p');
            protocolo.textContent = 'Protocolo: ' + novaVentana.location.protocol;
            var navegador = ventanaDocument.createElement('p');
            navegador.textContent = 'Navegador: ' + novaVentana.navigator.appCodeName;
            var javaDisponible = ventanaDocument.createElement('p');
            navegador.textContent = novaVentana.navigator.javaEnabled() ? 'Java esta disponible' : 'Java no esta disponible';
            ventanaDocument.body.append(titulo, url, protocolo, navegador, javaDisponible);
            divBotonesVentana.style.display = 'block';
            novaVentana.addEventListener('beforeunload', function () {
                novaVentana = null;
                divBotonesVentana.style.display = 'none';
            });
        }
    }
    else {
        alert('La ventana ya esta abierta');
    }
};
var cerrarVentana = function () {
    if (novaVentana) {
        novaVentana.close();
    }
    else {
        alert('A ventana xa esta cerrada!');
    }
};
botonCrear.addEventListener('click', crearVentana);
botonCerrar.addEventListener('click', cerrarVentana);
movArriba.addEventListener('click', function () {
    moverVentana('arriba');
});
movAbajo.addEventListener('click', function () {
    moverVentana('abajo');
});
movIzq.addEventListener('click', function () {
    moverVentana('izq');
});
movDer.addEventListener('click', function () {
    moverVentana('dr');
});
function moverVentana(movimiento) {
    if (novaVentana) {
        switch (movimiento) {
            case 'arriba':
                novaVentana.moveBy(0, -10);
                break;
            case 'abajo':
                novaVentana.moveBy(0, 10);
                break;
            case 'izq':
                novaVentana.moveBy(-10, 0);
                break;
            case 'dr':
                novaVentana.moveBy(10, 0);
                break;
        }
    }
}
btnAumento.addEventListener('click', function () {
    if (novaVentana) {
        novaVentana.resizeBy(50, 50);
    }
});
btnRedimension.addEventListener('click', function () {
    if (novaVentana) {
        novaVentana.resizeTo(500, 500);
    }
});
