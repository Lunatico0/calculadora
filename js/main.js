let option = null;
let resultado;
let num1, num2;

option = prompt('¿Qué deseas hacer?\n\n1. Sumar.\n2. Restar.\n3. Dividir.\n4. Multiplicar.\n\nDe lo contrario, ingresa "salir" si quieres salir.');

while (option.toLowerCase() !== "salir") {
    switch (option) {
        case "1":
            suma();
            break;
        case "2":
            resta();
            break;
        case "3":
            division();
            break;
        case "4":
            multiplicacion();
            break;
        default:
            alert("Opción no válida. Inténtalo de nuevo.");
    }
    option = prompt('¿Qué deseas hacer?\n\n1. Sumar.\n2. Restar.\n3. Dividir.\n4. Multiplicar.\n\nDe lo contrario, ingresa "salir" si quieres salir.');
}

function suma(){
    num1 = Number(prompt("Ingrese el 1° sumando"));
    num2 = Number(prompt("Ingrese el 2° sumando"));
    resultado = num1 + num2;
    console.log("La suma de " + num1 + " + " + num2 + " = " + resultado);
    alert("La suma de " + num1 + " + " + num2 + " = " + resultado);
}

function resta(){
    num1 = Number(prompt("Ingrese el minuendo"));
    num2 = Number(prompt("Ingrese el sustraendo"));
    resultado  = num1 - num2;
    console.log("La diferencia de " + num1 + " - " + num2 + " = " + resultado);
    alert("La diferencia de " + num1 + " - " + num2 + " = " + resultado);
}

function division(){
    num1 = Number(prompt("Ingrese el dividendo"));
    num2 = Number(prompt("Ingrese el divisor"));
    resultado = num1 / num2;
    console.log("El cociente de " + num1 + " / " + num2 + " = " + resultado);
    alert("El cociente de " + num1 + " / " + num2 + " = " + resultado);
}

function multiplicacion(){
    num1 = Number(prompt("Ingrese el multiplicando"));
    num2 = Number(prompt("Ingrese el multiplicador"));
    resultado = num1 * num2;
    console.log("El producto de " + num1 + " * " + num2 + " = " + resultado);
    alert("El producto de " + num1 + " * " + num2 + " = " + resultado);
}