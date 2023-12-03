var paises = [
    "Argentina",
    "Estados Unidos",
    "Francia",
    "India",
    "Italia",
    "Japón",
    "México",
    "Rusia",
];
// 1
function numeroElementos() {
    console.log('Numero de elementos del array: ' + paises.length);
}
numeroElementos();
// 2
function listadoPaises() {
    console.log('Listado de los paises:');
    for (var i in paises) {
        console.log('\t-' + paises[i]);
    }
}
listadoPaises();
// 3
function listadoPaisesReves() {
    console.log('Listado de los paises al revés:');
    for (var i = paises.length - 1; i >= 0; i--) {
        console.log('\t-' + paises[i]);
    }
}
listadoPaisesReves();
// 4
function meterElementoPrincipio() {
    paises.unshift('España');
}
meterElementoPrincipio();
// 5
function meterElementoFinal() {
    paises.push('Alemania');
}
meterElementoFinal();
// 6
function eliminarElementoPrincipio() {
    console.log('Se ha eliminado el elemento con valor ' + paises.shift());
}
eliminarElementoPrincipio();
// 7
function eliminarElementoFinal() {
    console.log('Se ha eliminado el elemento con valor ' + paises.pop());
}
eliminarElementoFinal();
// 8
function verElemento() {
    var botonVerElemento = document.getElementById('ver-elemento');
    botonVerElemento === null || botonVerElemento === void 0 ? void 0 : botonVerElemento.addEventListener('click', function () {
        var posicion = prompt('Introduce la posicion del array que deseas ver:');
        if (posicion === null)
            return;
        posicion = posicion.trim();
        var parsedPosicion = parseInt(posicion);
        if (isNaN(parsedPosicion) || parsedPosicion < 0 || parsedPosicion > paises.length - 1) {
            alert('No existe la posicion indicada');
        }
        else {
            alert('El elemento en esa posicion es: ' + paises[parsedPosicion]);
        }
    });
}
verElemento();
// 9
function verPosicionElemento() {
    var botonVerPosicionElemento = document.getElementById('ver-posicion-elemento');
    botonVerPosicionElemento === null || botonVerPosicionElemento === void 0 ? void 0 : botonVerPosicionElemento.addEventListener('click', function () {
        var posicion = prompt('Introduce la posicion del array que deseas ver:').trim();
        var posicionArray = paises.indexOf(posicion);
        if (posicionArray === -1) {
            alert('No se ha encontrado el elemento');
        }
        else {
            alert('Posicion en el array: ' + posicionArray);
        }
    });
}
verPosicionElemento();
// 10
function verElementos() {
    var botonVerElementos = document.getElementById('ver-elementos');
    botonVerElementos === null || botonVerElementos === void 0 ? void 0 : botonVerElementos.addEventListener('click', function () {
        var posicionInicial = prompt('Introduce la posicion de inicio:').trim();
        var posicionFinal = prompt('Introduce la posicion de fin(no inclusiva):').trim();
        var parsedInicio = parseInt(posicionInicial);
        var parsedFin = parseInt(posicionFinal);
        if (isNaN(parsedInicio) || isNaN(parsedFin) || parsedInicio < 0 ||
            parsedFin > paises.length - 1 || parsedFin < parsedInicio) {
            alert('Las posiciones introducidas no son válidas');
        }
        else {
            var nuevoArray = paises.slice(parsedInicio, parsedFin);
            var texto_1 = 'Paises:\n';
            nuevoArray.forEach(function (pais) {
                texto_1 += '\t-' + pais + '\n';
            });
            alert(texto_1);
        }
    });
}
verElementos();
