function sumar(a, b) {
    return a + b;
}


let total = sumar(10, 20);

console.log('Total: ' + total);

//__________________________________________________________________________

function imprimirTabla(base, limite) {

    for (let i = 1; i <= limite; i++) {

        let resultado = base * i;

        console.log(base + ' x ' + i + ' = ' + resultado);

    }

}

imprimirTabla(10, 5);
imprimirTabla(3, 10);