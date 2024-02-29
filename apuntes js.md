### Tipos de datos:

* numeros
* cadenas
* valores logicos (1 0)
* arrays
* objetos
* funcions

#### Cousas utiles
`parseFloat('3.14') `     3.14

`parseInt('89.76')` 	89

`'' + 2020`		020 (como cadena xa que ao sumalo como string convirteo)

`Hola ${nombre}`	cadenas con variables

`let [personaje1, personaje2] = ['Bob Esponja', 'Calamardo'];` dar valores a variables cun array

Ou con un objeto:

````javascript
let personaje = { nombre: 'Bob esponja', edad: 18 };
let { nombre, edad } = personaje;
````

`(condicion) ? expresionV : expresionF;` -> if acortado

`typeof nomeVariable` -> saber o tipo da variable

`Math.floor(Math.random() * (100+0+1))` -> Numero aleatorio entre o 0 e o 100.100(max), 0(min), +1 para que entre o 100 senon o maximo sería 99

---
### Estructuras de control
````javascript
if(condicion){

}else if(condicion){

}else{

}
------
switch (expression) {
	case value1:
		// Code to be executed when expression matches value1
		break;
	default:
		// Code to be executed when none of the cases match
}
````

### Bucles
````javascript
for (let i = 0; i <= 10; i++) {
      cousas a ejecutar;
}
------
while(condicion){
	cambio condicion;
	cousas ejecutar;
}
------
do{
	cambio condicion,
	cousas que facer;
}while(condicion)
````

### Arrays

definicion de arrays:
````javascript
//1
let array1=[1,4,'ola',false]
//2
let array2=new Array();
array2[0]=1 //añadese na posicion 0 o valor 1
````
borrar elementos
````javascript
let array1=['eio',2,5]
delete array1[1] //non cambia a longitud do array, o elemento pasa a undefined
array1.splice(1,1) //esto si borra o elemento e reduce a longitud do array
````
#### Funcions utiles
````javascript
let proba=['ola',4,34,23,2,'chao']

//info e coller datos
proba.length //devolve a cantidad de elementos do array
proba.slice(0,3) //devolve un array ['ola',4,34]
proba.indexOf('ola') //devolve a posicion do elemento, neste caso 0
//meter elementos
proba.push('eii',2) //mete os elementos ao final e devolve a nova length
proba.unshift('ei',23) //mete os elementos ao principio e devolve a nova longitud
//quitar elementos
proba.pop() //quita o ultimo elemento
proba.shift(); //elimina o primeiro elemento e devolveo

//quitar e añadir a vez donde queiramos
array1.splice(0,2,'novos','elementos') // ['novos','elementos',34,23,2,'chao']
    //explicacion
    // - Quita 2 elementos empezando dende a posicion 0
    // - Añade os novos elementos empezando na posicion de inicio indicada (0 neste caso)
    // - Devolve os elementos borrados
array1.splice(0,3) // [23,2,'chao']
    //neste caso solo borra 3 elementos

//outros
array1.reverse() //dalle a volta ao array
array1.sort() //ordena o array
````

# Formularios
Todo dato enviado mediante un formulario ao servidor chega como **TEXTO**.

## Maneiras de acceder a eles
1. Mediante o id `let formulario=document.getElementById(id)`
2. Mediante tag name 
   3. `let formulario=document.getElementByTagName("form")` - Esto pilla todos os forms do documento.
3. Mediante .forms
   5. `let todos=document.forms` - pillaos todos
      5. `todos["nomeFormulario"]` - solo pilla o que ten ese nombre
      6. `todos[0]` - pilla o primeiro
4. Mediante o name directamente (o atributo name)
   5. `formulario=document.nomeForm`


# Cookies
## Creacion
````javascript
document.cookie = "username=John Doe; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/";
````
* Ejemplo, funcion que crea unha cookie de x dias de duracion.
````javascript
function crearCookie(nombre,valor,numDiasDuracion){
   let d=new Date()
   d.setTime(d.getTime()+(numDiasDuracion*24*60*60*1000)) //é en ms
   let dataFomateada=d.toGMTString() //IMPORTANTE
   document.cookie=nombre+'='+valor+";expires="+dataFomateada+";path=/"
}
````
## Buscar unha en concreto
Hai que facelo manualmente, esta é unha forma facil que encontrei
````javascript
 let cookies=document.cookie.split(';') //separamos as cookies
 existe = cookies.filter((cookie)=>{ //filtramolas pa ver se algunha ten o mesmo nombre ca que buscamos
     let [nome,valor] = cookie.split('=')
     return nome.trim() === nombreBuscado.trim()
 }).length > 0 //devolvemos true se o array é maior ca 0
 console.log(existe) //devolve true ou false
````







