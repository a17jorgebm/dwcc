const botonIf=document.getElementById('boton-edad-if')
const botonSwitch=document.getElementById('boton-edad-switch')

botonIf.addEventListener('click',comprobarEdadIf)
botonSwitch.addEventListener('click',comprobarEdadSwitch)

function comprobarEdadIf(){
    let edad=prompt('Introduce una edad')
    if (edad ===null ){
        return
    }else{
        edad=parseInt(edad)
    }
    if (isNaN(edad) || edad>100 || edad<0){
        alert('Error! Debes introducir un número entre 0 e 100')
        comprobarEdadSwitch()
    } else if (edad >= 0 && edad <= 12) {
        alert('neno');
    } else if (edad >= 13 && edad <= 18) {
        alert('adolescente');
    } else if (edad >= 19 && edad <= 30) {
        alert('xoven');
    } else if (edad >= 31 && edad <= 64) {
        alert('adulto');
    } else if (edad >= 65 && edad <= 100) {
        alert('xubilado');
    }else{
        alert('Ocorreu un erro descoñecido')
        comprobarEdadIf()
    }
}

function comprobarEdadSwitch(){
    let edad=prompt('Introduce una edad')
    if (edad ===null ){
        return
    }else{
        edad=parseInt(edad)
    }
    //non atopei forma mais eficiente para facelo sen ter que poñer todos os números do 0 ao 100 a man (polo que non lle atopo moito sentido a usar o switch para rangos)
    switch (true){
        case (isNaN(edad) || edad>100 || edad<0):
            alert('Error! Debes introducir un número entre 0 e 100')
            comprobarEdadSwitch()
            break
        case (edad >= 0 && edad <= 12):
            alert('neno')
            break
        case (edad >= 13 && edad <= 18):
            alert('adolescente')
            break
        case (edad >= 19 && edad <= 30):
            alert('xoven')
            break
        case (edad >= 31 && edad <= 64):
            alert('adulto')
            break
        case (edad >= 65 && edad <= 100):
            alert('xubilado')
            break
        default:
            alert('Ocorreu un erro descoñecido')
            comprobarEdadIf()
            break
    }
}