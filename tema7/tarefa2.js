$(()=>{
    crearTabla();
    cambiarColor();
    crearBotonCalcularMedia();
})

function crearTabla(){
    let corpoTabla= $("#tabla-tareas tbody")
    let datos=[
        {nome:"Juan",tarefas:[4,5,7,1]},
        {nome:"Pepe",tarefas:[9,4.2,8,6]},
        {nome:"Eva",tarefas:[4,5,2,1]},
        {nome:"María",tarefas:[4,10,7,0]},
        {nome:"Soledad",tarefas:[4,5,4,1]}
    ]

    for(const{
        nome: nome,
        tarefas: tarefas
    } of datos){
        let fila=document.createElement('tr')
        let elementoNome=document.createElement('td')
        elementoNome.innerText=nome
        fila.append(elementoNome)
        for(nota of tarefas){
            let elementoNota=document.createElement('td')
            elementoNota.innerText=nota
            elementoNota.classList.add('nota')
            fila.append(elementoNota)
        }
        let elementoMedia=document.createElement('td')
        let elementoPondera=document.createElement('td')
        elementoMedia.classList.add('media-alumno')
        elementoPondera.classList.add('pondera-alumno')
        fila.append(elementoMedia,elementoPondera)
        corpoTabla.append(fila)
    }
}

function cambiarColor(){
    //cambio o color de fondo das filas pares
    $("#tabla-tareas tbody tr:nth-child(even)").addClass('color-distinto')
}

function crearBotonCalcularMedia(){
    //boton para calcular media o ponderación final
    let boton=document.createElement('button')
    boton.id="boton-calculo"
    boton.innerText="Calcular Media y Ponderación"
    boton.addEventListener('click',()=>{
        let filas = $("#tabla-tareas tbody tr")
        for(fila of filas){
            fila=$(fila)
            let elementoMedia=fila.find('.media-alumno')
            let elementoPonderacion=fila.find('.pondera-alumno')
            let notasFila=fila.find('.nota').get() //cojo las notas y las convierto en array para poder usar reduce

            let sumaNotas=notasFila.reduce((a,v)=>{
                return a+(parseFloat(v.innerText))
            },0)

            let media=sumaNotas/notasFila.length
            let ponde=media*0.2

            // se añaden los valores a la tabla
            elementoMedia.text(media.toFixed(2))
            elementoPonderacion.text(ponde.toFixed(2))

            //se cambia el color de cada fila según si esta suspenso o no
            fila.addClass((media<5) ? 'suspenso' : 'aprobado')
        }
    })

    $("body").append(boton)
}