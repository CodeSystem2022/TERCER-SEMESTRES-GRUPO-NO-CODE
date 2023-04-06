function ejecutarCiclo() {
  const input = document.getElementById("input").value;
  let i = 0;
  let resultado = "";
  while (i < input) {
    resultado += i + " ";
    i++;
  }
  document.getElementById("resultado").innerHTML = resultado;
  console.log(resultado); // Agrega esta línea para imprimir el resultado en la consola
}
