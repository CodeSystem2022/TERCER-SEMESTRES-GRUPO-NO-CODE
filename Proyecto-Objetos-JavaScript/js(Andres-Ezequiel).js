const formulario = document.getElementById("form1");

formulario-addEventListener("submit", function(event) {
    event.preventDefault(); //Previene el comportamiento predet de form

    let nombre = this.document.getElementById("dato1_1").value;
    let apellido = this.document.getElementById("dato1_2").value;
    let edad = this.getElementById("dato1_3").value;

    alert("Formulario enviado correctamente");
});