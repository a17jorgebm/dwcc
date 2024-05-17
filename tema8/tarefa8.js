const ConfiguracionAlicacion={
    data(){
        return {
            mensaxe: 'ola a todos',
            valor: 2,
            mostrar: true,
            tipoBoton: 'button',
            animales:[
                {nombre:'perro'},
                {nombre:'gato'},
                {nombre:'tortuga'},
                {nombre:'ballena'},
                {nombre:'pez'},
            ],
            divTransicionVisible: true,
            intervaloParaTransicion: null
        }
    },
    methods: {
        cambiarValorMostrarTexto: function(valor){
            this.mostrar=valor
        },
        cambiarVisibilidadTransicion: function(){
            this.divTransicionVisible=!this.divTransicionVisible
        },
        iniciarIntervalo: function(){
            this.intervaloParaTransicion=setInterval(this.cambiarVisibilidadTransicion,2000)
        },
        cerrarIntervalo: function(){
            clearInterval(this.intervaloParaTransicion)
        }
    },
    mounted(){
        this.iniciarIntervalo()
    },
    beforeDestroy(){
        this.cerrarIntervalo()
    }
}

const App=Vue.createApp(ConfiguracionAlicacion)