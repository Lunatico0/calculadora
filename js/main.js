let option = null;
let resultado;
let num1, num2;

option = prompt('¿Qué deseas hacer?\n\n1. Sumar.\n2. Restar.\n3. Dividir.\n4. Multiplicar.\n\nDe lo contrario, ingresa "salir" si quieres salir.');

while (option.toLowerCase() !== "salir") {
    switch (option) {
        case "1":
            num1 = Number(prompt("Ingrese el 1° sumando"));
            num2 = Number(prompt("Ingrese el 2° sumando"));
            console.log(resultado = num1 + num2);
            alert("La suma de " + num1 + " + " + num2 + " = " + resultado);
            break;
        case "2":
            num1 = Number(prompt("Ingrese el minuendo"));
            num2 = Number(prompt("Ingrese el sustraendo"));
            console.log(resultado = num1 - num2);
            alert("La diferencia de " + num1 + " - " + num2 + " = " + resultado);
            break;
        case "3":
            num1 = Number(prompt("Ingrese el dividendo"));
            num2 = Number(prompt("Ingrese el divisor"));
            console.log(resultado = num1 / num2);
            alert("El cociente de " + num1 + " / " + num2 + " = " + resultado);
            break;
        case "4":
            num1 = Number(prompt("Ingrese el multiplicando"));
            num2 = Number(prompt("Ingrese el multiplicador"));
            console.log(resultado = num1 * num2);
            alert("El producto de " + num1 + " * " + num2 + " = " + resultado);
            break;
        default:
            alert("Opción no válida. Inténtalo de nuevo.");
    }
    option = prompt('¿Qué deseas hacer?\n\n1. Sumar.\n2. Restar.\n3. Dividir.\n4. Multiplicar.\n\nDe lo contrario, ingresa "salir" si quieres salir.');
}