let paises = [
    "Argentina",
    "Estados Unidos",
    "Francia",
    "India",
    "Italia",
    "Japón",
    "México",
    "Rusia"
];

//1
function numeroElementos(){
    console.log('Numero de elementos del array: '+paises.length)
}
numeroElementos()
//2
function listadoPaises(){
    console.log('Listado de los paises:')
    for (let i in paises){
        console.log('\t-'+paises[i])
    }
}
listadoPaises()
//3
function listadoPaisesReves(){
    console.log('Listado de los paises al revés:')
    for (let i=paises.length-1;i>=0;i--){
        console.log('\t-'+paises[i])
    }
}
listadoPaisesReves()
//4
function meterElementoPrincipio(){
    paises.unshift('España')
}
meterElementoPrincipio()
//5
function meterElementoFinal(){
    paises.push('Alemania')
}
meterElementoFinal()
//6
function eliminarElementoPrincipio(){
    console.log('Se ha eliminado el elemento con valor '+paises.shift())
}
eliminarElementoPrincipio()
//7
function eliminarElementoFinal(){
    console.log('Se ha eliminado el elemento con valor '+paises.pop())
}
eliminarElementoFinal()
//8
function verElemento(){
    const botonVerElemento=document.getElementById('ver-elemento')
    botonVerElemento?.addEventListener('click',()=> {
        let posicion=prompt('Introduce la posicion del array que deseas ver:')
        if (isNaN(posicion) || posicion<0 || posicion>paises.length-1){
            alert('No existe la posicion indicada')
        }else{
            alert('El elemento en esa posicion es: '+paises[posicion])
        }
    })
}
verElemento()
//9
function verPosicionElemento(){
    const botonVerPosicionElemento=document.getElementById('ver-posicion-elemento')
    botonVerPosicionElemento?.addEventListener('click',()=> {
        let posicion=prompt('Introduce la posicion del array que deseas ver:').trim()
        let posicionArray=paises.indexOf(posicion)

        if (posicionArray===-1){
            alert('No se ha encontrado el elemento')
        }else {
            alert('Posicion en el array: '+posicionArray)
        }
    })
}
verPosicionElemento()
//10
function verElementos(){
    const botonVerElementos=document.getElementById('ver-elementos')
    botonVerElementos?.addEventListener('click',()=> {
        let posicionInicial=prompt('Introduce la posicion de inicio:').trim()
        let posicionFinal=prompt('Introduce la posicion de fin(no inclusiva):').trim()

        if ((isNaN(posicionInicial) || posicionInicial<0) ||
            (isNaN(posicionFinal) || posicionFinal>paises.length-1) ||
            posicionFinal<posicionInicial
        ){
            alert('Las posiciones introducidas no son validas')
        }else {
            let nuevoArray=paises.slice(posicionInicial,posicionFinal)
            let texto='Paises:\n'
            nuevoArray.forEach((pais) => {
                texto+='\t-'+pais+'\n'
            })
            alert(texto)
        }
    })
}
verElementos()



