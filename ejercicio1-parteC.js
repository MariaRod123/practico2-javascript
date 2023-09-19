/*Dado el array ["B", "B", 1, 1, 1, 2, 2, 0] agrupar los valores que tengan una cantidad mayor a dos y agrupar con valores nulos y/o 0.  Salida esperada [1, 0] */

const array_inicial = ["B", "B", 1, 1, 1, 2, 2, 0];
const numeros_agrupados = [];


for (const elemento of array_inicial) {
  if (typeof elemento === 'number') {
    if (elemento in numeros_agrupados) {
      numeros_agrupados[elemento]++;
    } else {
      numeros_agrupados[elemento] = 1;
    }
  }
}

const array_salida= [];
for (const numero in numeros_agrupados) {
  if (numeros_agrupados[numero] > 2 || (numeros_agrupados[numero] >= 1 && parseInt(numero) === 0)) {
    array_salida.unshift(parseInt(numero));
  }
}

console.log(array_salida); 
