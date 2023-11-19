var botonNombre = document.getElementById('nombre');
var botonContrasinal = document.getElementById('contrasinal');
var textoNombre = document.getElementById('texto-nombre');
var textoContrasinal = document.getElementById('texto-contrasinal');
if (botonNombre && botonContrasinal && textoNombre && textoContrasinal) {
    botonNombre.addEventListener('click', function () {
        var nombre = prompt('Introduce tu nombre y apellidos');
        if (nombre && nombre.trim().split(' ').length >= 3) {
            nombre = nombre.trim();
            var nombreSeparado = nombre.split(' ');
            var titulo = document.createElement('h2');
            var tamano = document.createElement('p');
            var tamanoSinEspacios = document.createElement('p');
            var minuscula = document.createElement('p');
            var mayusc = document.createElement('p');
            var separadosN = document.createElement('p');
            var separadosApel1 = document.createElement('p');
            var separadosApel2 = document.createElement('p');
            var nomeUsuario = document.createElement('p');
            titulo.innerText = 'NOMBRE Y APELLIDOS';
            tamano.innerText = nombre.length.toString();
            tamanoSinEspacios.innerText = nombre.replaceAll(' ', '').length.toString();
            minuscula.innerText = nombre.toLowerCase();
            mayusc.innerText = nombre.toUpperCase();
            separadosN.innerText = nombreSeparado[0];
            separadosApel1.innerText = nombreSeparado[1];
            separadosApel2.innerText = nombreSeparado[2];
            nomeUsuario.innerText = "".concat(nombreSeparado[0].toLowerCase()).concat(nombreSeparado[1].charAt(0).toUpperCase()).concat(nombreSeparado[2].charAt(0).toUpperCase());
            if (textoNombre) {
                textoNombre.append(titulo, tamano, tamanoSinEspacios, minuscula, mayusc, separadosN, separadosApel1, separadosApel2, nomeUsuario);
            }
        }
        else {
            alert('No has introducido tu nombre y apellidos completos!');
        }
    });
    botonContrasinal.addEventListener('click', function () {
        var contrasena = prompt('Introduce una contraseña');
        if (contrasena) {
            var longitudValida = /^.{8,16}$/;
            var tieneMayuscula = /[A-Z]/;
            var tieneMinuscula = /[a-z]/;
            var tieneNumero = /[0-9]/;
            var tieneEspecial = /[_\-@#$%&]/;
            var cumpleLongitud = longitudValida.test(contrasena);
            var cumpleMayuscula = tieneMayuscula.test(contrasena);
            var cumpleMinuscula = tieneMinuscula.test(contrasena);
            var cumpleNumero = tieneNumero.test(contrasena);
            var cumpleEspecial = tieneEspecial.test(contrasena);
            if (cumpleLongitud &&
                cumpleMayuscula &&
                cumpleMinuscula &&
                cumpleNumero &&
                cumpleEspecial) {
                alert('Contraseña válida');
            }
            else {
                alert('Contraseña NO válida');
            }
        }
        else {
            alert('No has introducido una contraseña');
        }
    });
}
