var botonIf = document.getElementById('boton-edad-if');
var botonSwitch = document.getElementById('boton-edad-switch');
botonIf.addEventListener('click', comprobarEdadIf);
botonSwitch.addEventListener('click', comprobarEdadSwitch);
function comprobarEdadIf() {
    var cuadro = prompt('Introduce una edad');
    var edad;
    if (cuadro === null) {
        return;
    }
    else {
        edad = parseInt(cuadro);
    }
    if (isNaN(edad) || edad > 100 || edad < 0) {
        alert('Error! Debes introducir un número entre 0 e 100');
        comprobarEdadSwitch();
    }
    else if (edad >= 0 && edad <= 12) {
        alert('neno');
    }
    else if (edad >= 13 && edad <= 18) {
        alert('adolescente');
    }
    else if (edad >= 19 && edad <= 30) {
        alert('xoven');
    }
    else if (edad >= 31 && edad <= 64) {
        alert('adulto');
    }
    else if (edad >= 65 && edad <= 100) {
        alert('xubilado');
    }
    else {
        alert('Ocorreu un erro descoñecido');
        comprobarEdadIf();
    }
}
function comprobarEdadSwitch() {
    var cuadro = prompt('Introduce una edad');
    var edad;
    if (cuadro === null) {
        return;
    }
    else {
        edad = parseInt(cuadro);
    }
    switch (true) {
        case (isNaN(edad) || edad > 100 || edad < 0):
            alert('Error! Debes introducir un número entre 0 e 100');
            comprobarEdadSwitch();
            break;
        case (edad >= 0 && edad <= 12):
            alert('neno');
            break;
        case (edad >= 13 && edad <= 18):
            alert('adolescente');
            break;
        case (edad >= 19 && edad <= 30):
            alert('xoven');
            break;
        case (edad >= 31 && edad <= 64):
            alert('adulto');
            break;
        case (edad >= 65 && edad <= 100):
            alert('xubilado');
            break;
        default:
            alert('Ocorreu un erro descoñecido');
            comprobarEdadIf();
            break;
    }
}
