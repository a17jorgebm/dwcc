interface DiscoBase{
    nome:string
    grupo:string
    ano:number
    tipo:string
    prestado:boolean
    cargaDatos(nome:string,grupo:string,ano:number,tipo:string,prestado:boolean):void
    verInfo():string
}

class Disco implements DiscoBase{
    private _nome:string
    private _grupo:string
    private _ano:number
    private _tipo:string
    private _prestado:boolean

    constructor(nome:string,grupo:string,ano:number,tipo:string,prestado:boolean) {
        this._nome=nome
        this._grupo=grupo
        this._ano=ano
        this._tipo=tipo
        this._prestado=prestado
    }

    public cargaDatos(nome: string, grupo: string, ano: number, tipo: string, prestado: boolean) {
        this._nome=nome
        this._grupo=grupo
        this._ano=ano
        this._tipo=tipo
        this._prestado=prestado
    }

    public verInfo(): string {
        return `
        Nombre: ${this._nome}\n
        Grupo: ${this._grupo}\n
        Año: ${this._ano}\n
        Tipo: ${this._tipo}\n
        Prestado: ${this._prestado ? 'Si' : 'No'}
        `
    }

    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get grupo(): string {
        return this._grupo;
    }

    set grupo(value: string) {
        this._grupo = value;
    }

    get ano(): number {
        return this._ano;
    }

    set ano(value: number) {
        this._ano = value;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value;
    }

    get prestado(): boolean {
        return this._prestado;
    }

    set prestado(value: boolean) {
        this._prestado = value;
    }
}

type ColeccionBase= {
    discos:Disco[] | null
    engadirDisco: (disco:Disco) => void
    engadirDiscos: (discos:Disco[]) => void
    verDiscos: () => void
}

let coleccion:ColeccionBase = {
    discos:null,
    engadirDisco : (disco:Disco):void => {this.discos.push(disco)},
    engadirDiscos : (discos:Disco[]):void => { this.discos=discos },
    verDiscos : ():void => {
        if (this.discos===null){
            console.log('No hay discos en la coleccion')
        }else {
            this.discos.forEach((disco,i):void => {
                console.log('-------- Disco '+ ++i +' --------')
                console.log(disco.verInfo())
            })
        }
    }
}

let disco:Disco=new Disco('The Dark Side Of The Moon','Pink Floid',1973,'rock',false)
let disco2:Disco=new Disco('1989','Taylor Swift',2023,'pop',true)
let disco3:Disco=new Disco('The Wall','Pink Floid',1979,'rock',false)
let disco4:Disco=new Disco('Parachutes','ColdPlay',2000,'pop',true)

coleccion.engadirDiscos([disco,disco2,disco3,disco4])
coleccion.verDiscos()

