const formulario1 = document.getElementById("form1");

function formulario1() {
    let nombre = document.getElementById("dato1_1").value;
    let apellido = document.getElementById("dato1_2").value;
    let edad = document.getElementById("dato1_3").value;

    let persona1 = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        mostrarConfirmacion: function () {
            alert("Los datos han sido recibidos correctamente")
        },
        rellenarDatos: function () {
            document.getElementById('devolucionTitulo').innerHTML = "Datos de " + nombre + " " + apellido + ": ";
            document.getElementById('devolucionNombre').innerHTML = 'Nombre: ' + nombre;
            document.getElementById('devolucionApellido').innerHTML = 'Apellido: ' + apellido;
        }

}
persona1.mostrarConfirmacion();
persona1.rellenarDatos();
}