var divTabla9 = document.getElementById('tabla-9');
var fibonacci = document.getElementById('fibonnacci');
var formNumeroPrimo = document.getElementById('formPrimo');
var primosAleatorios = document.getElementById('primos-aleatorios');
function imprimirTablaMultiplicarNumero(n) {
    if (n === void 0) { n = 9; }
    var texto = "<hr><h3>Tabla de multiplicar do ".concat(n, "</h3>");
    for (var i = 0; i <= 10; i++) {
        texto += "".concat(i, " * ").concat(n, " = ").concat(i * n, "<br>");
    }
    divTabla9.innerHTML = texto;
}
imprimirTablaMultiplicarNumero();
function imprimirDezPrimeirosNumerosFibonnacci() {
    var _a = [0, 1], a = _a[0], b = _a[1];
    var i = 0;
    var texto = '<hr><h3>Primeiros 10 numeros de fibonnacci</h3>';
    while (i < 10) {
        texto += "".concat(a, ",");
        var c = a;
        a = b;
        b = b + c;
        i++;
    }
    fibonacci.innerHTML = texto.slice(0, -1);
}
imprimirDezPrimeirosNumerosFibonnacci();
formNumeroPrimo.addEventListener("submit", function (e) {
    e.preventDefault();
    var textoMensaje = document.getElementById('texto-resultado-primo');
    var numero = parseInt(document.getElementById('numero-primo').value);
    if (numero % 2 === 0) {
        textoMensaje.innerHTML = 'Es primo!';
        textoMensaje.style.color = 'green';
    }
    else {
        textoMensaje.innerHTML = 'No es primo';
        textoMensaje.style.color = 'red';
    }
});
function imprimirPrimosAleatorios() {
    var i = 0;
    var textoImprimirNumeros = '<hr><h3>Numeros primos o no aleatorios</h3>';
    do {
        var numero = Math.floor(Math.random() * (100 + 0 + 1)); //100(max), 0(min), +1 para que entre o 100 senon o maximo sería 99
        var texto = (numero % 2 === 0) ? 'Es primo' : 'No es primo';
        textoImprimirNumeros += "".concat(numero, ": ").concat(texto, "<br>");
        i++;
    } while (i <= 10);
    primosAleatorios.innerHTML = textoImprimirNumeros;
}
imprimirPrimosAleatorios();
