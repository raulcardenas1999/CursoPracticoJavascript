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

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("input__price");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("input__Discount");
    const DiscountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,DiscountValue);
    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento
}