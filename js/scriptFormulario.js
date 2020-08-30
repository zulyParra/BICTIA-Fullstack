// const FORM_CONTACT = document.getElementById('form-contact');
// console.log(FORM_CONTACT);
// let mensajeAlerta = document.getElementById('mensajeAlerta');

// function cancelarEvento(event) {
//     event.preventDefault();
// }

// FORM_CONTACT.addEventListener('submit', cancelarEvento);

// FORM_CONTACT.addEventListener('submit', function() {
//     let nombre = FORM_CONTACT['nombre'].value;
//     let apellido = FORM_CONTACT['apellido'].value;
//     let email = FORM_CONTACT['email'].value;
//     let emailValidation = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;

//     let mensajeError = '';
//     let validacion = true;

//     if (nombre.lenght < 6) {
//         mensajeError += 'El nombre debe tener más de seis caracteres';
//         mensajeError += '<br>'
//         validacion = false;
//     } else if (apellido.lenght < 6) {
//         mensajeError += 'El apellido debe tener más de seis caracteres';
//         mensajeError += '<br>'
//         validacion = false;
//     } else if (emailValidation.test(email) == false) {
//         mensajeError += 'Formato de correo inválido';
//         mensajeError += '<br>'
//         validacion = false;
//     } else {
//         validacion = true;
//     }

//     if (validacion == false) {
//         mensajeAlerta.hidden = false;
//         mensajeAlerta.innerHTML = mensajeError;
//     } else {
//         swal("Buen trabajo!", "You clicked the button!", "success");
//         setTimeout(() => {
//             window.location = "./calculadora.html";
//         }, 2000);
//     }
// });


let nombre = document.getElementById("nombre").value; //capturo el valor del input
let apellido = document.getElementById("apellido").value;
let email = document.getElementById("email").value;
let emailValidation = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
console.log(nombre);

function validarFormulario(event) {
    event.preventDefault(); //previene la ejecución por defecto evitando que se envíe el formulario sin los datos correctos

    let mensajeError = '';
    let validacion = true;

    if ((nombre.lenght < 6) || (nombre == "")) {
        mensajeError += 'El nombre debe tener más de seis caracteres';
        mensajeError += '<br>'
        validacion = false;
    } else if ((apellido.lenght < 6)) {
        mensajeError += 'El apellido debe tener más de seis caracteres';
        mensajeError += '<br>'
        validacion = false;
    } else if (emailValidation.test(email) == false) {
        mensajeError += 'Formato de correo inválido';
        mensajeError += '<br>'
        validacion = false;
    } else {
        validacion = true;
    }

    if (validacion == false) {
        mensajeAlerta.hidden = false;
        mensajeAlerta.innerHTML = mensajeError;
    } else {
        swal("Buen trabajo!", "Clikea el botón!", "Ingreso exitoso");
        setTimeout(() => {
            window.location = "./calculadora.html";
        }, 2000);
    }


    //     if (nombre.value == "") {
    //         const mensaje = document.getElementById("mensaje");
    //         swal("Por favor ingrese los datos solicitados");
    //         nombre.classList.add('alert'); //añado la clase alert
    //         mensaje.innerText = "Llena el campo nombre por favor";
    //         validation = false;
    //     } else if (apellido.value == "") {
    //         const mensaje2 = document.getElementById("mensaje2");
    //         apellido.classList.add('alert'); //añado la clase alert
    //         mensaje2.innerText = "Llena el campo apellido por favor";
    //         validation = false;
    //     } else if (correo.value == "") {
    //         const mensaje3 = document.getElementById("mensaje3");
    //         correo.classList.add('alert'); //añado la clase alert
    //         mensaje3.innerText = "Llena el campo correo válido por favor";
    //         validation = false;
    //     } else if (celular.value == "") {
    //         const mensaje4 = document.getElementById("mensaje4");
    //         celular.classList.add('alert'); //añado la clase alert
    //         mensaje4.innerText = "Llena el campo celular por favor";
    //         validacion = false;
    //     } else {
    //         validacion = true;
    //     }


    //     //verifico si todo está bien antes de abrir la otra ventana
    //     if (validacion == true) {
    //         swal("Good job!", "You clicked the button!", "success");
    //         setTimeout(() => {
    //             window.location = "./calculadora.html";
    //         }, 2000);
    //     }



}