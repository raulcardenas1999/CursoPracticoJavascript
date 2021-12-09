const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const lista1Count = {};

lista1.map(
    function(elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;   
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function(valorAcumulado,nuevoValor) {
        return nuevoValor[1] - valorAcumulado[1];
    }
); // Nos permite convertir el objeto en array: entries

const moda = lista1Array[0];
