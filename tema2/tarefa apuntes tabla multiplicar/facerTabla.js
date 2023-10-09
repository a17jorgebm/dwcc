const mostrarTabla = () => {
    this.event.preventDefault(); //senon ao facer submit recargase a pagina
    const numero = Number(document.getElementById('numeroIntroducido').value);
    if (numero >= 0 || numero <=10 ){
        const divTabla=document.getElementById('tabla');
        let html=`<h2>Tabla de multiplicar del ${numero}</h2>`;
        html += '<ul>';
        for (let i=0; i <= 10; i++){
            html+=`<li> ${numero} * ${i} = ${numero * i}</li>`;
        }
        html += '</ul>';
        divTabla.innerHTML=html;
    }else{
        alert('El numero introducido tiene que ser entre 0 y 10')
        document.getElementById('numeroIntroducido').value='';
    }
}