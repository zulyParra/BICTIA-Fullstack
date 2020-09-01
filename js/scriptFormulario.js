function validar() {
    let name = document.getElementById("name").value;
    console.log(name);
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let emailValidation = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;

    if (name === "" || surname === "" || email === "") {
        swal("Todos los campos son obligatorios");
        return false;
    } else if (name.length < 6) {
        swal("El nombre debe contener mínimo 6 caracteres");
        return false;
    } else if (name.length > 60) {
        swal("El nombre debe contener máximo 60 caracteres");
        return false;
    } else if (surname.length < 6) {
        swal("El apellido debe contener mínimo 6 caracteres");
        return false;
    } else if (surname.length > 60) {
        swal("El apellido debe contener máximo 60 caracteres");
        return false;
    } else if (emailValidation.test(email) === false) {
        swal("El email tiene un formato inválido");
        return false;
    } else if (email.length > 80) {
        swal("El email no puede contener más de 80 caracteres");
        return false;
    }

}