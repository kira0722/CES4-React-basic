const estudiante = {nombre: "luisa", apellido: "perez", edad: 10};
//ES5
// const nombre = estudiante.nombre;
// const apellido = estudiante.apellido;
// const edad = estudiante.edad;

//ES6

const {nombre, edad} = estudiante;
console.log(nombre);

const jugadores = ["messi", "ronaldo", "falcao"];
const [x,y] = jugadores;
const [,,z]= jugadores;
console.log(x);
console.log(y);
console.log(z);

let a = 5;
let b = 10;
[a,b] = [b, a];

console.log(a);
console.log(b);
