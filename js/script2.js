// variables
//ecma 5
var nombre = "zuly";

nombre = "Camila"; //Permite modificar su valor

console.log(nombre);

// ecma 6

let nombrelet = "Pedro"; //a nivel de bloque
console.log(nombrelet);

// alcance global: se puede modificar en cualquier seccion del código

var global = 0; //entra como 0 sale como 4

function varGlobal() {
    for (var i = 0; i < 5; i++) {
        global = i; // en cada interacción i se le asigna a global

    }
}

varGlobal();
console.log(global);

//alcance local

function varLocal() {
    var local = "Hola mundo"; //variable local
    console.log(local);
}

varLocal();
// console.log(local); arroja local indefinida
var x = 90;

function varPrueba() {
    var x = 70;
    if (true) {
        var x = 50;
        console.log(x); //aquí aparece 50
    }
    console.log(x); //aquí aparece 50
}

console.log(x);

let y = 80;

function letPrueba() {
    let y = 30;
    if (true) {
        let y = 60;
        console.log(y); //aquí aparece 60
    }
    console.log(y); //aquí aparece 30
}

console.log(y);

// funciones tradicionales

function soyUnaFuncion(num1, num2) {
    let resultado;
    resultado = num1 + num2;
    return resultado;
}

// Funciones anónimas
//no tienen nombre y se alojan en el interior de un evento o una variable

let sumar = (a, b) => a + b;
console.log(sumar(10, 15));

let hola = function() {
    return "Hola";
}
console.log(hola());

// condicionales: flujo del programa a partir de una condición

let color = prompt("Ingrese un color en inglés");

if (color == "red") {
    document.write("<h1 style='color:red'> El color es Red </h1>");
} else {
    document.write("<h1 style='color: " + color + " '> El color es " + color + "</h1>");
}

// operadores de comparación

let year = 2020;

if (year != 2020) {
    document.write("El año es 2020");
} else {
    document.write("El año es diferente a 2020");
}

// Operadores lógicos AND && / OR || / NOT !

let nota = 3.7;

if (nota >= 4.5 && nota < 5) {
    document.write("Felicidades has ganado la beca");
} else if (nota < 4.5 && nota >= 0) {
    document.write("No se ganó la beca");
} else {
    document.write("Ingrese un número entre 0 y 5");
}

let pais = "colombia";

if (pais == "colombia" || pais == "mexico") {
    document.write("El país pertenece a latinoamérica");
} else {
    document.write("El país no pertenece a latinoamérica");
}

// switch


let num1 = parseFloat(prompt("Ingrese un número"));
let num2 = parseFloat(prompt("Ingrese otro número"));
var operacion = prompt("Escoa una operación: suma , resta, multiplicacion , division");

switch (operacion) {
    case "suma":
        document.write("El resultado es: " + (num1 + num2));
        break;
    case "resta":
        document.write("El resultado es: " + (num1 - num2));
        break;
    case "multiplicacion":
        document.write("El resultado es: " + (num1 * num2));
        break;
    case "division":
        document.write("El resultado es: " + (num1 / num2));
        break;
    default:
        break;
}