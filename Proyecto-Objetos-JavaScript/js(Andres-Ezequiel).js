const formulario1 = document.getElementById("form1")

function form1(){
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

}
persona1.mostrarConfirmacion();
alert('nombre:'+ nombre+' apellido:'+apellido+' edad:'+edad)

}
