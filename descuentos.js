const preciOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
    return precioConDescuento;
}
/*
console.log({
    preciOriginal,
    descuento,
    porcentajePrecioDescuento,
    precioConDescuento
});*/