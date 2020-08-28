const nombre = document.getElementById("nombre"); //capturo el valor del input
console.log(nombre);
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const celular = document.getElementById("celular");


function validarFormulario(event) {
    event.preventDefault(); //previene la ejecución por defecto evitando que se envíe el formulario sin los datos correctos
    let validacion = true;
    if (nombre.value == "") {
        const mensaje = document.getElementById("mensaje");
        swal("Por favor ingrese los datos solicitados");
        nombre.classList.add('alert'); //añado la clase alert
        mensaje.innerText = "Llena el campo nombre por favor";
        validation = false;
    } else if (apellido.value == "") {
        const mensaje2 = document.getElementById("mensaje2");
        apellido.classList.add('alert'); //añado la clase alert
        mensaje2.innerText = "Llena el campo apellido por favor";
        validation = false;
    } else if (correo.value == "") {
        const mensaje3 = document.getElementById("mensaje3");
        correo.classList.add('alert'); //añado la clase alert
        mensaje3.innerText = "Llena el campo correo válido por favor";
        validation = false;
    } else if (celular.value == "") {
        const mensaje4 = document.getElementById("mensaje4");
        celular.classList.add('alert'); //añado la clase alert
        mensaje4.innerText = "Llena el campo celular por favor";
        validacion = false;
    } else {
        validacion = true;
    }


    //verifico si todo está bien antes de abrir la otra ventana
    if (validacion == true) {
        swal("Good job!", "You clicked the button!", "success");
        setTimeout(() => {
            window.location = "./calculadora.html";
        }, 2000);
    }



}