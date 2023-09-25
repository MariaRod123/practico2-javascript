const array_entrada = [1, true, false, true, "C", null];

function clasificarElementos(array_inicial) {
  const numeros = [];
  const booleanos = [];
  const nulos_letras = [];
  

  for (const elemento of array_inicial) {
    if (typeof elemento === 'number') {
      numeros.push(elemento);
    } else if (typeof elemento === 'boolean') {
      booleanos.push(elemento);
    } else if (elemento === null || typeof elemento === 'string') {
      nulos_letras.push(elemento);
    }
  
  }
  return { numeros, booleanos, nulos_letras};
}

const clasificacion = clasificarElementos(array_entrada);

console.log('Números:', clasificacion.numeros); 
console.log('Booleanos:', clasificacion.booleanos); 
console.log('Nulos:', clasificacion.nulos_letras); 
