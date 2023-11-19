const botonNombre=document.getElementById('nombre')
const botonContrasinal=document.getElementById('contrasinal')

const textoNombre=document.getElementById('texto-nombre')
const textoContrasinal=document.getElementById('texto-contrasinal')

botonNombre.addEventListener('click', () => {
    let nombre=prompt('Introduce tu nombre y apellidos')
    if (nombre && nombre.trim().split(' ').length >= 3){
        nombre=nombre.trim()
        let nombreSeparado=nombre.split(' ')

        let titulo=document.createElement('h2')
        let tamano=document.createElement('p')
        let tamanoSinEspacios=document.createElement('p')
        let minuscula=document.createElement('p')
        let mayusc=document.createElement('p')
        let separadosN=document.createElement('p')
        let separadosApel1=document.createElement('p')
        let separadosApel2=document.createElement('p')
        let nomeUsuario=document.createElement('p')

        titulo.innerText='NOMBRE Y APELLIDOS'
        tamano.innerText=nombre.length
        tamanoSinEspacios.innerText=(nombre.replaceAll(' ','')).length
        minuscula.innerText=nombre.toLowerCase()
        mayusc.innerText=nombre.toUpperCase()
        separadosN.innerText=nombreSeparado[0]
        separadosApel1.innerText=nombreSeparado[1]
        separadosApel2.innerText=nombreSeparado[2]
        nomeUsuario.innerText=nombreSeparado[0].toLowerCase()+
            nombreSeparado[1].slice(0,1).toUpperCase()
            +nombreSeparado[2].slice(0,1).toUpperCase();

        textoNombre.append(
            titulo,
            tamano,
            tamanoSinEspacios,
            minuscula,
            mayusc,
            separadosN,
            separadosApel1,
            separadosApel2,
            nomeUsuario,
        )
    }else {
        alert('No has introducido tu nombre y apellidos completos!')
    }
})

botonContrasinal.addEventListener('click', () => {
    let contrasena=prompt('Introduce una contraseña')
    if (contrasena){
        const longitudValida = /^.{8,16}$/;
        const tieneMayuscula = /[A-Z]/;
        const tieneMinuscula = /[a-z]/;
        const tieneNumero = /[0-9]/;
        const tieneEspecial = /[_\-@#$%&]/;

        const cumpleLongitud = longitudValida.test(contrasena);
        const cumpleMayuscula = tieneMayuscula.test(contrasena);
        const cumpleMinuscula = tieneMinuscula.test(contrasena);
        const cumpleNumero = tieneNumero.test(contrasena);
        const cumpleEspecial = tieneEspecial.test(contrasena);

        if (
            cumpleLongitud &&
            cumpleMayuscula &&
            cumpleMinuscula &&
            cumpleNumero &&
            cumpleEspecial
        ) {
            alert('Contraseña valida'); // La contraseña cumple con todos los criterios
        } else {
            alert('Contraseña NO valida'); // La contraseña no cumple con algún criterio
        }
    }else{
        alert('No has introducido una contraseña')
    }

})
