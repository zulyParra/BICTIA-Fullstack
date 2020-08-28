let boton_sumar;
let boton_restar;
let boton_multiplicar;
let boton_dividir;
let numero_a;
let numero_b;
let resultado;
let mensaje_error1;
let mensaje_error2;

numero_a = document.getElementById("numero_a");

numero_b = document.getElementById("numero_b");

boton_sumar = document.getElementById("suma");

boton_restar = document.getElementById("restar");

boton_multiplicar = document.getElementById("multiplicar");

boton_dividir = document.getElementById("dividir");

resultado = document.getElementById("resultado");

mensaje_error1 = document.getElementById("mensaje_error1");

mensaje_error2 = document.getElementById("mensaje_error2");

boton_sumar.addEventListener("click", function() {
    let prueba;
    let a = parseFloat(numero_a.value);
    let b = parseFloat(numero_b.value);

    if (isNaN(a)) {
        mensaje_error1.innerHTML = "Debe ingresar un número";

    } else {
        mensaje_error1.innerHTML = " ";

    }

    if (isNaN(b)) {
        mensaje_error2.innerHTML = "Debe ingresar un número";

    } else {
        mensaje_error2.innerHTML = " ";

    }

    prueba = suma(a, b);
    resultado.innerHTML = prueba;
});

boton_restar.addEventListener("click", function() {
    let prueba;
    let a = parseFloat(numero_a.value);
    let b = parseFloat(numero_b.value);
    prueba = resta(a, b);
    resultado.innerHTML = prueba;
});

boton_multiplicar.addEventListener("click", function() {
    let prueba;
    let a = parseFloat(numero_a.value);
    let b = parseFloat(numero_b.value);
    prueba = multiplicacion(a, b);
    resultado.innerHTML = prueba;
});

boton_dividir.addEventListener("click", function() {
    let prueba;
    let a = parseFloat(numero_a.value);
    let b = parseFloat(numero_b.value);
    prueba = division(a, b);
    resultado.innerHTML = prueba;
});

function suma(a, b) {
    let resultado;
    resultado = a + b;
    return resultado;
}

function resta(a, b) {
    let resultado;
    resultado = a - b;
    return resultado;
}

function multiplicacion(a, b) {
    let resultado;
    resultado = a * b;
    return resultado;
}

function division(a, b) {
    let resultado;
    resultado = a / b;
    return resultado;
}