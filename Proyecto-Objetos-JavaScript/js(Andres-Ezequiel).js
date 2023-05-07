const formulario1 = document.getElementById("form1")


alert(confirma)
function form1(){
    let persona1 = new Object();
    persona1.nombre = document.getElementById("dato1_1").value;
    persona1.apellido = document.getElementById("dato1_2").value;
    persona1.edad = document.getElementById("dato1_3").value;
    persona1.dni = document.getElementById("dato1_4").value;
    persona1.enfermedad = document.getElementById("dato1_5").value;
    persona1.gruposanguineo = document.getElementById("dato1_6").value;
    alert('datos recibidos correctamente')
    alert('nombre:'+ persona1.nombre+'\napellido:'+persona1.apellido+'\nedad:'+persona1.edad+'\ndni:'+persona1.dni+'\nenfermedad:'+persona1.enfermedad+'\nGrupo Sanguineo'+persona1.gruposanguineo)
}




