let paises: string[] = [
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
function numeroElementos(): void {
    console.log('Numero de elementos del array: ' + paises.length);
}
numeroElementos();

// 2
function listadoPaises(): void {
    console.log('Listado de los paises:');
    for (let i in paises) {
        console.log('\t-' + paises[i]);
    }
}
listadoPaises();

// 3
function listadoPaisesReves(): void {
    console.log('Listado de los paises al revés:');
    for (let i:number = paises.length - 1; i >= 0; i--) {
        console.log('\t-' + paises[i]);
    }
}
listadoPaisesReves();

// 4
function meterElementoPrincipio(): void {
    paises.unshift('España');
}
meterElementoPrincipio();

// 5
function meterElementoFinal(): void {
    paises.push('Alemania');
}
meterElementoFinal();

// 6
function eliminarElementoPrincipio(): void {
    console.log('Se ha eliminado el elemento con valor ' + paises.shift());
}
eliminarElementoPrincipio();

// 7
function eliminarElementoFinal(): void {
    console.log('Se ha eliminado el elemento con valor ' + paises.pop());
}
eliminarElementoFinal();
// 8
function verElemento(): void {
    const botonVerElemento:HTMLElement = document.getElementById('ver-elemento');
    botonVerElemento?.addEventListener('click', () => {
        let posicion:string = prompt('Introduce la posicion del array que deseas ver:');
        if (posicion === null) return;

        posicion = posicion.trim();
        const parsedPosicion:number = parseInt(posicion);
        if (isNaN(parsedPosicion) || parsedPosicion < 0 || parsedPosicion > paises.length - 1) {
            alert('No existe la posicion indicada');
        } else {
            alert('El elemento en esa posicion es: ' + paises[parsedPosicion]);
        }
    });
}
verElemento();

// 9
function verPosicionElemento(): void {
    const botonVerPosicionElemento:HTMLElement = document.getElementById('ver-posicion-elemento');
    botonVerPosicionElemento?.addEventListener('click', () => {
        let posicion:string = prompt('Introduce la posicion del array que deseas ver:').trim();
        const posicionArray:number = paises.indexOf(posicion);

        if (posicionArray === -1) {
            alert('No se ha encontrado el elemento');
        } else {
            alert('Posicion en el array: ' + posicionArray);
        }
    });
}
verPosicionElemento();

// 10
function verElementos(): void {
    const botonVerElementos:HTMLElement = document.getElementById('ver-elementos');
    botonVerElementos?.addEventListener('click', () => {
        let posicionInicial:string = prompt('Introduce la posicion de inicio:').trim();
        let posicionFinal:string = prompt('Introduce la posicion de fin(no inclusiva):').trim();

        const parsedInicio:number = parseInt(posicionInicial);
        const parsedFin:number = parseInt(posicionFinal);

        if (
            isNaN(parsedInicio) || isNaN(parsedFin) || parsedInicio < 0 ||
            parsedFin > paises.length - 1 || parsedFin < parsedInicio
        ) {
            alert('Las posiciones introducidas no son válidas');
        } else {
            let nuevoArray:string[] = paises.slice(parsedInicio, parsedFin);
            let texto:string = 'Paises:\n';
            nuevoArray.forEach((pais:string):void => {
                texto += '\t-' + pais + '\n';
            });
            alert(texto);
        }
    });
}
verElementos();
