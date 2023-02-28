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
    public ej3() {
        let dia : string = 'D';
        let turno : string = 'tarde';
        let minutosExtra : number = 0;
        let cobroLlamada : number = 0;
        let minutosLlamada : number = 0;
        let cobroTotal : number = 0;
        let paquete1 : number = 1;
        let paquete2 : number = 0.80;
        let paquete3 : number = 0.70;
        minutosLlamada = Number(prompt('Ingresa la cantidad de minutos que duro tu llamada'));
        if (minutosLlamada <= 5) {
            cobroLlamada = paquete1;
        }
        if (minutosLlamada >= 6 && minutosLlamada <= 8) {
            cobroLlamada = paquete1 + paquete2;
        }
        if (minutosLlamada >= 9 && minutosLlamada <= 10) {
            cobroLlamada = paquete1 + paquete2 + paquete3;
        }
        if (minutosLlamada > 10) {
            minutosExtra = minutosLlamada - 10;
            cobroLlamada = (minutosExtra * 0.50) + (paquete1 + paquete2 + paquete3);
        }
        if (dia != 'D') {
            if (turno != 'tarde') {
                cobroTotal = cobroLlamada + (cobroLlamada * 0.15);
            } else {
                cobroTotal = cobroLlamada + (cobroLlamada * 0.10);
            }
        } else {
            cobroTotal = cobroLlamada + (cobroLlamada * 0.03);
        }
        console.log(`El cobro total de tu llamada es de ${cobroTotal}`);
    }
}
let objeto = new V3();
objeto.ej3();