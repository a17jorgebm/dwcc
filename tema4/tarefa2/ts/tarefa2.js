var _this = this;
var Disco = /** @class */ (function () {
    function Disco(nome, grupo, ano, tipo, prestado) {
        this._nome = nome;
        this._grupo = grupo;
        this._ano = ano;
        this._tipo = tipo;
        this._prestado = prestado;
    }
    Disco.prototype.cargaDatos = function (nome, grupo, ano, tipo, prestado) {
        this._nome = nome;
        this._grupo = grupo;
        this._ano = ano;
        this._tipo = tipo;
        this._prestado = prestado;
    };
    Disco.prototype.verInfo = function () {
        return "\n        Nombre: ".concat(this._nome, "\n\n        Grupo: ").concat(this._grupo, "\n\n        A\u00F1o: ").concat(this._ano, "\n\n        Tipo: ").concat(this._tipo, "\n\n        Prestado: ").concat(this._prestado ? 'Si' : 'No', "\n        ");
    };
    Object.defineProperty(Disco.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disco.prototype, "grupo", {
        get: function () {
            return this._grupo;
        },
        set: function (value) {
            this._grupo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disco.prototype, "ano", {
        get: function () {
            return this._ano;
        },
        set: function (value) {
            this._ano = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disco.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Disco.prototype, "prestado", {
        get: function () {
            return this._prestado;
        },
        set: function (value) {
            this._prestado = value;
        },
        enumerable: false,
        configurable: true
    });
    return Disco;
}());
var coleccion = {
    discos: null,
    engadirDisco: function (disco) { _this.discos.push(disco); },
    engadirDiscos: function (discos) { _this.discos = discos; },
    verDiscos: function () {
        if (_this.discos === null) {
            console.log('No hay discos en la coleccion');
        }
        else {
            _this.discos.forEach(function (disco, i) {
                console.log('-------- Disco ' + ++i + ' --------');
                console.log(disco.verInfo());
            });
        }
    }
};
var disco = new Disco('The Dark Side Of The Moon', 'Pink Floid', 1973, 'rock', false);
var disco2 = new Disco('1989', 'Taylor Swift', 2023, 'pop', true);
var disco3 = new Disco('The Wall', 'Pink Floid', 1979, 'rock', false);
var disco4 = new Disco('Parachutes', 'ColdPlay', 2000, 'pop', true);
coleccion.engadirDiscos([disco, disco2, disco3, disco4]);
coleccion.verDiscos();
