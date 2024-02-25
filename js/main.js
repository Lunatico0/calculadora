let option = null;
let resultado;
let ans;

option = prompt('¿Qué deseas hacer?\n\n1. Sumar.\n2. Restar.\n3. Multiplicar.\n4. Dividir.\n\nDe lo contrario, ingresa "salir" si quieres salir.');

while (option.toLowerCase() !== "salir") {
    switch (option) {
        case "1":
            ans = suma();
            break;
        case "2":
            ans = resta();
            break;
        case "3":
            ans = multiplicacion();
            break;
        case "4":
            ans = division();
            break;
        case "5":
            option = prompt('¿Qué deseas hacer con ' + ans + '?\n\n1. Sumar.\n2. Restar.\n3. Multiplicar.\n4. Dividir.\n\nDe lo contrario, ingresa "salir" si quieres salir.');
            while (option.toLowerCase() !== "salir") {
                switch (option) {
                    case "1":
                        ans = sumaAns(ans);
                        break;
                    case "2":
                        ans = restaAns(ans);
                        break;
                    case "3":
                        ans = multiplicacionAns(ans);
                        break;
                    case "4":
                        ans = divisionAns(ans);
                        break;
                    default:
                        alert("Opción no válida. Inténtalo de nuevo.");
                }
                option = prompt('¿Qué deseas hacer con ' + ans + '?\n\n1. Sumar.\n2. Restar.\n3. Multiplicar.\n4. Dividir.\n\nDe lo contrario, ingresa "salir" si quieres salir.');
            }
            break;
        default:
            alert("Opción no válida. Inténtalo de nuevo.");
    }
    option = prompt('¿Qué deseas hacer?\n\n1. Sumar.\n2. Restar.\n3. Multiplicar.\n4. Dividir.\n5. ANS.\n\nDe lo contrario, ingresa "salir" si quieres salir.');
}


function sumaAns(ans){
    num2 = pedirNumero("Ingrese el 2° sumando");
    resultado = ans + num2;
    console.log("La suma de " + ans + " + " + num2 + " = " + resultado);
    alert("La suma de " + ans + " + " + num2 + " = " + resultado);
    return resultado;
}

function restaAns(ans){
    num2 = pedirNumero("Ingrese el sustraendo");
    resultado  = ans - num2;
    console.log("La diferencia de " + ans + " - " + num2 + " = " + resultado);
    alert("La diferencia de " + ans + " - " + num2 + " = " + resultado);
    return resultado;
}

function divisionAns(ans){
    num2 = pedirNumero("Ingrese el dividendo");
    resultado = ans / num2;
    console.log("El cociente de " + ans + " / " + num2 + " = " + resultado);
    alert("El cociente de " + ans + " / " + num2 + " = " + resultado);
    return resultado;
}

function multiplicacionAns(ans){
    num2 = pedirNumero("Ingrese el multiplicador");
    resultado = ans * num2;
    console.log("El producto de " + ans + " * " + num2 + " = " + resultado);
    alert("El producto de " + ans + " * " + num2 + " = " + resultado);
    return resultado;
}

function suma(){
    let num1, num2;
    num1 = pedirNumero("Ingrese el 1° sumando");
    num2 = pedirNumero("Ingrese el 2° sumando");
    resultado = num1 + num2;
    console.log("La suma de " + num1 + " + " + num2 + " = " + resultado);
    alert("La suma de " + num1 + " + " + num2 + " = " + resultado);
    return resultado;
}

function resta(){
    let num1, num2;
    num1 = pedirNumero("Ingrese el minuendo");
    num2 = pedirNumero("Ingrese el sustraendo");
    resultado  = num1 - num2;
    console.log("La diferencia de " + num1 + " - " + num2 + " = " + resultado);
    alert("La diferencia de " + num1 + " - " + num2 + " = " + resultado);
    return resultado;
}

function division(){
    let num1, num2;
    num1 = pedirNumero("Ingrese el divisor");
    num2 = pedirNumero("Ingrese el dividendo");
    resultado = num1 / num2;
    console.log("El cociente de " + num1 + " / " + num2 + " = " + resultado);
    alert("El cociente de " + num1 + " / " + num2 + " = " + resultado);
    return resultado;
}

function multiplicacion(){
    let num1, num2;
    num1 = pedirNumero("Ingrese el multiplicando");
    num2 = pedirNumero("Ingrese el multiplicador");
    resultado = num1 * num2;
    console.log("El producto de " + num1 + " * " + num2 + " = " + resultado);
    alert("El producto de " + num1 + " * " + num2 + " = " + resultado);
    return resultado;
}

function pedirNumero(mensaje) {
    let input;
    do {
        input = Number(prompt(mensaje));
        if (isNaN(input)) {
            alert("Por favor, ingresa un número válido.");
        }
    } while (isNaN(input));
    return input;
}