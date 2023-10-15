var divBits = document.getElementById('desplazamiento_bits');
desplazamientoBits();
function desplazamientoBits() {
    var texto = '<ul>';
    texto = "<li>125 / 8 = 125 >> 3 = ".concat(125 >> 3, "</li>");
    texto += "<li>40 x 4 = 40 << 2 = ".concat(40 << 2, "</li>");
    texto += "<li>25 / 2 = 25 >> 1 = ".concat(25 >> 1, "</li>");
    texto += "<li>10 x 16 = 10 << 4 = ".concat(10 << 4, "</li>");
    texto += '</ul>';
    divBits.innerHTML = texto;
}
