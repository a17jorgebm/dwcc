const divTabla9=document.getElementById('tabla-9')
const fibonacci=document.getElementById('fibonnacci')
const formNumeroPrimo=document.getElementById('formPrimo')
const primosAleatorios=document.getElementById('primos-aleatorios')

function imprimirTablaMultiplicarNumero(n=9){
    let texto=`<hr><h3>Tabla de multiplicar do ${n}</h3>`
    for (let i=0;i<=10;i++){
        texto+=`${i} * ${n} = ${i*n}<br>`
    }
    divTabla9.innerHTML=texto
}
imprimirTablaMultiplicarNumero()

function imprimirDezPrimeirosNumerosFibonnacci(){
    let [a,b]=[0,1]
    let i=0
    let texto='<hr><h3>Primeiros 10 numeros de fibonnacci</h3>'
    while (i<10){
        texto+=`${a},`
        let c=a
        a=b
        b=b+c
        i++
    }
    fibonacci.innerHTML=texto.slice(0,-1)
}
imprimirDezPrimeirosNumerosFibonnacci()

formNumeroPrimo.addEventListener("submit", (e) => {
    e.preventDefault()
    let textoMensaje=document.getElementById('texto-resultado-primo')
    let numero=document.getElementById('numero-primo').value
    if (numero%2===0){
        textoMensaje.innerHTML='Es primo!'
        textoMensaje.style.color='green'
    }
    else {
        textoMensaje.innerHTML='No es primo'
        textoMensaje.style.color='red'
    }
})

function imprimirPrimosAleatorios(){
    let i=0
    let textoImprimirNumeros='<hr><h3>Numeros primos o no aleatorios</h3>'
    do {
        let numero=Math.floor(Math.random() * (100+0+1)) //100(max), 0(min), +1 para que entre o 100 senon o maximo sería 99
        let texto=(numero%2===0) ? 'Es primo' : 'No es primo'
        textoImprimirNumeros+=`${numero}: ${texto}<br>`
        i++
    }while (i<=10)
    primosAleatorios.innerHTML=textoImprimirNumeros
}
imprimirPrimosAleatorios()