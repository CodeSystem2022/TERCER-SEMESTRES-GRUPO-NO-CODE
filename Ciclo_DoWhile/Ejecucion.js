
let contador = 0;
function ejecutarBucle() {
  let valorInput = document.getElementById("miInput").value;
  let resultado = "";
  do {
    resultado += "El contador es: " + contador + "<br>";
    contador++;
  } while (contador < valorInput);
  document.getElementById("miResultado").innerHTML = resultado;
}
