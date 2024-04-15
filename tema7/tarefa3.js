$(()=>{
    $("#datos-usuario").hide()
    recogerUsuarios()
    recogerAlbums()
})

function recogerUsuarios(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/users',
        type: 'GET',
        async: true,
        success: (respuesta) => {
            let usuarios = respuesta.map(({username: nomeUsuario,id}) => ({nomeUsuario,id}))
            crearListaUsuarios(usuarios)
        }
    })
}

function crearListaUsuarios(usuarios){
    let lista=$("#lista")
    for(const{
        nomeUsuario,
        id
    } of usuarios){
        let elementoNome=document.createElement('li')
        elementoNome.innerText=nomeUsuario
        elementoNome.id='usr-'+id
        elementoNome.classList.add('usuarios-lista')
        lista.append(elementoNome)
    }

    lista.click((event)=>{
        let elemento=event.target
        if(elemento.tagName==='LI'){
            cargaDatosUsuario(elemento.id.split('-')[1])
        }
    })
}

function cargaDatosUsuario(id){
    let divDatos=$("#datos-usuario")
    divDatos.html("Cargando datos del usuario...")
    divDatos.show()
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/'+id,
        type: 'GET',
        async: true,
        success: (respuesta) =>{
            mostrarDatosUsuario(respuesta)
        },
        error: (objetoError,mensaje,codigoError) => {
            mostrarError(objetoError,divDatos)
        }
    })

    const mostrarDatosUsuario= (usuario) => {
        //desestructuracion de los datos del usuario para poder mostrarlos
        let {
            id,name,username,email,phone,website,
            address: {
                city,
                street,
                suite,
                zipcode,
                geo: {
                    lat,
                    lng
                }
            },
            company: {
                bs: companyBs,
                catchPhrase: companyCatchPhrase,
                name: companyName
            }
        }=usuario

        let elementoId=$("<p>").html('<b>Id</b>: '+id)
        let elementoName=$("<p>").html('<b>Nombre</b>: '+ name)
        let elementoUserName=$("<p>").html('<b>Nombre de usuario</b>: '+username)
        let elementoEmail=$("<p>").html('<b>Email</b>: '+email)
        let elementoPhone=$("<p>").html('<b>Telefono</b>: '+phone)
        let elementoWebsite=$("<p>").html('<b>Pagina web</b>: '+website)
        let elementoCompany=$("<p>").html('<b>Compañia</b>:')
        let elementoAddress=$("<p>").html('<b>Dirección</b>:')

        //completamos los datos de compañia
        let listaDatosEmpresa=$("<ul>")
        listaDatosEmpresa.append($("<li>").html("<b>BS</b>: "+companyBs))
        listaDatosEmpresa.append($("<li>").html("<b>Frases gancho</b>: "+companyCatchPhrase))
        listaDatosEmpresa.append($("<li>").html("<b>Nombre</b>: "+companyName))
        elementoCompany.append(listaDatosEmpresa)

        //Direccion///////
        let listaDatosDireccion=$("<ul>")
        listaDatosDireccion.append($("<li>").html("<b>Ciudad</b>: "+city))
        listaDatosDireccion.append($("<li>").html("<b>Calle</b>: "+street))
        listaDatosDireccion.append($("<li>").html("<b>Número</b>: "+suite))
        listaDatosDireccion.append($("<li>").html("<b>CP</b>: "+zipcode))
        listaDatosDireccion.append($("<li>").html("<b>Geolocalizacion</b>: "+zipcode))
        //otra sublista para la geolocalizacion
        let listaDatosGeoLocalizacion=$("<ul>")
        listaDatosGeoLocalizacion.append($("<li>").html("<b>Latitud</b>: "+lat))
        listaDatosGeoLocalizacion.append($("<li>").html("<b>Longitud</b>: "+lng))
        listaDatosDireccion.append(listaDatosGeoLocalizacion)

        elementoAddress.append(listaDatosDireccion)

        //lo incluimos todo en el div correspondiente
        divDatos.html('')
        divDatos.append($("<h4>").text("Datos del usuario:"))
        divDatos.append(elementoId,elementoName,elementoUserName,elementoEmail,elementoPhone,elementoWebsite,elementoCompany,elementoAddress)
        divDatos.addClass('success')
    }
}

function mostrarError(objetoError,divMostrarError){
    divMostrarError.html('')
    divMostrarError.append($('<h4>').text('Error'))
    divMostrarError.append($('<p>').text('Mensaje: '+objetoError.statusText))
    divMostrarError.append($('<p>').text('Codigo de error: '+objetoError.status))
    divMostrarError.addClass('error')
}

function recogerAlbums(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/albums/',
        method: 'GET',
        async: true,
        success: (response)=>{
            crearSelectorAlbums(response.map(({id: idAlbum,title: nomeAlbum})=>({idAlbum,nomeAlbum})))
        },
        error: (objetoError,mensajeError,codigoError)=>{
            mostrarError(objetoError,$('#selector-album'))
        }
    })
}

function crearSelectorAlbums(albums){
    let divSelector=$('#div-selector-album')
    let selectorAlbums=document.createElement('select')
    selectorAlbums.id='selector-albums'
    for(const{
        idAlbum,
        nomeAlbum
    } of albums){
        let opcion=document.createElement('option')
        opcion.id='album-'+idAlbum
        opcion.innerText=nomeAlbum
        opcion.value=idAlbum
        selectorAlbums.append(opcion)
    }

    divSelector.append(selectorAlbums)

    selectorAlbums.addEventListener('change',function(){
        cargarFotosAlbum(this.value)
    })
    //forzo el evento para que se muestren
    let eventoChange=new CustomEvent('change')
    selectorAlbums.dispatchEvent(eventoChange)
}

function cargarFotosAlbum(idAlbum){
    let divFotos=$('#fotos-album')
    divFotos.html('<p>Cargando imagenes...</p>')
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/albums/'+idAlbum+'/photos',
        method: 'GET',
        async: true,
        success: (response)=>{
            console.log(response)
            insertarImagenes(response.slice(0,3).map(({thumbnailUrl:link})=>(link)))
        },
        error: (objetoError,mensaje,codigo)=>{
            mostrarError(objetoError,divFotos)
        }
    })

    const insertarImagenes=(imagesLinks)=>{
        divFotos.html('')
        imagesLinks.forEach((link,i)=>{
            divFotos.append($('<img>').attr('src',link).attr('title','img-'+(i+1)))
        })
    }
}


