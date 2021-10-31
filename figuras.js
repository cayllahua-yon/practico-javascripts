// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML para Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Aquí interactuamos con el HTML para Triangulo

  function calcularPerimetroTriangulo() {
  const inputLadoA = document.getElementById("InputTrianguloLadoA");
  const valueA = Number(inputLadoA.value);
  console.log(typeof valueA)

  const inputLadoB = document.getElementById("InputTrianguloLadoB");
  const valueB = Number( inputLadoB.value);

  const inputLadoBase = document.getElementById("InputTrianguloLadoBase");
  const valueBase =  Number( inputLadoBase.value);

    if(valueA == valueB){
      const perimetroTrianguloA = perimetroTriangulo(valueA, valueB, valueBase);
      alert(perimetroTrianguloA);
      console.log(typeof perimetroTrianguloA)
    }else{
      alert("el triángulo isósceles require de 2 lados Iguales. intentelo de nuevo ");
    }
  // alert(perimetroTriangulo);
}

function calcularAreaTriangulo() {
  const inputLadoH = document.getElementById("InputTrianguloLadoH");
  const valueH = inputLadoH.value;

  const inputLadoBase2 = document.getElementById("InputTrianguloLadoBase2");
  const valueBase2 = inputLadoBase2.value;

  const area = areaTriangulo(valueH, valueBase2);
  alert(area);
}

