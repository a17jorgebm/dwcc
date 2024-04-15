//creacion do obxeto
let disco={
    nome: 'Volar',
    grupo: 'Malu',
    ano: 1313,
    tipo: 'Rock',
    prestado: true
}

//1.1 Acceso a algunhas propiedades
let {nome,grupo} = disco;
console.log(nome);
    //con funcion de frecha
const mostrarNome = ({nome}) => console.log(nome)
mostrarNome(disco)

//1.2 Copia dun obxeto
let disco2 = {
    ...disco
}
console.log(disco2)

//1.3 Copia con redefinición de valor
let disco3={
    ...disco,
    nome: 'Vivir'
}
console.log(disco3)

//1.4 Copia de obxeto con redefinición de nome
const {nome: novoNome,...restoAtributos}=disco
let disco4={
    novoNome,
    ...restoAtributos
}
console.log(disco4)

//1.5 Acceso a valores de array ignorando outros
const arrayEjemplo=[1,'ola',true,2342423,false,2323,23,3,56]
const [primeiro,,terceirovalor,...resto]=arrayEjemplo
console.log(terceirovalor)

//1.6 desestructuracion con for of
const arrayObjetos=[
    {
        nome:'paco',
        edad:45
    },
    {
        nome:'lucia',
        edad:23
    },
    {
        nome:'eva',
        edad:12
    },
    {
        nome:'juan',
        edad:43
    }
]

for(const{
    nome: n,
    edad: e
} of arrayObjetos){
    console.log(`Nombre: ${n}, Edad: ${e}`)
}