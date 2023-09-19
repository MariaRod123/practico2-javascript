//ejercicio 1 busqueda lineal parte i) entrada: [1, 2, 3, "A", "A", "B", 2, 2] , salida:[2, "A"] 

const array_inicial = [1, 2, 3, "A", "A", "B", 2, 2];

function agruparElementosRepetidos(array_entrada) {
  // Creo un array vacío para almacenar los elementos que aparecen con mayor frecuencia
  const elementos_repetidos = [];

  for (const elemento of array_entrada) {
    // Cuenta la frecuencia en la que aparece cada elemento
    let frecuencia = 0;
    for (const otroElemento of array_entrada) {
      if (elemento === otroElemento) {
        frecuencia++;
      }
    }
    // Si la frecuencia es mayor que 1, agrega el elemento al array de elementos repetidos
    if (frecuencia > 1 ) {       
      elementos_repetidos.push(elemento);     
    }
  }
  // Devuelve el array que contiene los elementos que se repiten
  return elementos_repetidos;
}

const array_nuevo= agruparElementosRepetidos(array_inicial);
const array_salida=[];

for (const elementos of array_nuevo){
  if(!array_salida.includes(elementos)){
    array_salida.push(elementos);
  }
};

console.log(array_salida);  

