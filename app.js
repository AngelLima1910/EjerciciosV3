var V3 = /** @class */ (function () {
    function V3() {
    }
    V3.prototype.ej1 = function () {
        var _a, _b;
        var uva1 = 1;
        var uva2 = 2;
        var tamanio1 = 1;
        var tamanio2 = 2;
        var pregunta = parseInt((_a = prompt('Ingresa que tipo de uva se va a vender\n1. Tipo A\n2. Tipo B')) !== null && _a !== void 0 ? _a : "");
        var opcionTamanio = parseInt((_b = prompt('Ingresa el tamaño de uva a vender\n1. Tamaño 1\n2. Tamaño 2')) !== null && _b !== void 0 ? _b : "");
        var costoUva = Number(prompt('Ingresa el costo del kilo de uva'));
        if (pregunta == uva1) {
            if (opcionTamanio == tamanio1) {
                costoUva = costoUva + 0.20;
                console.log('El total es ' + costoUva);
            }
            if (opcionTamanio == tamanio2) {
                costoUva = costoUva + 0.30;
                console.log('El total es ' + costoUva);
            }
        }
        if (pregunta == uva2) {
            if (opcionTamanio == tamanio1) {
                costoUva = costoUva - 0.30;
                console.log('El total es ' + costoUva);
            }
            if (opcionTamanio == tamanio2) {
                costoUva = costoUva - 0.50;
                console.log('El total es ' + costoUva);
            }
        }
    };
    V3.prototype.ej2 = function () {
        var numeroEstudiantes;
        var total = 0;
        numeroEstudiantes = Number(prompt('Ingresa la cantidad de estudiantes que irán al viaje'));
        if (numeroEstudiantes >= 100) {
            total = numeroEstudiantes * 65;
        }
        if (numeroEstudiantes >= 50 && numeroEstudiantes <= 99) {
            total = numeroEstudiantes * 70;
        }
        if (numeroEstudiantes >= 30 && numeroEstudiantes <= 49) {
            total = numeroEstudiantes * 95;
        }
        if (numeroEstudiantes < 30) {
            total = numeroEstudiantes * 105;
        }
        console.log('El total a pagar a la agencia por todos los estudiantes es de ' + total + ' euros' + '\nEl total a pagar al autobus es de 4000 euros y con ' + numeroEstudiantes + ' estudiantes se debe pagar ' + (4000 / numeroEstudiantes) + ' euros');
    };
    return V3;
}());
var objeto = new V3();
// objeto.ej2();
