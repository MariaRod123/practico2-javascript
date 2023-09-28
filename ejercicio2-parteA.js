const array_entrada = [1, 2, "B", "C", "B"];

function clasificarElementos(array_inicial) {
  const numeros = [];
  const letras = [];

  for (const elemento of array_inicial) {
    if (typeof elemento === 'number') {
      numeros.push(elemento);
    } else if (typeof elemento === 'string') {
      letras.push(elemento);
    } 
  }

  return { numeros, letras};
}

const clasificacion = clasificarElementos(array_entrada);


console.log('Números:', clasificacion.numeros); 
const array_letras_repetidas = clasificacion.letras.sort();
console.log('Letras:', array_letras_repetidas); 

const array_compactado = [];

for (const letra of array_letras_repetidas) {
  if (!array_compactado.includes(letra)) {
    array_compactado.push(letra);
  }
}

console.log('Array de letras sin repetir:', array_compactado); 
