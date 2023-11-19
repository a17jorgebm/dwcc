const botonNombre: HTMLElement | null = document.getElementById('nombre');
const botonContrasinal: HTMLElement | null = document.getElementById('contrasinal');

const textoNombre: HTMLElement | null = document.getElementById('texto-nombre');
const textoContrasinal: HTMLElement | null = document.getElementById('texto-contrasinal');

if (botonNombre && botonContrasinal && textoNombre && textoContrasinal) {
    botonNombre.addEventListener('click', () => {
        let nombre: string | null = prompt('Introduce tu nombre y apellidos');
        if (nombre && nombre.trim().split(' ').length >= 3) {
            nombre = nombre.trim();
            let nombreSeparado: string[] = nombre.split(' ');

            let titulo: HTMLHeadingElement = document.createElement('h2');
            let tamano: HTMLParagraphElement = document.createElement('p');
            let tamanoSinEspacios: HTMLParagraphElement = document.createElement('p');
            let minuscula: HTMLParagraphElement = document.createElement('p');
            let mayusc: HTMLParagraphElement = document.createElement('p');
            let separadosN: HTMLParagraphElement = document.createElement('p');
            let separadosApel1: HTMLParagraphElement = document.createElement('p');
            let separadosApel2: HTMLParagraphElement = document.createElement('p');
            let nomeUsuario: HTMLParagraphElement = document.createElement('p');

            titulo.innerText = 'NOMBRE Y APELLIDOS';
            tamano.innerText = nombre.length.toString();
            tamanoSinEspacios.innerText = nombre.replaceAll(' ', '').length.toString();
            minuscula.innerText = nombre.toLowerCase();
            mayusc.innerText = nombre.toUpperCase();
            separadosN.innerText = nombreSeparado[0];
            separadosApel1.innerText = nombreSeparado[1];
            separadosApel2.innerText = nombreSeparado[2];
            nomeUsuario.innerText = `${nombreSeparado[0].toLowerCase()}${nombreSeparado[1].charAt(0).toUpperCase()}${nombreSeparado[2].charAt(0).toUpperCase()}`;

            if (textoNombre) {
                textoNombre.append(
                    titulo,
                    tamano,
                    tamanoSinEspacios,
                    minuscula,
                    mayusc,
                    separadosN,
                    separadosApel1,
                    separadosApel2,
                    nomeUsuario
                );
            }
        } else {
            alert('No has introducido tu nombre y apellidos completos!');
        }
    });

    botonContrasinal.addEventListener('click', () => {
        let contrasena: string | null = prompt('Introduce una contraseña');
        if (contrasena) {
            const longitudValida: RegExp = /^.{8,16}$/;
            const tieneMayuscula: RegExp = /[A-Z]/;
            const tieneMinuscula: RegExp = /[a-z]/;
            const tieneNumero: RegExp = /[0-9]/;
            const tieneEspecial: RegExp = /[_\-@#$%&]/;

            const cumpleLongitud: boolean = longitudValida.test(contrasena);
            const cumpleMayuscula: boolean = tieneMayuscula.test(contrasena);
            const cumpleMinuscula: boolean = tieneMinuscula.test(contrasena);
            const cumpleNumero: boolean = tieneNumero.test(contrasena);
            const cumpleEspecial: boolean = tieneEspecial.test(contrasena);

            if (
                cumpleLongitud &&
                cumpleMayuscula &&
                cumpleMinuscula &&
                cumpleNumero &&
                cumpleEspecial
            ) {
                alert('Contraseña válida');
            } else {
                alert('Contraseña NO válida');
            }
        } else {
            alert('No has introducido una contraseña');
        }
    });
}
