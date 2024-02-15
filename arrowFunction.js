const saludar = function(nombre){
    return `hola ${nombre} como estas?`;
}

console.log(saludar("juan"));

const saludarNew = (nombre) => `hola ${nombre} como estas?`;

console.log(saludarNew("mateo"));

const calular = (valor1, valor2) => valor1+valor2;
console.log(calular(1,2));