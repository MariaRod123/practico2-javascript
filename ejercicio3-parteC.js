function buscarElementosDiferentesdeUno(array_entrada) {
    const array_nuevo = [];
  
    for (const element of array_entrada) {
      const elemento = element;
  

      if ( elemento ==="2" || elemento==="0" ) {
        array_nuevo.push(elemento);
      }
    }
  
    return array_nuevo;
  }

const array_inicial = [1, "2", "0",  "1b", "1"];
const array_salida=buscarElementosDiferentesdeUno(array_inicial)


if (array_salida.length !== 0) {
    console.log("Elementos iguales a '2' o '0':", array_salida);    
  } else {
    console.log("No se encontraron elementos que cumplan con la condición.");
    
  }
  
  