const formulario=document.getElementById('formularioTarefa5')
const botonEnvio=formulario.botonEnviar
const botonBorrarCookie=document.getElementById('botonBorrarCookie')
window.addEventListener('load',()=>{
    botonEnvio.addEventListener('click',procesarFormulario)
    botonBorrarCookie.addEventListener('click',function (){
        borrarCookie('usuario')
    })
    formulario.addEventListener('keypress',cambiarDeInputEnter)
    cookieUsuario()
})

//tarefa tema 6
//asignollo ao form en vez de a cada un dos elementos xa que tamen se aplicará debido ao burbujeo
function cambiarDeInputEnter(e){
    if (e.key==='Enter' && e.target.id!=='botonEnviar'){
        e.preventDefault()
        let siguienteInput=e.target.nextElementSibling.nextElementSibling
        if (siguienteInput){
            siguienteInput.focus()
        }
    }
}


const cookieUsuario=() => {
    let nombreCookie='usuario'
    let cookieUsuarioValor=getValorCookie(nombreCookie)

    if (!cookieUsuarioValor){
        let nombreIntroducido=null
        do {
            nombreIntroducido=prompt('Indica tu nombre de usuario:')
        }while (!nombreIntroducido)
        crearCookie(nombreCookie,nombreIntroducido,3)
        cookieUsuarioValor=getValorCookie(nombreCookie)
    }
}

function crearCookie(nombre,valor,numDiasDuracion){
    let d=new Date()
    d.setTime(d.getTime()+(numDiasDuracion*24*60*60*1000))
    let dataFomateada=d.toGMTString()
    document.cookie=nombre + '=' + valor + ";expires="+dataFomateada+";path=/"
}

function borrarCookie(nombre){
    let valor=getValorCookie(nombre)
    if (valor){
        let d=new Date()
        d.setTime(d.getTime()-(1000)) //ponemos una fecha menor a la presente
        let fechaTexto=d.toGMTString()
        document.cookie=nombre+'=;expires='+fechaTexto+';path=/'
        alert('Se ha borrado la cookie con valor: '+valor)
    }else {
        alert('No está definido el nombre')
    }
}

function getValorCookie(nombre){
    let cookies=document.cookie.split(';')
    existe = cookies.filter((cookie)=>{
        let [nome,valor] = cookie.split('=')
        return nome.trim() === nombre.trim()
    })

    //devolvemos o valor da cookie se existe
    return (existe.length>0) ? existe[0].split('=')[1].trim() : null
}

const procesarFormulario = () => {
    event.preventDefault()

    let nome=formulario.nome?.value || null
    let apelidos=formulario.apelidos?.value || null
    let idade=formulario.idade?.value || null
    let nif=formulario.elements['nif']?.value || null
    let email=formulario.elements[4]?.value || null
    let provincia=formulario.elements['provincia'][formulario.elements['provincia']?.selectedIndex].value || null
    let contrasinal=formulario.contrasinal.value || null
    let dataNacemento=formulario.dataNacemento.value || null
    let telefono=formulario.elements['telefono']?.value || null
    let coche=formulario.checkCoche?.checked || null
    let moto=formulario.checkMoto?.checked || null
    let bici=formulario.checkBici?.checked || null
    let lenguaje=Array.from(formulario.lenguajeFav).find(lenguaje=>lenguaje.checked)??null

    if (!comprobarDatosObligatorios([nome,apelidos,idade,nif,email,provincia,contrasinal,dataNacemento,telefono,lenguaje])){
        alert('Es necesario cubrir todos los campos marcados con * del formulario antes de enviarlo')
        return false
    }

    let error=false;
    let texto="Error al enviar el formulario:\n"
    if (!comprobarDni(nif)){
        texto+="\t-El dni introducido no es válido\n"
        error=true
    }

    if (!comprobarEmail(email)){
        texto+="\t-El email introducido no es valido\n"
        error=true
    }

    if (isNaN(idade) || idade<0){
        texto+="\t-La edad debe ser un numero entero\n"
        error=true
    }

    if (!comprobarTelefono(telefono)){
        texto+="\t-El numero de telefono introducido no es válido\n"
        error=true
    }

    if (error){
        alert(texto)
    }else{
        alert('Formulario enviado correctamente')
    }

}

function comprobarTelefono(tlfn){
    const regexTlf= /^[\d]{9}$/
    return tlfn.match(regexTlf)!==null
}

function comprobarEmail(email){
    const regexEmail= /^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-z]{2,}$/
    return email.match(regexEmail)!==null
}

function comprobarDni(dni){
    let comprobacion = /^(\d{8})([a-zA-Z])$/
    let match=dni.match(comprobacion)
    if (match){
        let numeros=match[1]
        let letra=match[2].toLowerCase()
        let letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE';
        if (letra.toUpperCase()===letrasValidas[numeros%23]){
            return true
        }
    }
    return false
}

function comprobarDatosObligatorios(datos){
    return datos.filter(dato=>dato===null).length === 0
}