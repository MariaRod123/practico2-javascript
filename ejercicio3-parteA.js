function buscarElementosConA(array_entrada) {
    const array_salida = [];
  
    for (const element of array_entrada) {
      const elemento = element;
  

      if (elemento[0] === "A") {
        array_salida.push(elemento);
      }
    }
  
    return array_salida;
  }
  
  const array_inicial = ["Aba", "AAb", "b", "B"];
  const salida = buscarElementosConA(array_inicial);

if (salida.length !== 0) {
    console.log("Elementos que comienzan con A:", salida);          
  } else {
    console.log("No se encontraron elementos que cumplan con la condición.");
      
  }
  
  
