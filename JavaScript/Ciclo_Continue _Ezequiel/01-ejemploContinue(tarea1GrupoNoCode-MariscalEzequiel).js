// ejemplo de continues (tarea 1 grupo no_code ezequielMariscal)
let arrayMediaRara = [10, "messi", {}, "diMaria", true, "elDibu" ];//declaro una array con cosas
for (let i = 0; i < arrayMediaRara.length; i++) { //recorro la array
  let recorriendoElemento = arrayMediaRara[i];
  
  if (typeof recorriendoElemento !== 'string') { //  si hay elementos string continuarlos hasta tenerlos todos
    continue;
  }
  
  console.log("Se han encontrado 3 campeones del mundo "(recorriendoElemento));
}

//Ezequiel Mariscal