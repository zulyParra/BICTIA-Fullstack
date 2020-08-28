// alert
function mensajeAlert() {
    alert("hola!!!!");
}
// prompt
function mensajePrompt() {
    var name = prompt('Ingrese su nombre');
    document.write("<h1> Su nombre es: " + name + "</h1>");
}
// confirm
function confirmar() {
    var confirmar = confirm("Está seguro que desea eliminar el archivo?");
    if (confirmar == true) {
        alert("Archivo eliminado correctamente");
    } else {
        alert("Archivo no eliminado");
    }
}
// console.log
function consola() {
    console.log("Te ayudo con los errores");
}
// Traer imagen de html
//eventos de escucha 
var img = document.getElementById("imagenMafalda");
// img.addEventListener("click",function () {

// });
img.addEventListener("click", () => {
    // alert("Soy el DOM");
    // Cambiando el HTML
    img.style.width = "500px"
    img.style.border = "1px solid black";
});

// Mouse

var box = document.getElementById("box");
box.addEventListener("mouseenter", () => {
    // cuando el mause entre sobre el elemento
    // la clase box se remplaza por la clase cambio1
    // classList permite acceder a las clases que hay en la hoja de estilos
    box.classList.replace("box", "cambio1");

});

box.addEventListener("mouseleave", () => {
    box.classList.replace("cambio1", "box");
});

box.addEventListener("mousemove", () => {
    console.log("El mouse se está moviendo");
});

box.addEventListener("mousedown", () => {
    console.log("Has dado click dentro del div");
});

box.addEventListener("mouseup", () => {
    console.log("Has levantado el click dentro del div");
});

// teclado

var teclado = document.getElementById("teclado");

// teclado.addEventListener("keydown", () => {
//     console.log("Has oprimido una tecla");
// });

// teclado.addEventListener("keyup", () => {
//     console.log("Tienes la tecla sostenida");
// });

teclado.addEventListener("keyup", (e) => {
    console.log(e.key);

    // var letra = e.key;
    // letra.tolowerCase();
    if (e.key.tolowerCase() == "w") {
        alert("Vas hacia adelante");
    }

});

// // objeto evento

// var padre = document.getElementById("padre");

// padre.addEventListener("click", (e) => {
//     console.log(e.target.textContent);
//     e.target.style.background = "red";

//     // e.target.classList.add("color");
// });

// // Crear elementos dentro de un nodo o etiqueta

// var texto = document.getElementById("texto");
// var agregar = document.getElementById("agregar");

// agregar.addEventListener("click", () => {
//     var texto = document.getElementById("texto").value;

// });