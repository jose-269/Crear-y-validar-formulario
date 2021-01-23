
function registered() {
    let nombre;
    let apellidos;
    let correo;
    let usuario;
    let contraseña;
    let telefono;
    
    nombre = document.getElementById("name").value;
    apellidos = document.getElementById("last-name").value;
    correo = document.getElementById("email").value;
    usuario = document.getElementById("user").value;
    contraseña = document.getElementById("password").value;
    telefono = document.getElementById("cel").value;

    console.log(nombre);
    console.log(apellidos);
    console.log(correo);
    console.log(usuario);
    console.log(contraseña);
    console.log(telefono);
    
    if (nombre === ""){
        alert("Debes ingresar su nombre")
    }else if (apellidos === "") {
        alert("Debes ingresar su apellido") 
    }else if (correo === ""){
        alert("Debes ingresar su correo")
    }else if (usuario === ""){
        alert("Debe ingresar su correo")
    }else if (contraseña === ""){
        alert("Debes ingresar una contraseña")
    }else if (telefono === ""){
        alert("Debes ingresar un telefono")
    }else if (nombre.trim().length > 30){
        alert("su nombre no debe superar los 30 carácteres")
    }else if (apellidos.trim().length > 80){
        alert("Sus apellidos no deben superar los 80 carácteres")
    }else if (correo.trim().length > 100){
        alert("Su correo no es válido")
    }else if (usuario.trim().length > 20){
        alert("Su nombre de usuario no debe superar los 20 carácteres")
    }else if (telefono.trim().length > 15) {
        alert("Su teléfono no es válido")
    }else if (isNaN(telefono )) {
        alert("Su teléfono sólo debe contener números")
    }else {
        alert("Bienvenido " + nombre + " " + apellidos + " se ha registrado exitosamente, su usuario es " + usuario +
         " y su contraseña es " + contraseña)
    }
    
return false;   
};







