
const array_inicial = [1, "B", "C", true, true, 1];
const array_final = [];

let valor_booleano_agregado = false;

for (let i = 0; i < array_inicial.length; i++) {
  const elemento = array_inicial[i];

  if (typeof elemento === 'boolean' && elemento === true && !valor_booleano_agregado) {
    array_final.unshift(elemento); 
    valor_booleano_agregado = true;
  } else if (typeof elemento === 'number') {
    array_final.push(elemento);
  }
}

console.log(array_final); 
