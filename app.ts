class V3 {
    public ej1() {
        let uva1 : number = 1;
        let uva2 : number = 2;
        let tamanio1 : number = 1;
        let tamanio2 : number = 2;
        let pregunta = parseInt(prompt('Ingresa que tipo de uva se va a vender\n1. Tipo A\n2. Tipo B') ?? "");
        let opcionTamanio = parseInt(prompt('Ingresa el tamaño de uva a vender\n1. Tamaño 1\n2. Tamaño 2') ?? "");
        let costoUva : number = Number(prompt('Ingresa el costo del kilo de uva'));
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
        if(pregunta == uva2) {
            if (opcionTamanio == tamanio1) {
                costoUva = costoUva - 0.30;
                console.log('El total es ' + costoUva);
            }
            if(opcionTamanio == tamanio2) {
                costoUva = costoUva - 0.50;
                console.log('El total es ' + costoUva);
            }
        }
    }
    public ej2() {
        let numeroEstudiantes : number;
        let total : number = 0;
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
        console.log('El total a pagar a la agencia por todos los estudiantes es de ' + total + ' euros' + '\nEl total a pagar al autobus es de 4000 euros y con ' + numeroEstudiantes + ' estudiantes se debe pagar ' + (4000/numeroEstudiantes) + ' euros');
    }
}
let objeto = new V3();
// objeto.ej2();