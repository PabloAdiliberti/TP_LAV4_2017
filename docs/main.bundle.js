webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Clase/Juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(nombre, jugador) {
        this.NombreDelJuego = nombre;
        this.Jugador = jugador;
    }
    return Juego;
}());

//# sourceMappingURL=Juego.js.map

/***/ }),

/***/ "../../../../../src/app/Clase/adivina.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Adivina; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Juego__ = __webpack_require__("../../../../../src/app/Clase/Juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Adivina = (function (_super) {
    __extends(Adivina, _super);
    function Adivina(nombre, jugador) {
        var _this = _super.call(this, nombre, jugador) || this;
        _this.intentos = 0;
        _this.Habilitado = true;
        _this.nombre = jugador;
        _this.NombreDelJuego = nombre;
        _this.NumeroSecreto = null;
        _this.Jugadores = new Array();
        var user = localStorage.getItem("JugadoresGuardadosA");
        var json = JSON.parse(user);
        if (json != null)
            _this.Jugadores = json;
        return _this;
    }
    Adivina.prototype.GenerarNuevo = function () {
        this.intentos = 0;
        this.Habilitado = false;
        this.NumeroIngresado = null;
        this.NumeroSecreto = Math.floor(Math.random() * 100 + 1);
        console.info("Numero: ", this.NumeroSecreto);
        this.Inicio = new Date().getTime();
        this.Gano = false;
    };
    Adivina.prototype.Verificar = function () {
        this.intentos++;
        if (this.NumeroIngresado == this.NumeroSecreto) {
            alert("Gano");
            this.NumeroIngresado = null;
            this.Gano = true;
            this.Fin = (new Date().getTime() - this.Inicio) / 1000;
            var persona = {
                Nombre: this.nombre,
                Tiempo: this.Fin,
                Gano: "Gano",
                Intentos: this.intentos,
                Juego: this.NombreDelJuego
            };
            this.Jugadores.push(persona);
            var JugadoresGuardados = JSON.stringify(this.Jugadores);
            localStorage.setItem("JugadoresGuardadosA", JugadoresGuardados);
        }
        else {
            alert("Intente denuevo");
            this.Gano = false;
            this.NumeroIngresado = null;
        }
    };
    return Adivina;
}(__WEBPACK_IMPORTED_MODULE_0__Juego__["a" /* Juego */]));

//# sourceMappingURL=adivina.js.map

/***/ }),

/***/ "../../../../../src/app/Clase/agilidad.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Agilidad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Juego__ = __webpack_require__("../../../../../src/app/Clase/Juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Agilidad = (function (_super) {
    __extends(Agilidad, _super);
    function Agilidad(nombre, jugador) {
        var _this = _super.call(this, nombre, jugador) || this;
        _this.Habilitado = true;
        _this.NombreDelJuego = "Agilidad aritmetica";
        _this.nombre = jugador;
        _this.Jugadores = new Array();
        var user = localStorage.getItem("JugadoresGuardadosAgilidad");
        var json = JSON.parse(user);
        return _this;
    }
    Agilidad.prototype.GenerarNuevo = function () {
        this.Habilitado = false;
        this.Resultado = null;
        this.Numero1 = Math.floor(Math.random() * 100 + 1);
        this.Numero2 = Math.floor(Math.random() * 100 + 1);
        switch (Math.floor(Math.random() * (5 - 1)) + 1) {
            case 1:
                this.Operador = "+";
                break;
            case 2:
                this.Operador = "-";
                break;
            case 3:
                this.Operador = "*";
                break;
            case 4:
                this.Operador = "/";
                break;
        }
        this.Inicio = new Date().getTime();
    };
    Agilidad.prototype.Verificar = function () {
        switch (this.Operador) {
            case "+":
                this.ResultadoReal = this.Numero1 + this.Numero2;
                break;
            case "-":
                this.ResultadoReal = this.Numero1 - this.Numero2;
                break;
            case "*":
                this.ResultadoReal = this.Numero1 * this.Numero2;
                break;
            case "/":
                this.ResultadoReal = this.Numero1 / this.Numero2;
                break;
        }
        if (this.ResultadoReal == this.Resultado) {
            this.Gano = true;
            this.Fin = Math.floor((new Date().getTime() - this.Inicio) / 1000);
            var persona = {
                Nombre: this.nombre,
                Tiempo: this.Fin,
                Gano: "Gano",
                Juego: this.NombreDelJuego
            };
            this.Jugadores.push(persona);
            var JugadoresGuardados = JSON.stringify(this.Jugadores);
            localStorage.setItem("JugadoresGuardadosAgilidad", JugadoresGuardados);
        }
        else
            this.Gano = false;
    };
    return Agilidad;
}(__WEBPACK_IMPORTED_MODULE_0__Juego__["a" /* Juego */]));

//# sourceMappingURL=agilidad.js.map

/***/ }),

/***/ "../../../../../src/app/Clase/anagrama.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anagrama; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Juego__ = __webpack_require__("../../../../../src/app/Clase/Juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Anagrama = (function (_super) {
    __extends(Anagrama, _super);
    function Anagrama(nombre, jugador) {
        var _this = _super.call(this, nombre, jugador) || this;
        _this.nombre = jugador;
        _this.Habilitado = true;
        _this.NombreDelJuego = "Anagrama";
        _this.Jugadores = new Array();
        _this.respuesta = "Eduardo";
        _this.respuestaArray = _this.respuesta.split('');
        _this.Display = "Deudora";
        var user = localStorage.getItem("JugadoresGuardadosAnagrama");
        var json = JSON.parse(user);
        if (json != null)
            _this.Jugadores = json;
        return _this;
    }
    Anagrama.prototype.Verificar = function () {
        var respuestaUsuario = this.ingresado.toUpperCase();
        if (this.respuesta == respuestaUsuario) {
            if (respuestaUsuario == "NICOLAS") {
                alert("Gano");
                this.Fin = (new Date().getTime() - this.Inicio) / 1000;
                this.ingresado = "";
                var persona = {
                    Nombre: this.nombre,
                    Tiempo: this.Fin,
                    Gano: "Gano",
                    Juego: this.NombreDelJuego
                };
                this.Jugadores.push(persona);
                var JugadoresGuardados = JSON.stringify(this.Jugadores);
                localStorage.setItem("JugadoresGuardadosAnagrama", JugadoresGuardados);
            }
            this.ingresado = "";
            this.Siguiente();
        }
        else {
            alert("No es la respuesta, intenta denuevo.");
            this.ingresado = "";
        }
    };
    Anagrama.prototype.Siguiente = function () {
        switch (this.Display) {
            case "Deudora":
                this.Display = "Matar";
                this.respuesta = "MARTA";
                break;
            case "Matar":
                this.Display = "camino";
                this.respuesta = "MONICA";
                break;
            case "camino":
                this.Display = "riesgo";
                this.respuesta = "SERGIO";
                break;
            case "riesgo":
                this.Display = "colinas";
                this.respuesta = "NICOLAS";
                break;
            default:
                break;
        }
    };
    Anagrama.prototype.GenerarNuevo = function () {
        this.Habilitado = false;
        this.respuesta = "EDUARDO";
        this.respuestaArray = this.respuesta.split('');
        this.Display = "Deudora";
        this.Inicio = new Date().getTime();
    };
    return Anagrama;
}(__WEBPACK_IMPORTED_MODULE_0__Juego__["a" /* Juego */]));

//# sourceMappingURL=anagrama.js.map

/***/ }),

/***/ "../../../../../src/app/Clase/juego.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Juego; });
var Juego = (function () {
    function Juego(nombre, jugador) {
        this.NombreDelJuego = nombre;
        this.Jugador = jugador;
    }
    return Juego;
}());

//# sourceMappingURL=juego.js.map

/***/ }),

/***/ "../../../../../src/app/Clase/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Login = (function () {
    function Login(route, router, _auth) {
        this.route = route;
        this.router = router;
        this._auth = _auth;
        this.tipoUser = 'null';
        this.Mensaje = "";
        this.ingreso = false;
    }
    Login.prototype.Entrar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, persona, personaAGuardar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._auth.auth.signInWithEmailAndPassword(this.usuario, this.clave)
                            .catch(function (error) {
                            alert(error.message);
                            //console.log(error);
                        })];
                    case 1:
                        result = _a.sent();
                        persona = {
                            nombre: this.usuario
                        };
                        personaAGuardar = JSON.stringify(persona);
                        localStorage.setItem("miUsuario", personaAGuardar);
                        if (result != undefined) {
                            this.router.navigate(['/menu']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.registrar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._auth.auth.createUserWithEmailAndPassword(this.usuario, this.clave)];
                    case 1:
                        result = _a.sent();
                        this.Mensaje = this.usuario + " Fue ingresado Exitosamente!";
                        this.ingreso = true;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.ingreso = false;
                        console.error(e_1);
                        this.Mensaje = e_1;
                        return [3 /*break*/, 3];
                    case 3:
                        this.router.navigate(['/Registrar']);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ "../../../../../src/app/Clase/memoTest.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoTest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Juego__ = __webpack_require__("../../../../../src/app/Clase/Juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MemoTest = (function (_super) {
    __extends(MemoTest, _super);
    function MemoTest(nombre, jugador) {
        var _this = _super.call(this, nombre, jugador) || this;
        _this.Habilitado = true;
        _this.nombre = jugador;
        _this.Jugadores = new Array();
        var user = localStorage.getItem("JugadoresGuardadosTra");
        var json = JSON.parse(user);
        if (json != null)
            _this.Jugadores = json;
        _this.NombreDelJuego = "Traductor";
        _this.myPhotoURL = "../assets/perro.jpg";
        _this.respuesta = "DOG";
        _this.respuestaArray = _this.respuesta.split('');
        _this.ayuda = new Array(_this.respuesta.length);
        for (var index = 0; index < _this.respuesta.length; index++) {
            _this.ayuda[index] = "_";
        }
        _this.foto = "";
        _this.largo = 0;
        return _this;
    }
    MemoTest.prototype.Verificar = function () {
        var respuestaUsuario = this.foto.toUpperCase();
        if (this.respuesta == respuestaUsuario) {
            if (respuestaUsuario == "APPLE") {
                this.Fin = Math.floor((new Date().getTime() - this.Inicio) / 1000);
                alert("gano en :" + this.Fin + "Segundos");
                var persona = {
                    Nombre: this.nombre,
                    Tiempo: this.Fin,
                    Gano: "Gano",
                    Juego: this.NombreDelJuego
                };
                this.Jugadores.push(persona);
                var JugadoresGuardados = JSON.stringify(this.Jugadores);
                localStorage.setItem("JugadoresGuardadosTra", JugadoresGuardados);
            }
            this.foto = "";
            this.Siguiente();
        }
        else {
            alert("No es la respuesta, intenta denuevo.");
            this.foto = "";
        }
    };
    MemoTest.prototype.Ayuda = function () {
        this.largo = Math.floor(Math.random() * this.respuesta.length);
        if (this.ayuda[this.largo] != this.respuestaArray[this.largo])
            this.ayuda[this.largo] = this.respuestaArray[this.largo];
        else
            this.Ayuda();
    };
    MemoTest.prototype.Siguiente = function () {
        this.ayuda = new Array(this.respuesta.length);
        for (var index = 0; index < this.respuesta.length; index++) {
            this.ayuda[index] = "_";
        }
        switch (this.myPhotoURL) {
            case "../assets/perro.jpg":
                this.myPhotoURL = "../assets/casa.jpg";
                this.respuesta = "HOUSE";
                this.respuestaArray = this.respuesta.split('');
                this.ayuda = new Array(this.respuesta.length);
                for (var index = 0; index < this.respuesta.length; index++) {
                    this.ayuda[index] = "_";
                }
                break;
            case "../assets/casa.jpg":
                this.myPhotoURL = "../assets/estrella.jpg";
                this.respuesta = "STAR";
                this.respuestaArray = this.respuesta.split('');
                this.ayuda = new Array(this.respuesta.length);
                for (var index = 0; index < this.respuesta.length; index++) {
                    this.ayuda[index] = "_";
                }
                break;
            case "../assets/estrella.jpg":
                this.myPhotoURL = "../assets/manzana.jpg";
                this.respuesta = "APPLE";
                this.respuestaArray = this.respuesta.split('');
                this.ayuda = new Array(this.respuesta.length);
                for (var index = 0; index < this.respuesta.length; index++) {
                    this.ayuda[index] = "_";
                }
                break;
            default:
                break;
        }
    };
    MemoTest.prototype.Nuevo = function () {
        alert("Inicio del juego");
        this.Inicio = new Date().getTime();
        this.Habilitado = false;
        this.myPhotoURL = "../assets/perro.jpg";
        this.respuesta = "DOG";
        this.respuestaArray = this.respuesta.split('');
        this.ayuda = new Array(this.respuesta.length);
        for (var index = 0; index < this.respuesta.length; index++) {
            this.ayuda[index] = "_";
        }
        this.foto = "";
    };
    return MemoTest;
}(__WEBPACK_IMPORTED_MODULE_0__Juego__["a" /* Juego */]));

//# sourceMappingURL=memoTest.js.map

/***/ }),

/***/ "../../../../../src/app/Clase/piedraPapelTijera.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PPT; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Juego__ = __webpack_require__("../../../../../src/app/Clase/Juego.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PPT = (function (_super) {
    __extends(PPT, _super);
    function PPT(nombre, jugador) {
        var _this = _super.call(this, nombre, jugador) || this;
        _this.nombre = jugador;
        var user = localStorage.getItem("JugadoresGuardadosPPT");
        var json = JSON.parse(user);
        _this.Jugadores = new Array();
        if (json != null)
            _this.Jugadores = json;
        _this.NombreDelJuego = "Piedra, papel o tijera";
        _this.puntosU = 0;
        _this.puntosM = 0;
        _this.empate = 0;
        return _this;
    }
    PPT.prototype.OpcionElegida = function (opcion) {
        switch (opcion) {
            case "piedra":
                this.elijioUsuario = "../assets/piedra.jpg";
                this.ElijeMaquina();
                this.QuienGano(opcion);
                break;
            case "papel":
                this.elijioUsuario = "../assets/papel.jpg";
                this.ElijeMaquina();
                this.QuienGano(opcion);
                break;
            case "tijera":
                this.elijioUsuario = "../assets/tijera.jpg";
                this.ElijeMaquina();
                this.QuienGano(opcion);
                break;
            default:
                break;
        }
    };
    PPT.prototype.ElijeMaquina = function () {
        var numero = Math.floor(Math.random() * 3 + 1);
        //  alert("numero " + numero);
        switch (numero) {
            case 1:
                this.elijioMaquina = "../assets/piedra.jpg";
                this.maquina = "piedra";
                break;
            case 2:
                this.elijioMaquina = "../assets/papel.jpg";
                this.maquina = "papel";
                break;
            case 3:
                this.elijioMaquina = "../assets/tijera.jpg";
                this.maquina = "tijera";
                break;
            default:
                break;
        }
    };
    PPT.prototype.QuienGano = function (usuario) {
        //  alert(this.maquina);
        switch (usuario) {
            case "piedra":
                if (this.maquina == "piedra")
                    this.empate++;
                if (this.maquina == "papel")
                    this.puntosM++;
                if (this.maquina == "tijera")
                    this.puntosU++;
                this.VerificarGano();
                break;
            case "papel":
                if (this.maquina == "piedra")
                    this.puntosU++;
                if (this.maquina == "papel")
                    this.empate++;
                if (this.maquina == "tijera")
                    this.puntosM++;
                this.VerificarGano();
                break;
            case "tijera":
                if (this.maquina == "piedra")
                    this.puntosM++;
                if (this.maquina == "papel")
                    this.puntosU++;
                if (this.maquina == "tijera")
                    this.empate++;
                this.VerificarGano();
                break;
            default:
                break;
        }
    };
    PPT.prototype.GenerarNuevo = function () {
        alert("¡Iniciemos! eliga una opcion");
        this.puntosU = 0;
        this.puntosM = 0;
        this.empate = 0;
    };
    PPT.prototype.VerificarGano = function () {
        if (this.puntosU == 7) {
            alert("Gano");
            var persona = {
                Nombre: this.nombre,
                Gano: "Gano",
                Juego: this.NombreDelJuego
            };
            this.Jugadores.push(persona);
            var JugadoresGuardados = JSON.stringify(this.Jugadores);
            localStorage.setItem("JugadoresGuardadosPPT", JugadoresGuardados);
            this.GenerarNuevo();
        }
        if (this.puntosM == 7) {
            alert("Perdio");
            this.GenerarNuevo();
        }
    };
    return PPT;
}(__WEBPACK_IMPORTED_MODULE_0__Juego__["a" /* Juego */]));

//# sourceMappingURL=piedraPapelTijera.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_adivina_adivina_component__ = __webpack_require__("../../../../../src/app/componentes/adivina/adivina.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_agilidad_component__ = __webpack_require__("../../../../../src/app/componentes/agilidad/agilidad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_menu_menu_component__ = __webpack_require__("../../../../../src/app/componentes/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_login_login_component__ = __webpack_require__("../../../../../src/app/componentes/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_listado_listado_component__ = __webpack_require__("../../../../../src/app/componentes/listado/listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_menu_de_listado_menu_de_listado_component__ = __webpack_require__("../../../../../src/app/componentes/menu-de-listado/menu-de-listado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__servicios_listado_service__ = __webpack_require__("../../../../../src/app/servicios/listado.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_estadistica_adivina_estadistica_adivina_component__ = __webpack_require__("../../../../../src/app/componentes/estadistica-adivina/estadistica-adivina.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_estadistica_agilidad_estadistica_agilidad_component__ = __webpack_require__("../../../../../src/app/componentes/estadistica-agilidad/estadistica-agilidad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_registrar_registrar_component__ = __webpack_require__("../../../../../src/app/componentes/registrar/registrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_memotest_memotest_component__ = __webpack_require__("../../../../../src/app/componentes/memotest/memotest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__servicios_store_service__ = __webpack_require__("../../../../../src/app/servicios/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_anagrama_anagrama_component__ = __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_piedra_papel_tijera_piedra_papel_tijera_component__ = __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_menu_opciones_menu_opciones_component__ = __webpack_require__("../../../../../src/app/componentes/menu-opciones/menu-opciones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_menu_barra_menu_barra_component__ = __webpack_require__("../../../../../src/app/componentes/menu-barra/menu-barra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_quien_soy_quien_soy_component__ = __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var miRuteo = [{ path: 'adivina', component: __WEBPACK_IMPORTED_MODULE_6__componentes_adivina_adivina_component__["a" /* AdivinaComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__componentes_login_login_component__["a" /* LoginComponent */] },
    { path: 'agilidad', component: __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_agilidad_component__["a" /* AgilidadComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_9__componentes_menu_menu_component__["a" /* MenuComponent */] },
    { path: 'listado', component: __WEBPACK_IMPORTED_MODULE_12__componentes_listado_listado_component__["a" /* ListadoComponent */] },
    { path: 'Registrar', component: __WEBPACK_IMPORTED_MODULE_17__componentes_registrar_registrar_component__["a" /* RegistrarComponent */] },
    { path: 'estadisticaAdivina', component: __WEBPACK_IMPORTED_MODULE_15__componentes_estadistica_adivina_estadistica_adivina_component__["a" /* EstadisticaAdivinaComponent */] },
    { path: 'estadisticaAgilidad', component: __WEBPACK_IMPORTED_MODULE_16__componentes_estadistica_agilidad_estadistica_agilidad_component__["a" /* EstadisticaAgilidadComponent */] },
    { path: 'memotest', component: __WEBPACK_IMPORTED_MODULE_18__componentes_memotest_memotest_component__["a" /* MemotestComponent */] },
    { path: 'anagrama', component: __WEBPACK_IMPORTED_MODULE_21__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */] },
    { path: 'PPT', component: __WEBPACK_IMPORTED_MODULE_22__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */] },
    { path: 'quienSoy', component: __WEBPACK_IMPORTED_MODULE_25__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */] },
    { path: 'menuDeListado', component: __WEBPACK_IMPORTED_MODULE_13__componentes_menu_de_listado_menu_de_listado_component__["a" /* MenuDeListadoComponent */] }];
var firebaseConfig = {
    apiKey: "AIzaSyDxMQdYSpRKuZgh7L_mOohzuSqN6utZb0k",
    authDomain: "appsaladejuegos.firebaseapp.com",
    databaseURL: "https://appsaladejuegos.firebaseio.com",
    projectId: "appsaladejuegos",
    storageBucket: "",
    messagingSenderId: "464290374032"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__componentes_adivina_adivina_component__["a" /* AdivinaComponent */],
            __WEBPACK_IMPORTED_MODULE_8__componentes_agilidad_agilidad_component__["a" /* AgilidadComponent */],
            __WEBPACK_IMPORTED_MODULE_9__componentes_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__componentes_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__componentes_listado_listado_component__["a" /* ListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__componentes_menu_de_listado_menu_de_listado_component__["a" /* MenuDeListadoComponent */],
            __WEBPACK_IMPORTED_MODULE_15__componentes_estadistica_adivina_estadistica_adivina_component__["a" /* EstadisticaAdivinaComponent */],
            __WEBPACK_IMPORTED_MODULE_16__componentes_estadistica_agilidad_estadistica_agilidad_component__["a" /* EstadisticaAgilidadComponent */],
            __WEBPACK_IMPORTED_MODULE_17__componentes_registrar_registrar_component__["a" /* RegistrarComponent */],
            __WEBPACK_IMPORTED_MODULE_18__componentes_memotest_memotest_component__["a" /* MemotestComponent */],
            __WEBPACK_IMPORTED_MODULE_21__componentes_anagrama_anagrama_component__["a" /* AnagramaComponent */],
            __WEBPACK_IMPORTED_MODULE_22__componentes_piedra_papel_tijera_piedra_papel_tijera_component__["a" /* PiedraPapelTijeraComponent */],
            __WEBPACK_IMPORTED_MODULE_23__componentes_menu_opciones_menu_opciones_component__["a" /* MenuOpcionesComponent */],
            __WEBPACK_IMPORTED_MODULE_24__componentes_menu_barra_menu_barra_component__["a" /* MenuBarraComponent */],
            __WEBPACK_IMPORTED_MODULE_25__componentes_quien_soy_quien_soy_component__["a" /* QuienSoyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */].forRoot(miRuteo),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_20_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'my-app',
                storageType: 'localStorage'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__servicios_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_14__servicios_listado_service__["a" /* ListadoService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/adivina/adivina.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base CSS */\r\n\r\nbody{\r\n     background:url('http://ghostcode.in/wp-content/uploads/2016/09/super_hero_whatsapp_background_by_x_ama-d8fr7iz.jpg'); \r\n    /* padding:50px; */\r\n    font-family: cursive;\r\n  }\r\n\r\n.alignleft {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.alignright {\r\n    float: right;\r\n    margin-left: 15px;\r\n}\r\n.aligncenter {\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n}\r\na:focus { outline: 0 solid }\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.fix { overflow: hidden }\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 0 0 15px;\r\n    font-weight: 700;\r\n}\r\nhtml,\r\nbody { height: 100% }\r\n\r\na {\r\n    transition: 0.3s;\r\n    color: #333;\r\n}\r\na:hover { text-decoration: none }\r\n\r\n\r\n\r\n.search-box{margin:80px auto;position:absolute;}\r\n.caption{margin-bottom:50px;}\r\n.loginForm input[type=text], .loginForm input[type=password]{\r\n\tmargin-bottom:10px;\r\n}\r\n.loginForm input[type=submit]{\r\n\tbackground:#fb044a;\r\n\tcolor:#fff;\r\n    font-weight:700;\r\n    margin-bottom:10px;\r\n    padding: 5px 100px;\r\n}\r\n.loginForm input[type=submit]:focus{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\r\n\t\r\n}\r\n.loginForm input[type=submit]:hover{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\t\r\n}\r\n\r\n#pswd_info {\r\n\tbackground: #dfdfdf none repeat scroll 0 0;\r\n\tcolor: #fff;\r\n\tleft: 20px;\r\n\tposition: absolute;\r\n\ttop: 115px;\r\n}\r\n#pswd_info h4{\r\n    background: black none repeat scroll 0 0;\r\n    display: block;\r\n    font-size: 14px;\r\n    letter-spacing: 0;\r\n    padding: 17px 0;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n#pswd_info ul {\r\n    list-style: outside none none;\r\n}\r\n#pswd_info ul li {\r\n   padding: 10px 45px;\r\n}\r\n\r\n.valid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/vq43s2wib/valid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: green;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n.invalid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/olmaj1p8z/invalid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: red;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n\r\n#pswd_info::before {\r\n    background: #dfdfdf none repeat scroll 0 0;\r\n    content: \"\";\r\n    height: 25px;\r\n    left: -13px;\r\n    margin-top: -12.5px;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    width: 25px;\r\n}\r\n#pswd_info {\r\n    display:none;\r\n}\r\n\r\n\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\nth {\r\n    height: 50px;\r\n}\r\ntd {\r\n    height: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/adivina/adivina.component.html":
/***/ (function(module, exports) {

module.exports = "<body >\n    <app-menu-barra></app-menu-barra>\n<div>\n  <!-- <br><br><h3>{{miJuego.NombreDelJuego}} </h3><br><br> -->\n    <form class=\"loginForm\">\n      <div >\n\n              <table>\n                <tr>\n                  <th></th>\n                  <th></th>\n                  <th><h3 align=\"center\">{{miJuego.NombreDelJuego}} </h3></th>\n                  <th></th>\n                  <th> <input class=\"miboton\" type=\"image\" style='width:120px'  (click)=\"miJuego.GenerarNuevo()\"  img src=\"assets/Nuevo.png\"></th>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td></td>\n                  <td><div [hidden]=\"miJuego.Habilitado\"><input type=\"text\"  class=\"form-control\"  name=\"numero\" [(ngModel)]=\"miJuego.NumeroIngresado\" placeholder=\"Ingrase un numero\"/></div></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n                <tr>\n                  <td></td>\n                  <td></td>\n                  <td><div align=\"center\" [hidden]=\"miJuego.Habilitado\"><input class=\"miboton\" type=\"image\" align=\"center\" style='width:120px'  (click)=\"miJuego.Verificar()\"  img src=\"assets/Verificar.png\"></div></td>\n                  <td></td>\n                  <td></td> \n                </tr>\n                <tr>\n                    <td>  <input class=\"miboton\" type=\"image\" style='width:120px;height:160px'  (click)=\"Salir()\"  img src=\"assets/Salir.png\">\t\t</td>\n                  <td></td>\n                  <td>      {{miJuego.NumeroSecreto}}  \n                    <p [hidden]=\"!miJuego.Gano\">Ganó</p>\n                    <p [hidden]=\"miJuego.Gano\">No Ganó</p>\n                    <p [hidden]=\"!miJuego.Gano\">Tardaste {{miJuego.Fin}} Segundos en adivinar.</p></td>\n                  <td></td>\n                  <td></td>\n                </tr>\n              </table>\n        </div>\n      </form>\n      <br>\n      <br>\n      <br>\n\n\n      <table class=\"table table-condensed\">\n        <thead>\n          <tr>\n              <th>Jugador</th>\n              <th>Gano</th>\n              <th>Tiempo</th>\n              <th>Intentos</th>\n              <th>Juego</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let juego of miJuego.Jugadores\">\n            <td>{{juego.Nombre}} </td>\n            <td>{{juego.Gano}} </td> \n            <td>{{juego.Tiempo}} </td> \n            <td>{{juego.Intentos}} </td> \n            <td>{{juego.Juego}} </td> \n          </tr>\n        \n        </tbody>\n      </table>\n</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/componentes/adivina/adivina.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdivinaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Clase_adivina__ = __webpack_require__("../../../../../src/app/Clase/adivina.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdivinaComponent = (function () {
    function AdivinaComponent(localStorageService, router) {
        this.localStorageService = localStorageService;
        this.router = router;
        var user = localStorage.getItem("miUsuario");
        var personaGuardada = JSON.parse(user);
        this.miJuego = new __WEBPACK_IMPORTED_MODULE_1__Clase_adivina__["a" /* Adivina */]("Adivina el numero", personaGuardada.nombre);
    }
    AdivinaComponent.prototype.ngOnInit = function () {
    };
    AdivinaComponent.prototype.Salir = function () {
        this.router.navigate(['/menu']);
    };
    return AdivinaComponent;
}());
AdivinaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-adivina',
        template: __webpack_require__("../../../../../src/app/componentes/adivina/adivina.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/adivina/adivina.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdivinaComponent);

var _a, _b;
//# sourceMappingURL=adivina.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad/agilidad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base CSS */\r\nbody{\r\n    background:url('http://ghostcode.in/wp-content/uploads/2016/09/super_hero_whatsapp_background_by_x_ama-d8fr7iz.jpg'); \r\n   /* padding:50px; */\r\n   font-family: cursive;\r\n }\r\n.alignleft {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.alignright {\r\n    float: right;\r\n    margin-left: 15px;\r\n}\r\n.aligncenter {\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n}\r\na:focus { outline: 0 solid }\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.fix { overflow: hidden }\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 0 0 15px;\r\n    font-weight: 700;\r\n}\r\nhtml,\r\nbody { height: 100% }\r\n\r\na {\r\n    transition: 0.3s;\r\n    color: #333;\r\n}\r\na:hover { text-decoration: none }\r\n\r\n\r\n\r\n.search-box{margin:80px auto;position:absolute;}\r\n.caption{margin-bottom:50px;}\r\n.loginForm input[type=text], .loginForm input[type=password]{\r\n    margin-bottom:10px;\r\n    \r\n}\r\n.loginForm input[type=submit]{\r\n\tbackground:#fb044a;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\r\n    margin-bottom:10px;\r\n    padding: 5px 100px;\r\n  \r\n}\r\n.loginForm input[type=submit]:focus{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\r\n\t\r\n}\r\n.loginForm input[type=submit]:hover{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\t\r\n}\r\n\r\n#pswd_info {\r\n\tbackground: #dfdfdf none repeat scroll 0 0;\r\n\tcolor: #fff;\r\n\tleft: 20px;\r\n\tposition: absolute;\r\n\ttop: 115px;\r\n}\r\n#pswd_info h4{\r\n    background: black none repeat scroll 0 0;\r\n    display: block;\r\n    font-size: 14px;\r\n    letter-spacing: 0;\r\n    padding: 17px 0;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n#pswd_info ul {\r\n    list-style: outside none none;\r\n}\r\n#pswd_info ul li {\r\n   padding: 10px 45px;\r\n}\r\n\r\n.valid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/vq43s2wib/valid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: green;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n.invalid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/olmaj1p8z/invalid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: red;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n\r\n#pswd_info::before {\r\n    background: #dfdfdf none repeat scroll 0 0;\r\n    content: \"\";\r\n    height: 25px;\r\n    left: -13px;\r\n    margin-top: -12.5px;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    width: 25px;\r\n}\r\n#pswd_info {\r\n    display:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad/agilidad.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->\n\n<body style=\"background-color:#FF0000;\">\n  <div>\n<form class=\"loginForm\">\n  <div >\n          <table WIDTH=100%>\n            <tr>\n              <th></th>\n              <th></th>\n              <th><h1 align=\"center\">{{miJuego.NombreDelJuego}}</h1>\n                  <h3>Resuelva la operacion</h3></th>\n              <th></th>\n              <th> <input class=\"miboton\" type=\"image\" style='width:120px'  (click)=\"miJuego.GenerarNuevo()\"  img src=\"assets/Nuevo.png\"></th>\n            </tr>\n            <tr>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td></td>\n              <td></td>\n              <td><div [hidden]=\"miJuego.Habilitado\"><br><br><input type=\"text\" name=\"numero\" class=\"form-control\" [(ngModel)]=\"miJuego.Numero1\" >\n                <br><br><input type=\"text\" name=\"numero1\" class=\"form-control\" [(ngModel)]=\"miJuego.Operador\" >\n                <br><br><input type=\"text\" name=\"numero2\" class=\"form-control\" [(ngModel)]=\"miJuego.Numero2\" >\n                <br><br><input type=\"text\" name=\"numero3\" class=\"form-control\" [(ngModel)]=\"miJuego.Resultado\" >\n                <p [hidden]=\"!miJuego.Gano\">Ganó</p>\n                <p [hidden]=\"miJuego.Gano\">No Ganó</p>  \n                <p [hidden]=\"!miJuego.Gano\">Tardaste {{miJuego.Fin}} Segundo en adivinar.</p></div></td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr>\n              <td></td>\n              <td></td>\n              <td><div align=\"center\" [hidden]=\"miJuego.Habilitado\"><input class=\"miboton\" type=\"image\" align=\"center\" style='width:120px'  (click)=\"miJuego.Verificar()\"  img src=\"assets/Verificar.png\"></div></td>\n              <td></td>\n              <td></td> \n            </tr>\n            <tr>\n                <td><input class=\"miboton\" type=\"image\" style='width:120px;height:160px'  (click)=\"Salir()\"  img src=\"assets/Salir.png\">\t\t</td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n            </tr>\n          </table>\n    </div>\n  </form>\n\n  <table class=\"table table-condensed\">\n    <thead>\n      <tr>\n          <th>Jugador</th>\n          <th>Gano</th>\n          <th>Tiempo</th>\n          <th>Juego</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let juego of miJuego.Jugadores\">\n        <td>{{juego.Nombre}} </td>\n        <td>{{juego.Gano}} </td> \n        <td>{{juego.Tiempo}} </td> \n        <td>{{juego.Juego}} </td> \n      </tr>\n    \n    </tbody>\n  </table>\n</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/componentes/agilidad/agilidad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgilidadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Clase_agilidad__ = __webpack_require__("../../../../../src/app/Clase/agilidad.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgilidadComponent = (function () {
    function AgilidadComponent(router) {
        this.router = router;
        var user = localStorage.getItem("miUsuario");
        var personaGuardada = JSON.parse(user);
        this.miJuego = new __WEBPACK_IMPORTED_MODULE_1__Clase_agilidad__["a" /* Agilidad */]("Agilidad aritmetica", personaGuardada.nombre);
    }
    AgilidadComponent.prototype.ngOnInit = function () {
    };
    AgilidadComponent.prototype.Salir = function () {
        this.router.navigate(['/menu']);
    };
    return AgilidadComponent;
}());
AgilidadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-agilidad',
        template: __webpack_require__("../../../../../src/app/componentes/agilidad/agilidad.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/agilidad/agilidad.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AgilidadComponent);

var _a;
//# sourceMappingURL=agilidad.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base CSS */\r\n\r\nbody{\r\n    background:url('http://ghostcode.in/wp-content/uploads/2016/09/super_hero_whatsapp_background_by_x_ama-d8fr7iz.jpg'); \r\n   /* padding:50px; */\r\n   font-family: cursive;\r\n }\r\n.alignleft {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.alignright {\r\n    float: right;\r\n    margin-left: 15px;\r\n}\r\n.aligncenter {\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n}\r\na:focus { outline: 0 solid }\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.fix { overflow: hidden }\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 0 0 15px;\r\n    font-weight: 700;\r\n}\r\nhtml,\r\nbody { height: 100% }\r\n\r\na {\r\n    transition: 0.3s;\r\n    color: #333;\r\n}\r\na:hover { text-decoration: none }\r\n\r\n\r\n\r\n.search-box{margin:80px auto;position:absolute;}\r\n.caption{margin-bottom:50px;}\r\n.loginForm input[type=text], .loginForm input[type=password]{\r\n\tmargin-bottom:10px;\r\n}\r\n.loginForm input[type=submit]{\r\n\tbackground:#fb044a;\r\n\tcolor:#fff;\r\n    font-weight:700;\r\n    margin-bottom:10px;\r\n    padding: 5px 100px;\r\n}\r\n.loginForm input[type=submit]:focus{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\r\n\t\r\n}\r\n.loginForm input[type=submit]:hover{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\t\r\n}\r\n\r\n#pswd_info {\r\n\tbackground: #dfdfdf none repeat scroll 0 0;\r\n\tcolor: #fff;\r\n\tleft: 20px;\r\n\tposition: absolute;\r\n\ttop: 115px;\r\n}\r\n#pswd_info h4{\r\n    background: black none repeat scroll 0 0;\r\n    display: block;\r\n    font-size: 14px;\r\n    letter-spacing: 0;\r\n    padding: 17px 0;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n#pswd_info ul {\r\n    list-style: outside none none;\r\n}\r\n#pswd_info ul li {\r\n   padding: 10px 45px;\r\n}\r\n\r\n.valid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/vq43s2wib/valid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: green;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n.invalid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/olmaj1p8z/invalid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: red;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n\r\n#pswd_info::before {\r\n    background: #dfdfdf none repeat scroll 0 0;\r\n    content: \"\";\r\n    height: 25px;\r\n    left: -13px;\r\n    margin-top: -12.5px;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    width: 25px;\r\n}\r\n#pswd_info {\r\n    display:none;\r\n}\r\n\r\n\r\n/* .miboton\r\n{\r\n    background-color: rgb(5, 50, 182);\r\n    border: 1px solidrgb(5, 50, 182);\r\n    border-radius: 15px;\r\n    -moz-border-radius: 15px;\r\n    -webkit-border-radius: 15px;\r\n  -ms-border-radius: 15px;\r\n  -o-border-radius: 15px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    line-height: 48px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    width: 240px;\r\n    margin-bottom: 5px;\r\n    \r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-4 col-md-offset-4 text-center\">\n\n\t<form class=\"loginForm\">\n\t\t<div class=\"input-group\">\n\t\t\n\t\t\t\t\t\n\t\t<h1>\tAnagrama:</h1>\n\n      <h3>{{miJuego.Display}}</h3>\n\n\t\t\t<input type=\"text\"  class=\"form-control\"  name=\"usuario\" [(ngModel)]=\"miJuego.ingresado\" placeholder=\"Respuesta\"/>\n\t\t\t<input type=\"submit\" id=\"verificar\" class=\"form-control\" value=\"Verificar\" (click)=\"miJuego.Verificar()\">\n      <input type=\"submit\" id=\"verificar\" class=\"form-control\" (click)=\"Salir()\" value=\"Salir\">\t\t\t\n\t\t</div>\n\t</form>\n</div> -->\n<!-- <table class=\"table table-condensed\">\n        <thead>\n          <tr>\n              <th>Jugador</th>\n              <th>Gano</th>\n              <th>Tiempo</th>\n              <th>Juego</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let juego of miJuego.Jugadores\">\n            <td>{{juego.Nombre}} </td>\n            <td>{{juego.Gano}} </td> \n            <td>{{juego.Tiempo}} </td> \n            <td>{{juego.Juego}} </td> \n          </tr>\n        \n        </tbody>\n      </table> -->\n\n\n      <!-- Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->\n\n<body >\n  <div>\n      <form class=\"loginForm\">\n        <div >\n                <table WIDTH=100%>\n                  <tr>\n                    <th></th>\n                    <th></th>\n                    <th>\t\t<h1>\tAnagrama: Adivine el nombre</h1>\n                      <div [hidden]=\"miJuego.Habilitado\">\n                            <h3>{{miJuego.Display}}</h3>\n                      </div>\n                      <div [hidden]=\"!miJuego.Habilitado\">\n                        <h3>Oprima en nuevo para empezar</h3>\n                      </div>\n                    </th>\n                      \n                    <th></th>\n                    <th> <input class=\"miboton\" type=\"image\" style='width:120px'  (click)=\"miJuego.GenerarNuevo()\"  img src=\"assets/Nuevo.png\"></th>\n                  </tr>\n                  <tr>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                  </tr>\n                  <tr>\n                    <td></td>\n                    <td></td>\n                    <td><div [hidden]=\"miJuego.Habilitado\"><input type=\"text\"  class=\"form-control\"  name=\"usuario\" [(ngModel)]=\"miJuego.ingresado\" placeholder=\"Respuesta\"/></div></td>\n                    <td></td>\n                    <td></td>\n                  </tr>\n                  <tr>\n                    <td></td>\n                    <td></td>\n                    <td><div align=\"center\" [hidden]=\"miJuego.Habilitado\"><input class=\"miboton\" type=\"image\" align=\"center\" style='width:120px'  (click)=\"miJuego.Verificar()\"  img src=\"assets/Verificar.png\"></div></td>\n                    <td></td>\n                    <td></td> \n                  </tr>\n                  <tr>\n                      <td><input class=\"miboton\" type=\"image\" style='width:120px;height:160px'  (click)=\"Salir()\"  img src=\"assets/Salir.png\">\t\t</td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                    <td></td>\n                  </tr>\n                </table>\n          </div>\n        </form>\n      \n        <table class=\"table table-condensed\">\n          <thead>\n            <tr>\n                <th>Jugador</th>\n                <th>Gano</th>\n                <th>Tiempo</th>\n                <th>Juego</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let juego of miJuego.Jugadores\">\n              <td>{{juego.Nombre}} </td>\n              <td>{{juego.Gano}} </td> \n              <td>{{juego.Tiempo}} </td> \n              <td>{{juego.Juego}} </td> \n            </tr>\n          \n          </tbody>\n        </table>\n</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/componentes/anagrama/anagrama.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Clase_anagrama__ = __webpack_require__("../../../../../src/app/Clase/anagrama.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnagramaComponent = (function () {
    function AnagramaComponent(router) {
        this.router = router;
        var user = localStorage.getItem("miUsuario");
        var personaGuardada = JSON.parse(user);
        this.miJuego = new __WEBPACK_IMPORTED_MODULE_1__Clase_anagrama__["a" /* Anagrama */]("Adivina el numero", personaGuardada.nombre);
    }
    AnagramaComponent.prototype.Salir = function () {
        this.router.navigate(['/menu']);
    };
    AnagramaComponent.prototype.ngOnInit = function () {
    };
    return AnagramaComponent;
}());
AnagramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-anagrama',
        template: __webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/anagrama/anagrama.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AnagramaComponent);

var _a;
//# sourceMappingURL=anagrama.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/estadistica-adivina/estadistica-adivina.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/estadistica-adivina/estadistica-adivina.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  estadistica-adivina works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/estadistica-adivina/estadistica-adivina.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticaAdivinaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EstadisticaAdivinaComponent = (function () {
    function EstadisticaAdivinaComponent() {
        this.settings = {
            columns: {
                cuit: {
                    title: 'Cuit'
                },
                usuario: {
                    title: 'Usuario'
                },
                email: {
                    title: 'Email'
                },
                puntaje: {
                    title: 'Puntaje'
                },
                fecha: {
                    title: 'Fecha'
                },
                sexo: {
                    title: 'Sexo'
                },
                gano: {
                    title: 'Gano'
                }
            }
        };
    }
    EstadisticaAdivinaComponent.prototype.ngOnInit = function () {
    };
    return EstadisticaAdivinaComponent;
}());
EstadisticaAdivinaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-estadistica-adivina',
        template: __webpack_require__("../../../../../src/app/componentes/estadistica-adivina/estadistica-adivina.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/estadistica-adivina/estadistica-adivina.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EstadisticaAdivinaComponent);

//# sourceMappingURL=estadistica-adivina.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/estadistica-agilidad/estadistica-agilidad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/estadistica-agilidad/estadistica-agilidad.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  estadistica-agilidad works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/componentes/estadistica-agilidad/estadistica-agilidad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadisticaAgilidadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EstadisticaAgilidadComponent = (function () {
    function EstadisticaAgilidadComponent() {
    }
    EstadisticaAgilidadComponent.prototype.ngOnInit = function () {
    };
    return EstadisticaAgilidadComponent;
}());
EstadisticaAgilidadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-estadistica-agilidad',
        template: __webpack_require__("../../../../../src/app/componentes/estadistica-agilidad/estadistica-agilidad.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/estadistica-agilidad/estadistica-agilidad.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EstadisticaAgilidadComponent);

//# sourceMappingURL=estadistica-agilidad.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let juego Of ListadoDeResultados\" >\n  {{juego.Nombre}}  \n {{juego.Jugador}}   \n <p *ngIf=\"juego.Gano\" > Gano!!       </p>\n <p *ngIf=\"!juego.Gano\"> Perdio!!       </p>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/listado/listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoComponent = (function () {
    function ListadoComponent() {
    }
    ListadoComponent.prototype.ngOnInit = function () {
        console.info(this.ListadoDeResultados);
    };
    return ListadoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ListadoComponent.prototype, "ListadoDeResultados", void 0);
ListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listado',
        template: __webpack_require__("../../../../../src/app/componentes/listado/listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/listado/listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListadoComponent);

//# sourceMappingURL=listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.miclase\r\n{\r\n    height: 100%;\r\n}\r\n\r\n.wrapper {    \r\n\tmargin-top: 80px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 420px;\r\n  padding: 30px 38px 66px;\r\n  margin: 0 auto;\r\n  background-color: #eee;\r\n  border: 3px dotted rgba(0,0,0,0.1);  \r\n  }\r\n\r\n.form-signin-heading {\r\n  text-align:center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  margin-bottom: 0px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\ninput[type=\"password\"] {\r\n  margin-bottom: 0px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\ninput[type=\"select\"] {\r\n    margin-bottom: 20px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n\r\n.colorgraph {\r\n  height: 7px;\r\n  border-top: 0;\r\n  /*background: #c4e17f;*/\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<html >\n\t\n<body clase = \"miclase\" background=\"../assets/2.jpg\" >\n<div class = \"container\" >\n\t<div class=\"wrapper\">\n\t\t<form action=\"\" method=\"post\" name=\"Login_Form\" class=\"form-signin\">       \n\t\t    <h3 class=\"form-signin-heading\">Sala de juegos</h3>\n\t\t\t  <hr class=\"colorgraph\"><br>\n\t\t\t  \n\t\t\t  <input type=\"text\"  class=\"form-control\"  name=\"usuario\" [(ngModel)]=\"miUsuario.usuario\" placeholder=\"Usuario\"/>\n\t\t\t  <input type=\"password\" id=\"paw\" class=\"form-control\" [(ngModel)]=\"miUsuario.clave\" name=\"pass\" placeholder=\"Clave\">\t \t\t  \n\t\t\t  <select class=\"form-control\" name=\"firstField\" [(ngModel)]=\"tipoUser\" (change)=\"UserValido()\" placeholder=\"Seleccione usuario\">\n\t\t\t\t<option value=\"usuario\">Usuario</option>\n\t\t\t\t<option value=\"admin\">Administrador</option>\n\t\t\t\t<option value=\"invitado\">Invitado</option>\n\t\t\t\t<option value=\"jugador1\">Jugador 1</option>\n\t\t\t\t<option value=\"jugador2\">Jugador 2</option>\n\t\t\t  </select>\n\t\t\t  <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"miUsuario.Entrar()\" id=\"submit\"  >Ingresar</button>\n\t\t\t  <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"Registrarse()\" id=\"submit\" >Registrar</button>\t\t\n\t\t</form>\t\t\t\n\t</div>\n</div>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/componentes/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Clase_login__ = __webpack_require__("../../../../../src/app/Clase/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(route, router, localStorageService, db, _auth) {
        this.route = route;
        this.router = router;
        this.localStorageService = localStorageService;
        this._auth = _auth;
        this.miUsuario = new __WEBPACK_IMPORTED_MODULE_1__Clase_login__["a" /* Login */](route, router, _auth);
        console.info(this.users);
    }
    LoginComponent.prototype.Registrarse = function () {
        this.router.navigate(['/Registrar']);
    };
    LoginComponent.prototype.UserValido = function () {
        switch (this.tipoUser) {
            case "admin": {
                this.miUsuario.usuario = "admin@admin.com";
                this.miUsuario.clave = "111111";
                break;
            }
            case "usuario": {
                this.miUsuario.usuario = "usuario@usuario.com";
                this.miUsuario.clave = "333333";
                break;
            }
            case "invitado": {
                this.miUsuario.usuario = "invitado@invitado.com";
                this.miUsuario.clave = "222222";
                break;
            }
            case "jugador1": {
                this.miUsuario.usuario = "j1@jugador.com";
                this.miUsuario.clave = "444444";
                break;
            }
            case "jugador2": {
                this.miUsuario.usuario = "j2@jugador.com";
                this.miUsuario.clave = "555555";
                break;
            }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/memotest/memotest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base CSS */\r\nbody{\r\n    background:url('http://ghostcode.in/wp-content/uploads/2016/09/super_hero_whatsapp_background_by_x_ama-d8fr7iz.jpg'); \r\n   /* padding:50px; */\r\n   font-family: cursive;\r\n }\r\n.alignleft {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.alignright {\r\n    float: right;\r\n    margin-left: 15px;\r\n}\r\n.aligncenter {\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n}\r\na:focus { outline: 0 solid }\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.fix { overflow: hidden }\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 0 0 15px;\r\n    font-weight: 700;\r\n}\r\nhtml,\r\nbody { height: 100% }\r\n\r\na {\r\n    transition: 0.3s;\r\n    color: #333;\r\n}\r\na:hover { text-decoration: none }\r\n\r\n\r\n\r\n.search-box{margin:80px auto;position:absolute;}\r\n.caption{margin-bottom:50px;}\r\n.loginForm input[type=text], .loginForm input[type=password]{\r\n\tmargin-bottom:10px;\r\n}\r\n.loginForm input[type=submit]{\r\n\tbackground:#fb044a;\r\n\tcolor:#fff;\r\n    font-weight:700;\r\n    margin-bottom:10px;\r\n    padding: 5px 100px;\r\n}\r\n.loginForm input[type=submit]:focus{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\r\n\t\r\n}\r\n.loginForm input[type=submit]:hover{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\t\r\n}\r\n\r\n#pswd_info {\r\n\tbackground: #dfdfdf none repeat scroll 0 0;\r\n\tcolor: #fff;\r\n\tleft: 20px;\r\n\tposition: absolute;\r\n\ttop: 115px;\r\n}\r\n#pswd_info h4{\r\n    background: black none repeat scroll 0 0;\r\n    display: block;\r\n    font-size: 14px;\r\n    letter-spacing: 0;\r\n    padding: 17px 0;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n#pswd_info ul {\r\n    list-style: outside none none;\r\n}\r\n#pswd_info ul li {\r\n   padding: 10px 45px;\r\n}\r\n\r\n.valid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/vq43s2wib/valid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: green;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n.invalid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/olmaj1p8z/invalid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: red;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n\r\n#pswd_info::before {\r\n    background: #dfdfdf none repeat scroll 0 0;\r\n    content: \"\";\r\n    height: 25px;\r\n    left: -13px;\r\n    margin-top: -12.5px;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    width: 25px;\r\n}\r\n#pswd_info {\r\n    display:none;\r\n}\r\n\r\n.miclase\r\n{\r\n    height: 100%;\r\n}\r\n\r\n.wrapper {    \r\n\tmargin-top: 80px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 420px;\r\n  padding: 30px 38px 66px;\r\n  margin: 0 auto;\r\n  background-color: #eee;\r\n  border: 3px dotted rgba(0,0,0,0.1);  \r\n  }\r\n\r\n.form-signin-heading {\r\n  text-align:center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  margin-bottom: 0px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\ninput[type=\"password\"] {\r\n  margin-bottom: 0px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\ninput[type=\"select\"] {\r\n    margin-bottom: 20px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n\r\n.colorgraph {\r\n  height: 7px;\r\n  border-top: 0;\r\n  /*background: #c4e17f;*/\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/memotest/memotest.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body >\n\t\t<app-menu-barra></app-menu-barra>\n\t\t<div>\n\t  <form class=\"loginForm\">\n\t\t<div >\n\t\t\t\t<table WIDTH=100%>\n\t\t\t\t  <tr>\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th><h1 align=\"center\">{{miJuego.NombreDelJuego}}</h1>\n\t\t\t\t\t\t<h3 align=\"center\">Traduce a ingles la imagen</h3></th>\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th><div align=\"center\"><input class=\"miboton\" type=\"image\" style='width:120px'  (click)=\"miJuego.Nuevo()\"  img src=\"assets/Nuevo.png\"></div></th>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><div align=\"center\"><img class=\"img-responsive\" src=\"{{miJuego.myPhotoURL}}\" /> \n\t\t\t\t\t\t<h3>AYUDA:\n\t\t\t\t\t\t<a  *ngFor=\"let item of miJuego.ayuda\">\n\t\t\t\t\t\t\t\t{{item}}\n\t\t\t\t\t\t</a></h3><div [hidden]=\"miJuego.Habilitado\">\n\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\"  name=\"usuario\" [(ngModel)]=\"miJuego.foto\" placeholder=\"Respuesta\"/></div>\n\t\t\t\t\t\t<div [hidden]=\"!miJuego.Habilitado\">Oprima en NUEVO</div></div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><div align=\"center\" [hidden]=\"miJuego.Habilitado\"><input class=\"miboton\" type=\"image\" align=\"center\" style='width:120px'  (click)=\"miJuego.Verificar()\"  img src=\"assets/Verificar.png\"></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td> \n\t\t\t\t  </tr>\n\t\t\t\t  <tr>\n\t\t\t\t\t  <td><input class=\"miboton\" type=\"image\" style='width:120px;height:160px'  (click)=\"Salir()\"  img src=\"assets/Salir.png\">\t\t</td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><div align=\"center\"><input  type=\"image\" align=\"center\" style='width:220px'  (click)=\"miJuego.Ayuda()\"  img src=\"assets/Ayuda.png\"></div></td>\n\t\t\t\t  </tr>\n\t\t\t\t</table>\n\t\t  </div>\n\t\t</form>\n\t  \n\t\t<table class=\"table table-condensed\">\n\t\t  <thead>\n\t\t\t<tr>\n\t\t\t\t<th>Jugador</th>\n\t\t\t\t<th>Gano</th>\n\t\t\t\t<th>Tiempo</th>\n\t\t\t\t<th>Juego</th>\n\t\t\t</tr>\n\t\t  </thead>\n\t\t  <tbody>\n\t\t\t<tr *ngFor=\"let juego of miJuego.Jugadores\">\n\t\t\t  <td>{{juego.Nombre}} </td>\n\t\t\t  <td>{{juego.Gano}} </td> \n\t\t\t  <td>{{juego.Tiempo}} </td> \n\t\t\t  <td>{{juego.Juego}} </td> \n\t\t\t</tr>\n\t\t  \n\t\t  </tbody>\n\t\t</table>\n\t  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/componentes/memotest/memotest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemotestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Clase_memoTest__ = __webpack_require__("../../../../../src/app/Clase/memoTest.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemotestComponent = (function () {
    function MemotestComponent(router) {
        this.router = router;
        this.miJuego = new __WEBPACK_IMPORTED_MODULE_1__Clase_memoTest__["a" /* MemoTest */]("pablo", "Jugador1");
    }
    MemotestComponent.prototype.ngOnInit = function () {
    };
    MemotestComponent.prototype.Salir = function () {
        this.router.navigate(['/menu']);
    };
    return MemotestComponent;
}());
MemotestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-memotest',
        template: __webpack_require__("../../../../../src/app/componentes/memotest/memotest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/memotest/memotest.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MemotestComponent);

var _a;
//# sourceMappingURL=memotest.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-barra/menu-barra.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* bootstrap dropdown hover menu*/\r\n\r\nbody {\r\n    font-family: 'PT Sans', sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    color: #4f5d6e;\r\n    position: relative;\r\n    background: rgb(26, 49, 95);\r\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(26, 49, 95, 1)), color-stop(10%, rgba(26, 49, 95, 1)), color-stop(24%, rgba(29, 108, 141, 1)), color-stop(37%, rgba(41, 136, 151, 1)), color-stop(77%, rgba(39, 45, 100, 1)), color-stop(90%, rgba(26, 49, 95, 1)), color-stop(100%, rgba(26, 49, 95, 1)));\r\n    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#1a315f', endColorstr='#1a315f', GradientType=0);\r\n  }\r\n  \r\n  .body-wrap {\r\n    min-height: 700px;\r\n  }\r\n  \r\n  .body-wrap {\r\n    position: relative;\r\n    z-index: 0;\r\n  }\r\n  \r\n  .body-wrap:before,\r\n  .body-wrap:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n    height: 260px;\r\n    background: linear-gradient(to bottom, rgba(26, 49, 95, 1) 0%, rgba(26, 49, 95, 0) 100%);\r\n    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#1a315f', endColorstr='#001a315f', GradientType=0);\r\n  }\r\n  \r\n  .body-wrap:after {\r\n    top: auto;\r\n    bottom: 0;\r\n    background: linear-gradient(to bottom, rgba(26, 49, 95, 0) 0%, rgba(26, 49, 95, 1) 100%);\r\n    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#001a315f', endColorstr='#1a315f', GradientType=0);\r\n  }\r\n  \r\n  nav {\r\n    margin-top: 60px;\r\n    box-shadow: 5px 4px 5px #000;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-barra/menu-barra.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"container\">\n    <nav class=\"navbar navbar-inverse\" role=\"navigation\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n\n          <a class=\"navbar-brand\" routerLink=\"/menu\" >Inicio </a>\n          <a class=\"navbar-brand\" routerLink=\"/adivina\" >Adivina</a>\n          <a class=\"navbar-brand\" routerLink=\"/agilidad\" >Agilidad</a>\n          <a class=\"navbar-brand\" routerLink=\"/anagrama\" >anagrama</a>\n          <a class=\"navbar-brand\" routerLink=\"/PPT\" >Piedra,papel o tijera</a>\n          <a class=\"navbar-brand\" routerLink=\"/memotest\" >Traduce</a>\n        </div>\n\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n          <ul class=\"nav navbar-nav navbar-right\">\n              <a class=\"navbar-brand\" routerLink=\"/quienSoy\" >¿Quien soy?</a>\n              <a class=\"navbar-brand\" routerLink=\"/login\" >Salir</a>\n          </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n      </div>\n      <!-- /.container-fluid -->\n    </nav>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-barra/menu-barra.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuBarraComponent = (function () {
    function MenuBarraComponent() {
        this.muestra = true;
    }
    MenuBarraComponent.prototype.ngOnInit = function () {
    };
    MenuBarraComponent.prototype.mortrar = function () {
        //alert("A");
        if (this.muestra)
            this.muestra = false;
        else
            this.muestra = true;
        //alert(this.muestra);
    };
    return MenuBarraComponent;
}());
MenuBarraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-barra',
        template: __webpack_require__("../../../../../src/app/componentes/menu-barra/menu-barra.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-barra/menu-barra.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuBarraComponent);

//# sourceMappingURL=menu-barra.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-de-listado/menu-de-listado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-de-listado/menu-de-listado.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>LISTADO</h1>\n<app-listado [ListadoDeResultados]=\"listadoParaCompartir\"></app-listado> "

/***/ }),

/***/ "../../../../../src/app/componentes/menu-de-listado/menu-de-listado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDeListadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_listado_service__ = __webpack_require__("../../../../../src/app/servicios/listado.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuDeListadoComponent = (function () {
    function MenuDeListadoComponent() {
        this.miServicio = new __WEBPACK_IMPORTED_MODULE_1__servicios_listado_service__["a" /* ListadoService */]();
        this.listadoParaCompartir = this.miServicio.listar();
    }
    MenuDeListadoComponent.prototype.ngOnInit = function () {
    };
    return MenuDeListadoComponent;
}());
MenuDeListadoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-de-listado',
        template: __webpack_require__("../../../../../src/app/componentes/menu-de-listado/menu-de-listado.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-de-listado/menu-de-listado.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuDeListadoComponent);

//# sourceMappingURL=menu-de-listado.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu-opciones/menu-opciones.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* make sidebar nav vertical */ \r\n@media (min-width: 768px){\r\n    .affix-content .container {\r\n      width: 700px;\r\n    }   \r\n  \r\n    html,body{\r\n      background-color: #f8f8f8;\r\n      height: 100%;\r\n      overflow: hidden;\r\n    }\r\n      .affix-content .container .page-header{\r\n      margin-top: 0;\r\n    }\r\n    .sidebar-nav{\r\n          position:fixed; \r\n          width:100%;\r\n    }\r\n    .affix-sidebar{\r\n      padding-right:0; \r\n      font-size:small;\r\n      padding-left: 0;\r\n    }  \r\n    .affix-row, .affix-container, .affix-content{\r\n      height: 100%;\r\n      margin-left: 0;\r\n      margin-right: 0;    \r\n    } \r\n    .affix-content{\r\n      background-color:white; \r\n    } \r\n    .sidebar-nav .navbar .navbar-collapse {\r\n      padding: 0;\r\n      max-height: none;\r\n    }\r\n    .sidebar-nav .navbar{\r\n      border-radius:0; \r\n      margin-bottom:0; \r\n      border:0;\r\n    }\r\n    .sidebar-nav .navbar ul {\r\n      float: none;\r\n      display: block;\r\n    }\r\n    .sidebar-nav .navbar li {\r\n      float: none;\r\n      display: block;\r\n    }\r\n    .sidebar-nav .navbar li a {\r\n      padding-top: 12px;\r\n      padding-bottom: 12px;\r\n    }  \r\n  }\r\n  \r\n  @media (min-width: 769px){\r\n    .affix-content .container {\r\n      width: 600px;\r\n    }\r\n      .affix-content .container .page-header{\r\n      margin-top: 0;\r\n    }  \r\n  }\r\n  \r\n  @media (min-width: 992px){\r\n    .affix-content .container {\r\n    width: 900px;\r\n    }\r\n      .affix-content .container .page-header{\r\n      margin-top: 0;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1220px){\r\n    .affix-row{\r\n      overflow: hidden;\r\n    }\r\n  \r\n    .affix-content{\r\n      overflow: auto;\r\n    }\r\n  \r\n    .affix-content .container {\r\n      width: 1000px;\r\n    }\r\n  \r\n    .affix-content .container .page-header{\r\n      margin-top: 0;\r\n    }\r\n    .affix-content{\r\n      padding-right: 30px;\r\n      padding-left: 30px;\r\n    }  \r\n    .affix-title{\r\n      border-bottom: 1px solid #ecf0f1; \r\n      padding-bottom:10px;\r\n    }\r\n    .navbar-nav {\r\n      margin: 0;\r\n    }\r\n    .navbar-collapse{\r\n      padding: 0;\r\n    }\r\n    .sidebar-nav .navbar li a:hover {\r\n      background-color: #428bca;\r\n      color: white;\r\n    }\r\n    .sidebar-nav .navbar li a > .caret {\r\n      margin-top: 8px;\r\n    }  \r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu-opciones/menu-opciones.component.html":
/***/ (function(module, exports) {

module.exports = "\n<script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js\"></script> \n<script src=\"//ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js\" type=\"text/javascript\"></script> \n<script src=\"/bootstrap/js/bootstrap.min.js\"></script> \n<script src=\"/js/slider_input.js\"></script>\n\n<link rel=\"stylesheet\" href=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/themes/base/jquery-ui.css\" type=\"text/css\" media=\"all\" />\n<link href=\"/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\" media=\"screen\">\n\n<div class=\"row affix-row\">\n  <div class=\"col-sm-3 col-md-2 affix-sidebar\">\n  <div class=\"sidebar-nav\">\n<div class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".sidebar-navbar-collapse\">\n    <span class=\"sr-only\">Toggle navigation</span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    <span class=\"icon-bar\"></span>\n    </button>\n    <span class=\"visible-xs navbar-brand\">Sidebar menu</span>\n  </div>\n  <div class=\"navbar-collapse collapse sidebar-navbar-collapse\">\n    <ul class=\"nav navbar-nav\" id=\"sidenav01\">\n      <li class=\"active\">\n        <a href=\"#\" data-toggle=\"collapse\" data-target=\"#toggleDemo0\" data-parent=\"#sidenav01\" class=\"collapsed\">\n        <h4>\n        Control Panel\n        <br>\n        <small>IOSDSV <span class=\"caret\"></span></small>\n        </h4>\n        </a>\n        <div class=\"collapse\" id=\"toggleDemo0\" style=\"height: 0px;\">\n          <ul class=\"nav nav-list\">\n            <li><a href=\"#\">ProfileSubMenu1</a></li>\n            <li><a href=\"#\">ProfileSubMenu2</a></li>\n            <li><a href=\"#\">ProfileSubMenu3</a></li>\n          </ul>\n        </div>\n      </li>\n      <li>\n        <a href=\"#toggleDemo\" data-toggle=\"collapse\" data-target=\"#toggleDemo\" data-parent=\"#sidenav01\" class=\"collapsed\">\n        <span class=\"glyphicon glyphicon-cloud\"></span> Submenu 1 <span class=\"caret pull-right\"></span>\n        </a>\n        <div class=\"collapse\" id=\"toggleDemo\" style=\"height: 0px;\">\n          <ul class=\"nav nav-list\">\n            <li><a href=\"#\">Submenu1.1</a></li>\n            <li><a href=\"#\">Submenu1.2</a></li>\n            <li><a href=\"#\">Submenu1.3</a></li>\n          </ul>\n        </div>\n      </li>\n      <li class=\"active\">\n        <a href=\"#\" data-toggle=\"collapse\" data-target=\"#toggleDemo2\" data-parent=\"#sidenav01\" class=\"collapsed\">\n        <span class=\"glyphicon glyphicon-inbox\"></span> Submenu 2 <span class=\"caret pull-right\"></span>\n        </a>\n        <div class=\"collapse\" id=\"toggleDemo2\" style=\"height: 0px;\">\n          <ul class=\"nav nav-list\">\n            <li><a href=\"#\">Submenu2.1</a></li>\n            <li><a href=\"#\">Submenu2.2</a></li>\n            <li><a href=\"#\">Submenu2.3</a></li>\n          </ul>\n        </div>\n      </li>\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-lock\"></span> Normalmenu</a></li>\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-calendar\"></span> WithBadges <span class=\"badge pull-right\">42</span></a></li>\n      <li><a href=\"\"><span class=\"glyphicon glyphicon-cog\"></span> PreferencesMenu</a></li>\n    </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</div>\n</div>\n<div class=\"col-sm-9 col-md-10 affix-content\">\n  <div class=\"container\">\n    \n      <div class=\"page-header\">\n<h3><span class=\"glyphicon glyphicon-th-list\"></span> Navigation</h3>\n</div>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lectus orci, viverra nec neque non, tincidunt commodo leo. Nullam eleifend velit purus, id aliquam elit venenatis sit amet. Cras vel nisl eget eros tempus viverra. Phasellus in enim et nulla tempor blandit. Donec at lectus sit amet velit faucibus tincidunt quis sed est. Mauris placerat purus odio. In egestas, velit quis congue sodales, turpis lacus pellentesque neque, quis accumsan orci nibh sed mauris. Sed sit amet pulvinar felis. Aliquam consequat tellus non ligula elementum, at egestas quam vestibulum.\nDuis sed urna sit amet quam rutrum malesuada sed eu risus. Cras sit amet velit a neque tincidunt cursus sed ac nunc. Donec ac auctor purus. Proin viverra turpis sit amet dui sagittis, quis tempor elit suscipit. Curabitur rutrum lacus et diam lacinia, vel ullamcorper libero vulputate. Phasellus sem ligula, pharetra sed nisl sed, facilisis sagittis ante. Nullam egestas turpis et mauris aliquet cursus. Nullam vel eleifend neque.</p>\n<p>Pellentesque semper nisl eget auctor varius. Vivamus auctor venenatis rhoncus. Ut at elit eget justo placerat tincidunt. Etiam varius sapien lacus, eget vehicula diam tincidunt et. Integer at velit eu metus luctus bibendum. Mauris ornare hendrerit felis, at cursus enim tempor et. Nullam pretium at libero facilisis aliquet. Mauris malesuada eros sed erat laoreet blandit. Proin venenatis ac arcu sed tristique.</p>\n<p>In eget ullamcorper mi. Curabitur iaculis a eros in elementum. Pellentesque volutpat quam nec dolor pharetra, vitae iaculis lacus viverra. Aenean tristique felis sed leo ultricies lobortis. Phasellus ut libero dictum, dapibus elit et, pretium tellus. Donec fermentum neque dolor, vitae mattis odio blandit nec. Sed eget tellus ac dui pellentesque ultrices vitae eget arcu. Sed congue sit amet nunc eu sollicitudin. Praesent sit amet auctor purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque tincidunt erat sem, ac rhoncus nisi aliquet vel. Pellentesque at lectus faucibus, ultrices tellus non, accumsan justo. Curabitur vitae turpis aliquet, vehicula enim eu, rhoncus quam.</p>\n<p>Aenean vitae lorem a elit faucibus porta vitae nec risus. Mauris eget ligula nisi. Nunc eu egestas leo. In euismod consectetur sollicitudin. Curabitur sed justo eleifend, consequat tortor eu, semper massa. Proin rhoncus, odio eu pulvinar pulvinar, urna neque dignissim metus, eget porta libero justo non dolor. Phasellus rhoncus dui diam, at vehicula mauris rhoncus et. Cras quis varius mauris. Sed erat ante, mattis quis lacus nec, vehicula congue enim. Nam vel felis ultricies, sodales justo ac, tristique odio. Sed ullamcorper purus eget tortor posuere tempor. Donec at auctor felis, at iaculis quam. Proin fermentum sagittis sem vel varius. Proin enim nibh, mollis a nibh vitae, porta congue dui.</p>\n<p>Cras malesuada, est in placerat varius, risus nibh gravida tortor, et ullamcorper erat metus et velit. Fusce mollis mollis sem, non tincidunt nisi tristique eget. Aliquam erat volutpat. Vivamus mollis justo nunc, in commodo diam tristique ut. Proin at nunc dolor. Aenean dapibus commodo orci, in mollis odio volutpat in. Curabitur rutrum eu arcu vehicula interdum. Etiam eu imperdiet lacus, vel placerat magna. Duis molestie eu erat eu auctor. Sed cursus porta sem quis imperdiet. Cras pharetra ante urna, a tempus neque facilisis egestas. Proin vel nulla vitae eros luctus ornare ut vel sem. Donec eget erat in risus lobortis viverra. Mauris libero nisl, pretium in justo vel, porta euismod elit. Donec commodo porttitor metus, vel sagittis ante interdum ut.\nVivamus sodales turpis et eros cursus, eu feugiat dolor rhoncus. Nulla nisi lectus, molestie eu quam nec, condimentum sagittis est. Cras eu volutpat quam, vehicula suscipit metus. Duis ornare urna arcu, non malesuada nunc bibendum at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis augue sed iaculis sodales. Donec nec turpis mi.</p>\n<p>Sed facilisis lorem in bibendum rutrum. Morbi ligula risus, aliquam a lorem quis, pulvinar varius odio. Sed facilisis mi sit amet elit euismod hendrerit. Vestibulum fermentum erat eu semper ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tristique orci tortor, in mollis magna varius non. Nullam sed dui scelerisque, porta nunc id, iaculis urna. Nunc faucibus ac enim nec sollicitudin.\nQuisque nec ante arcu. Nullam aliquet et turpis nec pulvinar. Maecenas tellus velit, lobortis vitae laoreet eu, feugiat eu orci. Maecenas molestie malesuada nulla, id dignissim sem blandit at. Suspendisse hendrerit quis arcu ut malesuada. Nam porttitor magna et porttitor convallis. Curabitur gravida elementum lorem, in mattis turpis tristique tincidunt. Aliquam id neque euismod, consectetur diam sit amet, adipiscing felis. Phasellus sit amet sem elementum, elementum nisi non, aliquam ligula. Morbi in interdum mi, at pulvinar nunc.</p>\n<p>Praesent aliquet, sapien id pulvinar auctor, elit nisl imperdiet elit, id mattis felis lacus a neque. Fusce ullamcorper, urna vitae mollis tempus, sapien urna aliquam neque, sed dignissim nunc mauris sed nisi. Mauris malesuada congue mauris. Aenean vel justo tincidunt, euismod dolor ut, mattis purus. Vivamus eget adipiscing augue. Curabitur et neque faucibus nunc porta ultrices eu ut justo. Nam eu quam et urna consectetur convallis. Integer at fringilla erat, ut molestie nulla. Maecenas rutrum justo ut lectus gravida, vitae eleifend nulla ullamcorper. Sed consequat sit amet purus id congue. Integer condimentum, odio non pellentesque posuere, eros nisi porttitor nunc, ac laoreet nibh quam eu eros. Sed quis massa posuere, gravida erat non, varius turpis. Morbi venenatis vestibulum vulputate. Vestibulum arcu mauris, commodo commodo ligula nec, molestie blandit neque. Nulla imperdiet, massa nec placerat iaculis, odio lacus aliquam dui, eu vehicula velit dolor et augue.</p>\n    \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/componentes/menu-opciones/menu-opciones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuOpcionesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuOpcionesComponent = (function () {
    function MenuOpcionesComponent() {
    }
    MenuOpcionesComponent.prototype.ngOnInit = function () {
    };
    return MenuOpcionesComponent;
}());
MenuOpcionesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu-opciones',
        template: __webpack_require__("../../../../../src/app/componentes/menu-opciones/menu-opciones.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu-opciones/menu-opciones.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuOpcionesComponent);

//# sourceMappingURL=menu-opciones.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n/*-----------------------------------------*/\r\nbody{\r\n  background:url('https://images4.alphacoders.com/795/thumb-1920-79578.png');\r\n  /* padding:50px; */\r\n  font-family: cursive;\r\n}\r\n\r\n#login-dp{\r\n  min-width: 250px;\r\n  padding: 14px 14px 0;\r\n  overflow:hidden;\r\n  background-color:rgba(255,255,255,.8);\r\n}\r\n#login-dp .help-block{\r\n  font-size:12px    \r\n}\r\n#login-dp .bottom{\r\n  background-color:rgba(255,255,255,.8);\r\n  border-top:1px solid #ddd;\r\n  clear:both;\r\n  padding:14px;\r\n}\r\n#login-dp .social-buttons{\r\n  margin:12px 0    \r\n}\r\n#login-dp .social-buttons a{\r\n  width: 49%;\r\n}\r\n#login-dp .form-group {\r\n  margin-bottom: 10px;\r\n}\r\n.btn-fb{\r\n  color: #fff;\r\n  background-color:#000000;\r\n}\r\n.btn-tw:hover{\r\n  color: #fff;\r\n  background-color:#000000;\r\n}\r\n@media(max-width:768px){\r\n  #login-dp{\r\n      background-color: inherit;\r\n      color: #fff;\r\n  }\r\n  #login-dp .bottom{\r\n      background-color: inherit;\r\n      border-top:0 none;\r\n  }\r\n}\r\n\r\n.list-group-item{\r\n  color: rgb(255, 255, 255);\r\n  background-color:#a19191;\r\n}\r\n\r\n\r\n\r\n/**/\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->\n\n\n <body>\n    <app-menu-barra></app-menu-barra>\n<div class=\"container\">\n        <div class=\"row\">\n            <div class=\"row\"> \n                        <div class=\"col-xs-12 col-sm-3 col-md-3\">\n                            <a>\n                                <img src=\"../assets/adivina.jpg\"  style='width:170px;height:160px' class=\"img-responsive img-box img-thumbnail\"> \n                            </a>\n                        </div> \n                        <div class=\"col-xs-12 col-sm-9 col-md-9\">\n                            <div class=\"list-group\">\n                                <div class=\"list-group-item\">\n                                    <div class=\"row-content\">\n                                        <div class=\"list-group-item-heading\" >\n                                                <h4><a routerLink=\"/adivina\" >Adivina el numero</a></h4>\n                                        </div>\n                                        <p>Trata de adivina el numero secreto y busca mejorar tus marcas.</p>\n                                        <small>\n                                            <span class=\"explore\"><i class=\"glyphicon glyphicon-th\"></i> <a>Dificultad media </a></span>\n                                        </small>                                \n                                      \n                                    </div>\n                                </div>\n                            </div>\n\n                        </div> \n                    </div>\n                   \n                    <hr>\n                    <div class=\"row\"> \n                        <div class=\"col-xs-12 col-sm-3 col-md-3\">\n                            <a>\n                                <img src=\"../assets/agilidad.jpg\" style='width:170px;height:160px' class=\"img-responsive img-box img-thumbnail\"> \n                            </a>\n                        </div> \n                        <div class=\"col-xs-12 col-sm-9 col-md-9\">\n                            <div class=\"list-group\">\n                                <div class=\"list-group-item\">\n                                    <div class=\"row-content\">\n                                        <div class=\"list-group-item-heading\">\n                                        </div>\n                                        <h4><a routerLink=\"/agilidad\" >Agilidad aritmetica</a></h4>\n                                        <p>Juego de agilidad mental ¿que tan rapido puedo resolver los problemas matematicos?.</p>\n                                        <small>\n                                            <span class=\"explore\"><i class=\"glyphicon glyphicon-th\"></i> <a>Dificultad media </a></span>\n                                        </small>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div> \n                    </div>\n                \n                    <hr>\n                    <div class=\"row\"> \n                        <div class=\"col-xs-12 col-sm-3 col-md-3\">\n                            <a>\n                                <img src=\"../assets/anagrama.jpg\" style='width:170px;height:160px' class=\"img-responsive img-box img-thumbnail\"> \n                            </a>\n                        </div> \n                        <div class=\"col-xs-12 col-sm-9 col-md-9\">\n                            <div class=\"list-group\">\n                                <div class=\"list-group-item\">\n                                    <div class=\"row-content\">\n                                        <div class=\"list-group-item-heading\">\n                                        </div>\n                                        <h4><a routerLink=\"/anagrama\" >Anagrama</a></h4>\n                                        <p>Ordena las palabras para formar los nombres correctos.</p>\n                                        <small>\n                                            <span class=\"explore\"><i class=\"glyphicon glyphicon-th\"></i> <a>Dificultad media </a></span>\n                                        </small>\n                                    </div>\n                                </div>\n                            </div>\n           \n                        </div> \n                    </div>  \n                  \n                    <hr>\n                    <div class=\"row\"> \n                        <div class=\"col-xs-12 col-sm-3 col-md-3\">\n                            <a>\n                                <img src=\"../assets/PPT.png\" style='width:170px;height:160px' class=\"img-responsive img-box img-thumbnail\"> \n                            </a>\n                        </div> \n                        <div class=\"col-xs-12 col-sm-9 col-md-9\">\n                            <div class=\"list-group\">\n                                <div class=\"list-group-item\">\n                                    <div class=\"row-content\">\n                                        <div class=\"list-group-item-heading\">\n                                        </div>\n                                        <h4><a routerLink=\"/PPT\" >Piedra , papel o tijera</a></h4>\n                                        <p>Desafia a la maquina e intenta ganarle con piedra papel o tijera</p>\n                                        <small>\n                                            <span class=\"explore\"><i class=\"glyphicon glyphicon-th\"></i> <a>Dificultad media </a></span>\n                                        </small>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div> \n                    </div>  \n                  \n                    <hr> \n                    <div class=\"row\"> \n                        <div class=\"col-xs-12 col-sm-3 col-md-3\">\n                            <a>\n                                <img src=\"../assets/traductor.jpg\" style='width:170px;height:160px' class=\"img-responsive img-box img-thumbnail\"> \n                            </a>\n                        </div> \n                        <div class=\"col-xs-12 col-sm-9 col-md-9\">\n                            <div class=\"list-group\">\n                                <div class=\"list-group-item\">\n                                    <div class=\"row-content\">\n                                        <div class=\"list-group-item-heading\">\n                                        </div>\n                                        <h4><a routerLink=\"/memotest\" >Traduce</a></h4>\n                                        <p>Traduce las imagenes a ingles en el menor tiempo.</p>\n                                        <small>\n                                            <span class=\"explore\"><i class=\"glyphicon glyphicon-th\"></i> <a>Dificultad media </a></span>\n                                        </small>\n                                    </div>\n                                </div>\n                            </div>\n                         \n                        </div> \n                    </div>           \n        </div>\n        <br>\n        <br>\n        <br>\n        <br>\n    </div>\n</body> \n"

/***/ }),

/***/ "../../../../../src/app/componentes/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(Route, router) {
        this.Route = Route;
        this.router = router;
        var personaGuardada = localStorage.getItem("miUsuario");
        var persona = JSON.parse(personaGuardada);
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.OpcionMenu = function (Opcion) {
        switch (Opcion) {
            case 'menu':
                this.router.navigate(['/menu']);
                break;
            case 'agilidad':
                this.router.navigate(['/agilidad']);
                break;
            case 'adivina':
                this.router.navigate(['/adivina']);
                break;
            case 'estAdivina':
                this.router.navigate(['/estadisticaAdivina']);
                break;
            case 'estAgilidad':
                this.router.navigate(['/estadisticaAgilidad']);
                break;
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MenuComponent);

var _a, _b;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base CSS */\r\n\r\nbody{\r\n    background:url('http://ghostcode.in/wp-content/uploads/2016/09/super_hero_whatsapp_background_by_x_ama-d8fr7iz.jpg'); \r\n   /* padding:50px; */\r\n   font-family: cursive;\r\n }\r\n.alignleft {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.alignright {\r\n    float: right;\r\n    margin-left: 15px;\r\n}\r\n.aligncenter {\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n}\r\na:focus { outline: 0 solid }\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.fix { overflow: hidden }\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 0 0 15px;\r\n    font-weight: 700;\r\n}\r\nhtml,\r\nbody { height: 100% }\r\n\r\na {\r\n    transition: 0.3s;\r\n    color: #333;\r\n}\r\na:hover { text-decoration: none }\r\n\r\n\r\n\r\n.search-box{margin:80px auto;position:absolute;}\r\n.caption{margin-bottom:50px;}\r\n.loginForm input[type=text], .loginForm input[type=password]{\r\n\tmargin-bottom:10px;\r\n}\r\n.loginForm input[type=submit]{\r\n\tbackground:#fb044a;\r\n\tcolor:#fff;\r\n    font-weight:700;\r\n    margin-bottom:10px;\r\n    padding: 5px 100px;\r\n}\r\n.loginForm input[type=submit]:focus{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\r\n\t\r\n}\r\n.loginForm input[type=submit]:hover{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\t\r\n}\r\n\r\n#pswd_info {\r\n\tbackground: #dfdfdf none repeat scroll 0 0;\r\n\tcolor: #fff;\r\n\tleft: 20px;\r\n\tposition: absolute;\r\n\ttop: 115px;\r\n}\r\n#pswd_info h4{\r\n    background: black none repeat scroll 0 0;\r\n    display: block;\r\n    font-size: 14px;\r\n    letter-spacing: 0;\r\n    padding: 17px 0;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n#pswd_info ul {\r\n    list-style: outside none none;\r\n}\r\n#pswd_info ul li {\r\n   padding: 10px 45px;\r\n}\r\n\r\n.valid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/vq43s2wib/valid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: green;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n.invalid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/olmaj1p8z/invalid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: red;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n\r\n#pswd_info::before {\r\n    background: #dfdfdf none repeat scroll 0 0;\r\n    content: \"\";\r\n    height: 25px;\r\n    left: -13px;\r\n    margin-top: -12.5px;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    width: 25px;\r\n}\r\n#pswd_info {\r\n    display:none;\r\n}\r\n\r\n\r\n/* .miboton\r\n{\r\n    background-color: rgb(5, 50, 182);\r\n    border: 1px solidrgb(5, 50, 182);\r\n    border-radius: 15px;\r\n    -moz-border-radius: 15px;\r\n    -webkit-border-radius: 15px;\r\n  -ms-border-radius: 15px;\r\n  -o-border-radius: 15px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    line-height: 48px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    width: 240px;\r\n    margin-bottom: 5px;\r\n    \r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/***/ (function(module, exports) {

module.exports = "<body >\n  <div>\n<div  ALIGN=center>\n    <h1 align=\"center\" >{{miJuego.NombreDelJuego}}</h1>\n    <input class=\"miboton\" type=\"image\" align=\"right\" style='width:120px'  (click)=\"miJuego.GenerarNuevo()\"  img src=\"assets/Nuevo.png\">\n    <h3>El primero en llegar a 7 puntos gana.</h3>\n  <table align=\"center\">\n    <tr>\n      <th>Usuario</th>\n      <th></th>\n      <th></th>\n      <th></th>\n      <th>Maquina</th>\n    </tr>\n    <tr>\n      <td><a (click)=\"miJuego.OpcionElegida('piedra')\"><img src=\"../assets/piedra.jpg\" style='width:120px;height:120px'></a></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td><a><img src=\"../assets/piedra.jpg\" style='width:120px;height:120px'></a></td>\n    </tr>\n    <tr>\n      <td><a (click)=\"miJuego.OpcionElegida('papel')\"><img src=\"../assets/papel.jpg\" style='width:120px;height:120px'></a></td>\n      <td><img src=\"{{ miJuego.elijioUsuario }}\" style='width:120px;height:120px'></td>\n      <td></td>\n      <td><img src=\"{{ miJuego.elijioMaquina }}\" style='width:120px;height:120px'></td>\n      <td><a><img src=\"../assets/papel.jpg\" style='width:120px;height:120px'></a></td>\n    </tr>\n    <tr>\n      <td><a (click)=\"miJuego.OpcionElegida('tijera')\"><img src=\"../assets/tijera.jpg\" style='width:120px;height:120px'></a></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td><a><img src=\"../assets/tijera.jpg\" style='width:120px;height:120px'></a></td>\n    </tr>\n    <tr>\n      <td><h3>Puntos {{miJuego.puntosU}}</h3></td>\n      <td></td>\n      <td><h3>Empates {{miJuego.empate}}</h3></td>\n      <td></td>\n      <td><h3>Puntos {{miJuego.puntosM}}</h3></td>\n    </tr>\n  </table>\n</div>\n<input class=\"miboton\" type=\"image\" style='width:120px;height:160px'  (click)=\"Salir()\"  img src=\"assets/Salir.png\">\t\n\n<table class=\"table table-condensed\">\n  <thead>\n    <tr>\n        <th>Jugador</th>\n        <th>Gano</th>\n        <th>Juego</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let juego of miJuego.Jugadores\">\n      <td>{{juego.Nombre}} </td>\n      <td>{{juego.Gano}} </td> \n      <td>{{juego.Juego}} </td> \n    </tr>\n  \n  </tbody>\n</table>\n</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Clase_piedraPapelTijera__ = __webpack_require__("../../../../../src/app/Clase/piedraPapelTijera.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PiedraPapelTijeraComponent = (function () {
    function PiedraPapelTijeraComponent(router) {
        this.router = router;
        var user = localStorage.getItem("miUsuario");
        var personaGuardada = JSON.parse(user);
        this.miJuego = new __WEBPACK_IMPORTED_MODULE_1__Clase_piedraPapelTijera__["a" /* PPT */]("Piedra , papel o tijera", personaGuardada.nombre);
    }
    PiedraPapelTijeraComponent.prototype.ngOnInit = function () {
    };
    PiedraPapelTijeraComponent.prototype.Salir = function () {
        this.router.navigate(['/menu']);
    };
    return PiedraPapelTijeraComponent;
}());
PiedraPapelTijeraComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-piedra-papel-tijera',
        template: __webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PiedraPapelTijeraComponent);

var _a;
//# sourceMappingURL=piedra-papel-tijera.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base CSS */\r\n\r\nbody{\r\n    background:url('http://ghostcode.in/wp-content/uploads/2016/09/super_hero_whatsapp_background_by_x_ama-d8fr7iz.jpg'); \r\n   /* padding:50px; */\r\n   font-family: cursive;\r\n }\r\n.alignleft {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.alignright {\r\n    float: right;\r\n    margin-left: 15px;\r\n}\r\n.aligncenter {\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n}\r\na:focus { outline: 0 solid }\r\nimg {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.fix { overflow: hidden }\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 0 0 15px;\r\n    font-weight: 700;\r\n}\r\nhtml,\r\nbody { height: 100% }\r\n\r\na {\r\n    transition: 0.3s;\r\n    color: #333;\r\n}\r\na:hover { text-decoration: none }\r\n\r\n\r\n\r\n.search-box{margin:80px auto;position:absolute;}\r\n.caption{margin-bottom:50px;}\r\n.loginForm input[type=text], .loginForm input[type=password]{\r\n\tmargin-bottom:10px;\r\n}\r\n.loginForm input[type=submit]{\r\n\tbackground:#fb044a;\r\n\tcolor:#fff;\r\n    font-weight:700;\r\n    margin-bottom:10px;\r\n    padding: 5px 100px;\r\n}\r\n.loginForm input[type=submit]:focus{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\r\n\t\r\n}\r\n.loginForm input[type=submit]:hover{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\t\r\n}\r\n\r\n#pswd_info {\r\n\tbackground: #dfdfdf none repeat scroll 0 0;\r\n\tcolor: #fff;\r\n\tleft: 20px;\r\n\tposition: absolute;\r\n\ttop: 115px;\r\n}\r\n#pswd_info h4{\r\n    background: black none repeat scroll 0 0;\r\n    display: block;\r\n    font-size: 14px;\r\n    letter-spacing: 0;\r\n    padding: 17px 0;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n#pswd_info ul {\r\n    list-style: outside none none;\r\n}\r\n#pswd_info ul li {\r\n   padding: 10px 45px;\r\n}\r\n\r\n.valid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/vq43s2wib/valid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: green;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n.invalid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/olmaj1p8z/invalid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: red;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n\r\n#pswd_info::before {\r\n    background: #dfdfdf none repeat scroll 0 0;\r\n    content: \"\";\r\n    height: 25px;\r\n    left: -13px;\r\n    margin-top: -12.5px;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    width: 25px;\r\n}\r\n#pswd_info {\r\n    display:none;\r\n}\r\n\r\n\r\n/* .miboton\r\n{\r\n    background-color: rgb(5, 50, 182);\r\n    border: 1px solidrgb(5, 50, 182);\r\n    border-radius: 15px;\r\n    -moz-border-radius: 15px;\r\n    -webkit-border-radius: 15px;\r\n  -ms-border-radius: 15px;\r\n  -o-border-radius: 15px;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    line-height: 48px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    width: 240px;\r\n    margin-bottom: 5px;\r\n    \r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.html":
/***/ (function(module, exports) {

module.exports = "<body align=\"center\">\r\n\r\n    <app-menu-barra></app-menu-barra>\r\n  <div>\r\n      <h1>Sala de juegos</h1>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <h3>Informacion sobre el autor:</h3>\r\n      Nombre: Adiliberti pablo<br>\r\n      Mail: Pablo.adiliberti@hotmail.com<br>\r\n      gitHub:PabloAdiliberti<br>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <h3>Informacion sobre el juego:</h3>\r\n      Traduce: Es un juego donde se muestra un imagen y \r\n      se debe traducir a ingles en el menor tiempo posible.\r\n      <br>\r\n      <img src=\"../assets/traductor.jpg\" style='width:170px;height:160px' class=\"img-responsive img-box img-thumbnail\"> \r\n\r\n      <br>\r\n      <br>\r\n  </div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/componentes/quien-soy/quien-soy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienSoyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienSoyComponent = (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    return QuienSoyComponent;
}());
QuienSoyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quien-soy',
        template: __webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/quien-soy/quien-soy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuienSoyComponent);

//# sourceMappingURL=quien-soy.component.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/registrar/registrar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base CSS\r\n.alignleft {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.alignright {\r\n    float: right;\r\n    margin-left: 15px;\r\n}\r\n.aligncenter {\r\n    display: block;\r\n    margin: 0 auto 15px;\r\n}\r\n\r\n.fix { overflow: hidden }\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 0 0 15px;\r\n    font-weight: 700;\r\n}\r\nhtml,\r\nbody { height: 100% }\r\n\r\na {\r\n    -moz-transition: 0.3s;\r\n    -o-transition: 0.3s;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    color: #333;\r\n}\r\na:hover { text-decoration: none }\r\n\r\n\r\n\r\n.search-box{margin:80px auto;position:absolute;}\r\n.caption{margin-bottom:50px;}\r\n.loginForm input[type=text], .loginForm input[type=password]{\r\n\tmargin-bottom:10px;\r\n}\r\n.loginForm input[type=submit]{\r\n\tbackground:#fb044a;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\r\n\t\r\n}\r\n.loginForm input[type=submit]:focus{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\r\n\t\r\n}\r\n.loginForm input[type=submit]:hover{\r\n\tbackground:#C00003;\r\n\tcolor:#fff;\r\n\tfont-weight:700;\t\r\n}\r\n\r\n\r\n#pswd_info {\r\n\tbackground: #dfdfdf none repeat scroll 0 0;\r\n\tcolor: #fff;\r\n\tleft: 20px;\r\n\tposition: absolute;\r\n\ttop: 115px;\r\n}\r\n#pswd_info h4{\r\n    background: black none repeat scroll 0 0;\r\n    display: block;\r\n    font-size: 14px;\r\n    letter-spacing: 0;\r\n    padding: 17px 0;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n#pswd_info ul {\r\n    list-style: outside none none;\r\n}\r\n#pswd_info ul li {\r\n   padding: 10px 45px;\r\n}\r\n\r\n.valid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/vq43s2wib/valid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: green;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n.invalid {\r\n\tbackground: rgba(0, 0, 0, 0) url(\"https://s19.postimg.org/olmaj1p8z/invalid.png\") no-repeat scroll 2px 6px;\r\n\tcolor: red;\r\n\tline-height: 21px;\r\n\tpadding-left: 22px;\r\n}\r\n\r\n\r\n#pswd_info::before {\r\n    background: #dfdfdf none repeat scroll 0 0;\r\n    content: \"\";\r\n    height: 25px;\r\n    left: -13px;\r\n    margin-top: -12.5px;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: rotate(45deg);\r\n    width: 25px;\r\n}\r\n#pswd_info {\r\n    display:none;\r\n} */\r\n\r\n.wrapper {    \r\n\tmargin-top: 80px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 420px;\r\n  padding: 30px 38px 66px;\r\n  margin: 0 auto;\r\n  background-color: #eee;\r\n  border: 3px dotted rgba(0,0,0,0.1);  \r\n  }\r\n\r\n.form-signin-heading {\r\n  text-align:center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  margin-bottom: 0px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\ninput[type=\"password\"] {\r\n  margin-bottom: 0px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\ninput[type=\"select\"] {\r\n    margin-bottom: 20px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n\r\n.colorgraph {\r\n  height: 7px;\r\n  border-top: 0;\r\n  background: #c4e17f;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/componentes/registrar/registrar.component.html":
/***/ (function(module, exports) {

module.exports = "<body clase = \"miclase\" background=\"../assets/2.jpg\" >\n<div class = \"container\">\n\t\t<div class=\"wrapper\">\n\t\t\t<form action=\"\" method=\"post\" name=\"Login_Form\" class=\"form-signin\">       \n\t\t\t\t<h3 class=\"form-signin-heading\">Registrar</h3>\n\t\t\t\t  <hr class=\"colorgraph\"><br>\n\t\t\t\t   \n\t\t\t\t  <input type=\"text\"  class=\"form-control\"  name=\"usuario\" [(ngModel)]=\"miUsuario.usuario\" placeholder=\"Nombre\"/>\n\t\t\t\t  <input type=\"password\" id=\"paw\" class=\"form-control\" [(ngModel)]=\"miUsuario.clave\" name=\"pass\" placeholder=\"Clave\">\n\t\t\t\t  <input type=\"password\" id=\"paw\" class=\"form-control\" [(ngModel)]=\"miUsuario.clave2\" name=\"pass\" placeholder=\"Repetir clave\">\n\t\t\t\t  <button type=\"submit\" (click)=\"miUsuario.registrar()\" id=\"submit\"  class=\"btn btn-lg btn-primary btn-block\" >Registrar</button>\n\t\t\t\t  <button type=\"submit\" (click)=\"Cancelar()\" id=\"submit\"  class=\"btn btn-lg btn-primary btn-block\" >Cancelar</button>\n\t\t\t</form>\t\t\t\n\t\t</div>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/componentes/registrar/registrar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Clase_login__ = __webpack_require__("../../../../../src/app/Clase/login.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrarComponent = (function () {
    function RegistrarComponent(route, router, _auth) {
        this.route = route;
        this.router = router;
        this._auth = _auth;
        this.Mensaje = "";
        this.miUsuario = new __WEBPACK_IMPORTED_MODULE_3__Clase_login__["a" /* Login */](route, router, _auth);
    }
    RegistrarComponent.prototype.Registrar = function () {
        try {
            var result = this._auth.auth.createUserWithEmailAndPassword(this.miUsuario.usuario, this.miUsuario.clave);
            this.Mensaje = this.miUsuario.usuario + " Fue ingresado Exitosamente!";
            // this.ingreso = true;
        }
        catch (e) {
            // this.ingreso = false;
            // console.error(e);
            // this.Mensaje=e;
        }
    };
    RegistrarComponent.prototype.Cancelar = function () {
        this.router.navigate(['/login']);
    };
    RegistrarComponent.prototype.ngOnInit = function () {
    };
    return RegistrarComponent;
}());
RegistrarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registrar',
        template: __webpack_require__("../../../../../src/app/componentes/registrar/registrar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/componentes/registrar/registrar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], RegistrarComponent);

var _a, _b, _c;
//# sourceMappingURL=registrar.component.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/listado.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListadoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Clase_juego__ = __webpack_require__("../../../../../src/app/Clase/juego.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoService = (function () {
    function ListadoService() {
    }
    ListadoService.prototype.listar = function () {
        var juego1;
        var juego2;
        var juego3;
        var juego4;
        var juego5;
        var juego6;
        var miArray = new Array();
        juego1 = new __WEBPACK_IMPORTED_MODULE_1__Clase_juego__["a" /* Juego */]("pablo1", "jugador1");
        juego2 = new __WEBPACK_IMPORTED_MODULE_1__Clase_juego__["a" /* Juego */]("pablo2", "jugador2");
        juego3 = new __WEBPACK_IMPORTED_MODULE_1__Clase_juego__["a" /* Juego */]("pablo3", "jugador3");
        juego4 = new __WEBPACK_IMPORTED_MODULE_1__Clase_juego__["a" /* Juego */]("pablo4", "jugador4");
        juego5 = new __WEBPACK_IMPORTED_MODULE_1__Clase_juego__["a" /* Juego */]("pablo5", "jugador5");
        juego6 = new __WEBPACK_IMPORTED_MODULE_1__Clase_juego__["a" /* Juego */]("pablo6", "jugador6");
        miArray.push(juego1);
        miArray.push(juego2);
        miArray.push(juego3);
        miArray.push(juego4);
        miArray.push(juego5);
        miArray.push(juego6);
        return miArray;
    };
    return ListadoService;
}());
ListadoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ListadoService);

//# sourceMappingURL=listado.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreService = (function () {
    function StoreService(store) {
        this.store = store;
    }
    return StoreService;
}());
StoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]) === "function" && _a || Object])
], StoreService);

var _a;
//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map