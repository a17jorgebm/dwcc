class Disco{
    constructor(nome,grupo,ano,tipo,prestado){
        this._nome = nome;
        this._grupo = grupo;
        this._ano = ano;
        this._tipo = tipo;
        this._prestado = prestado;
    }

    cargarDatos(nome,grupo,ano,tipo,prestado){
        this._nome = nome;
        this._grupo = grupo;
        this._ano = ano;
        this._tipo = tipo;
        this._prestado = prestado;
    }

    verInformacion(){
        return `
        Nombre: ${this.nome}\n
        Grupo: ${this.grupo}\n
        Año: ${this.ano}\n
        Tipo: ${this.tipo}\n
        Prestado: ${this.prestado ? 'Si' : 'No'}
        `
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get grupo() {
        return this._grupo;
    }

    set grupo(value) {
        this._grupo = value;
    }

    get ano() {
        return this._ano;
    }

    set ano(value) {
        this._ano = value;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(value) {
        this._tipo = value;
    }

    get prestado() {
        return this._prestado;
    }

    set prestado(value) {
        this._prestado = value;
    }
}

let disco=new Disco('The Dark Side Of The Moon','Pink Floid',1973,'rock',0)
let disco2=new Disco('1989','Taylor Swift',2023,'pop',1)
let disco3=new Disco('The Wall','Pink Floid',1979,'rock',0)
let disco4=new Disco('Parachutes','ColdPlay',2000,'pop',1)


function Coleccion(discos=[]){
    this.discos=[]

    this.setDiscos= (discos) => this.discos=discos
    this.engadirDisco= (disco) => this.discos.push(disco)

    this.verInfoDiscos= () => {
        this.discos.forEach((disco,i) => {
            console.log('-------- Disco '+ ++i +' --------')
            console.log(disco.verInformacion())
            /* Tamen probei de esta maneira
            for (const clave in disco){
                console.log(disco[clave])
            }*/
        })
    }
}

let coleccion = new Coleccion()
coleccion.engadirDisco(disco)
coleccion.engadirDisco(disco2)
coleccion.engadirDisco(disco3)
coleccion.engadirDisco(disco4)
coleccion.engadirDisco(disco)


coleccion.verInfoDiscos()