//exercicio 1
const parrafosPaxina=document.getElementsByTagName('p')
const numeroParrafosPaxina=parrafosPaxina.length
console.log('Numero de parágrafos páxina: '+ numeroParrafosPaxina)
console.log('Contido segundo parágrafo(se hai): '+ (numeroParrafosPaxina>1 ? parrafosPaxina[1].textContent : parrafosPaxina[0].textContent))

const ligazonsPaxina=getLigazons();
const numeroLigazonsPaxina=ligazonsPaxina.length
const numeroLigazonsPrimeiroParrafo=getLigazons(numeroParrafosPaxina[0]).length

console.log('Numero de ligazons: '+numeroLigazonsPaxina)
console.log('Link da primeira ligazón: '+ligazonsPaxina[0].href)
console.log('Link da penúltima ligazón(se hai): '+(numeroLigazonsPaxina>2 ? ligazonsPaxina[numeroLigazonsPaxina-2].href : ligazonsPaxina[0].href))
console.log('Numero de ligazons primeiro paragrafo: '+numeroLigazonsPrimeiroParrafo)


//compruebo que efectivamente tienen enlace
function getLigazons(elemento=document){
    const elementosA = elemento.getElementsByTagName('a')
    return Array.from(elementosA).filter((elemento) => {
        return elemento.href
    })
}




