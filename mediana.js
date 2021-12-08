const lista1 = [
    500,
    4000000,
    100,
    200
];

function comparar(a,b) {
    return a - b;
}

lista1.sort(comparar);

function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );
        
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
}