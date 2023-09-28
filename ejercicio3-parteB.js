function buscarElementosConUno(array_entrada) {
    const array_numeros = [];
  
    for (const element of array_entrada) {
      const elemento = element;
  

      if ( elemento[0] == "1" ||  elemento === 1  ) {
        array_numeros.push(elemento);
      }
    }
  
    return array_numeros;
  }

const array_inicial = [1, "2", "0",  "1b", "1"];
const array_salida=buscarElementosConUno(array_inicial);

if (array_salida.length !== 0) {
  console.log("Elementos que tienen 1 : ", array_salida);
  
} else {
  console.log("No se encontraron elementos que cumplan con la condición.");
}



