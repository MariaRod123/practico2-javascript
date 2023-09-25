
const array_inicial = [1, true, "B", "C"];
const tipos_datos = ["string", "number"];

function clasificarTipoDatos(array1, array2) {
  const array_salida = [];
  for (const elemento of array1) {
    const tipoElemento = typeof elemento;
    if (array2.includes(tipoElemento)) {
      array_salida.push(elemento);
    }
  }
  return array_salida;
}

console.log(clasificarTipoDatos(array_inicial, tipos_datos));


