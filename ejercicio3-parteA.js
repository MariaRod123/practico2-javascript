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
  console.log("Elementos que comienzan con A:", salida);  
  