Casting operator <> :
sirve para indicar de que tipo é un valor, por ejemplo para pillar o value dun HTMLInputElement temos que indicalo, senon da erro.
- let numero:number=parseInt((document.getElementById('numero-primo') as HTMLInputElement).value)
ou
- let numero:number=parseInt((<HTMLInputElement>document.getElementById('numero-primo')).value)
-----

## Funcions
Son practicamente iguales solo que indicando o tipo dos parametros e do que devolve

Aqui edad non é obligatorio, pero ollo que se non se non se pasa tería o valor undefined
````typescript
function proba(nome:string,edad?:number) : boolean{
    return true
}
````
Se se quere que teña un valor faise como en js. Esta ademais lanza un error por eso se pon que devolve `never` OU boolean
````typescript
function proba(nome:string,edad:number = 0) : never | boolean{
    if (edad<2){
        throw new Error('error!')
    }
    return true
}
````

## Objetos e eso
### Types
Podemos declarar un tipo de dato personalizado e facer unha plantilla para como ten que ser.

Un obxeto
````typescript
type TipoObxeto = {
    nome:string,
    edad?:number //este é opcional
    funcionPersonalizada(dato:string):number
}
````
Con tipos de datos
````typescript
type numeroOuNull = number | null //pode ser ou un numero ou null
````

Incluso con valores especificos, facendo a funcion dos enums pero sen ter a opción de recorrelos nin nada.

````typescript
//as variables deste tipo terán que ter alguns destes valores
type datos = "españa" | 1 | "ola"
let variable:datos = 2
````

Con funcions
````typescript
type funcionNova = (campo1:string,campo2?:number) => number
````

Podense unir co caracter `&` ou `|`. NON combinar con `&` tipos distintos, xa que non ten sentido
````typescript
type a={
    nome:string
}
type b= {
    apellido:string
}
type c=boolean
type d= (a & b) | c
let proba:d= {nome:'dsf',apellido:'sdf'} //pode coller este valor
let proba2=true // ou este
````

### Interfaces
É practicamente o mismo, solo que solo se poden crear plantillas de **objetos**

````typescript
interface Persona{
    nome: 'ola'
    edad?: number
    funcionPersonalizada(campo1:string,campo2:number):number //!!!!!NON SE PODEN POÑER campo2:number = 23, eso faise no objeto
}
````
Podense extender con `extends`, facendo a mesma funcion que `&` nos types
````typescript
interface Traballador extends Persona{
    NIF:string
}
let traballador:Traballador={
    nome:'ola', //ten que ter este valor
    funcionPersonalizada:(campo1:string,campo2:number=23):number=>{
        return 2
    },
    NIF:'23'
}
````

### Record
Utilizase para crear objetos dinamicos dos que non se sabe o nome dos campos

`<nombreCampo,tipoCampo>`

````typescript
const proba:Record<string,number> = {
    nome:23,
    apellidos:'sdfsdfs' //da erro
}
````
Tamen se pode facer con types, por ejemplo pasar os campos que ten que ter o objeto
````typescript
type Nome = "Jorge" | "Eva";
let probaRecord:Record<Nome, string>={
    //É OBLIGATORIO QUE TEÑA TODOS OS CAMPOS DO TYPE, non pode ter solo Jorge
    Jorge:'wdfs',
    Eva:'23'
}
````

### Clases
Practicamente igual que en js
````typescript
class ClaseGuapa{
    private _nome:string
    private _edad:number

    constructor(nome:string,edad:number=0){
        this._nome=nome
        this._edad=edad
    }

    get nome():string{ //non se pode chamar igual que o atributo por eso se pon _ nos atributos privados
        return this._nome
    }

    public funcionPersonalizada():number{
        return 2
    }
}
````
Tamen se poden extender con `extends`
````typescript
class Extende extends ClaseGuapa{
    private _outro:number

    constructor(nome:string,edad:number=0,outro:number){
        super(nome,edad) //IMPORTANTE CHAMAR A ESTO
        this._outro=outro
    }

    get outro():number{
        return this._outro
    }
}
````
E implementar interfacers con `implements`
````typescript
interface DiscoBase{
    nome:string
    verInfo():string
}
class Disco implements DiscoBase {
    private _nome:string

    //!!!!!!FIJARSE: o atributo da interface completase co get, non con _nome, xa que é privado
    get nome(): string {
        return this._nome;
    }
    
    public verInfo(): string {
        //codigo
    }
}
````





