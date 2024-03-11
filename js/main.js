let option = null;
let resultado;
let ans;

option = prompt('¿Qué deseas hacer?\n\n1. Sumar.\n2. Restar.\n3. Multiplicar.\n4. Dividir.\n\nDe lo contrario, ingresa "salir" si quieres salir.');

while (option.toLowerCase() !== "salir") {
    switch (option) {
        case "1":
            ans = sumar();
            break;
        case "2":
            ans = restar();
            break;
        case "3":
            ans = multiplicar();
            break;
        case "4":
            ans = dividir();
            break;
        case "5":
            option = prompt('¿Qué deseas hacer con ' + ans + '?\n\n1. Sumar.\n2. Restar.\n3. Multiplicar.\n4. Dividir.\n\nDe lo contrario, ingresa "salir" si quieres salir.');
            while (option.toLowerCase() !== "salir") {
                switch (option) {
                    case "1":
                        ans = sumarAns(ans);
                        break;
                    case "2":
                        ans = restarAns(ans);
                        break;
                    case "3":
                        ans = multiplicarAns(ans);
                        break;
                    case "4":
                        ans = dividirAns(ans);
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


function sumarAns(ans){
    num2 = pedirNumero("Ingrese el 2° sumando");
    resultado = ans + num2;
    if (!isNaN(resultado)) {
        console.log("La suma de " + ans + " + " + num2 + " = " + resultado);
        alert("La suma de " + ans + " + " + num2 + " = " + resultado);
        return resultado;
    } else {
        alert("Error!");
        return ans;
    }
}

function restarAns(ans){
    num2 = pedirNumero("Ingrese el sustraendo");
    resultado  = ans - num2;
    if (!isNaN(resultado)) {
        console.log("La diferencia de " + ans + " - " + num2 + " = " + resultado);
        alert("La diferencia de " + ans + " - " + num2 + " = " + resultado);
        return resultado;
    } else {
        alert("Error!");
        return ans;
    }
}

function dividirAns(ans){
    num2 = pedirNumero("Ingrese el dividendo");
    resultado = ans / num2;
    if (!isNaN(resultado)) {
        console.log("El cociente de " + ans + " / " + num2 + " = " + resultado);
        alert("El cociente de " + ans + " / " + num2 + " = " + resultado);
        return resultado;
    } else {
        alert("Error!");
        returnans;
    }
}

function multiplicarAns(ans){
    num2 = pedirNumero("Ingrese el multiplicador");
    resultado = ans * num2;
    if (!isNaN(resultado)) {
        console.log("El producto de " + ans + " * " + num2 + " = " + resultado);
        alert("El producto de " + ans + " * " + num2 + " = " + resultado);
        return resultado;
    } else {
        alert("Error!");
        return ans;
    }
}

function sumar(){
    let num1, num2;
    num1 = pedirNumero("Ingrese el 1° sumando");
    num2 = pedirNumero("Ingrese el 2° sumando");
    resultado = num1 + num2;
    if (!isNaN(resultado)) {
        console.log("La suma de " + num1 + " + " + num2 + " = " + resultado);
        alert("La suma de " + num1 + " + " + num2 + " = " + resultado);
        return resultado;
    } else {
        alert("Error!");
        return;
    }
}

function restar(){
    let num1, num2;
    num1 = pedirNumero("Ingrese el minuendo");
    num2 = pedirNumero("Ingrese el sustraendo");
    resultado  = num1 - num2;
    if (!isNaN(resultado)) {
        console.log("La diferencia de " + num1 + " - " + num2 + " = " + resultado);
        alert("La diferencia de " + num1 + " - " + num2 + " = " + resultado);
        return resultado;
    } else {
        alert("Error!");
        return;
    }
}

function dividir(){
    let num1, num2;
    num1 = pedirNumero("Ingrese el dividendo");
    num2 = pedirNumero("Ingrese el divisor");
    resultado = num1 / num2;
    if (!isNaN(resultado)) {
    console.log("El cociente de " + num1 + " / " + num2 + " = " + resultado);
    alert("El cociente de " + num1 + " / " + num2 + " = " + resultado);
    return resultado;
    } else {
        alert("Error!");
        return;
    }
}

function multiplicar(){
    let num1, num2;
    num1 = pedirNumero("Ingrese el multiplicando");
    num2 = pedirNumero("Ingrese el multiplicador");
    resultado = num1 * num2;
    if (!isNaN(resultado)) {
        console.log("El producto de " + num1 + " * " + num2 + " = " + resultado);
        alert("El producto de " + num1 + " * " + num2 + " = " + resultado);
        return resultado;
    } else {
        alert("Error!");
        return ans;
    }
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