const divTabla9:HTMLElement=document.getElementById('tabla-9')
const fibonacci:HTMLElement=document.getElementById('fibonnacci')
const formNumeroPrimo:HTMLElement=document.getElementById('formPrimo')
const primosAleatorios:HTMLElement=document.getElementById('primos-aleatorios')

function imprimirTablaMultiplicarNumero(n : number=9):void{
    let texto:string=`<hr><h3>Tabla de multiplicar do ${n}</h3>`
    for (let i:number=0;i<=10;i++){
        texto+=`${i} * ${n} = ${i*n}<br>`
    }
    divTabla9.innerHTML=texto
}
imprimirTablaMultiplicarNumero()

function imprimirDezPrimeirosNumerosFibonnacci():void{
    let [a,b]:number[]=[0,1]
    let i:number=0
    let texto:string='<hr><h3>Primeiros 10 numeros de fibonnacci</h3>'
    while (i<10){
        texto+=`${a},`
        let c:number=a
        a=b
        b=b+c
        i++
    }
    fibonacci.innerHTML=texto.slice(0,-1)
}
imprimirDezPrimeirosNumerosFibonnacci()

formNumeroPrimo.addEventListener("submit", (e:SubmitEvent):void => {
    e.preventDefault()
    let textoMensaje:HTMLElement=document.getElementById('texto-resultado-primo')
    let numero:number=parseInt((document.getElementById('numero-primo') as HTMLInputElement).value)
    if (numero%2===0){
        textoMensaje.innerHTML='Es primo!'
        textoMensaje.style.color='green'
    }
    else {
        textoMensaje.innerHTML='No es primo'
        textoMensaje.style.color='red'
    }
})

function imprimirPrimosAleatorios():void{
    let i:number=0
    let textoImprimirNumeros:string='<hr><h3>Numeros primos o no aleatorios</h3>'
    do {
        let numero:number=Math.floor(Math.random() * (100+0+1)) //100(max), 0(min), +1 para que entre o 100 senon o maximo sería 99
        let texto:string=(numero%2===0) ? 'Es primo' : 'No es primo'
        textoImprimirNumeros+=`${numero}: ${texto}<br>`
        i++
    }while (i<=10)
    primosAleatorios.innerHTML=textoImprimirNumeros
}
imprimirPrimosAleatorios()