// --- EJERCICIO 2.Concat

const concat = (a, b) => [...a, ...b];
const concatMulti = (...element) => element.reduce(concat);

let array1 = ["hola", "mundo", "desde", "España"];
let array2 = ["adios", "planeta", "tierra"];
let array3 = ["bienvenido", "aliens"];
console.log(concat(array1, array2));
console.log(concatMulti(array1, array2, array3));