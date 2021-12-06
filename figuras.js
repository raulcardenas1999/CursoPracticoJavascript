//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();
//Código del triángulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triangulo mide: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm "
);
const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroCuadrado + "cm");
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo + "cm2");
console.groupEnd();
//Codigo del circulo
console.group("Triangulos");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El radio del circulo es: " + radioCirculo + "cm");
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
console.log("PI es: " + PI);
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
console.log("El área del circulo es: " + areaCirculo + "cm2");
console.groupEnd();