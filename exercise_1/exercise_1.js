// --- EJERCICIO 1.Array operations

//Head
const head = ([first, ]) => first; // Implementation here.
console.log(head(["hola", "mundo", "desde", "España"]));

//Tail
const tail = ([first, ...element]) => element; // Implementation here.
console.log(tail(["hola", "mundo", "desde", "España"]));

//Init
const init = (element) => element.splice(0,(element.length - 1)); // Implementation here.
console.log(init(["hola", "mundo", "desde", "España"]));

//Last
const last = (element) => element.splice(-1); // Implementation here.
console.log(last(["hola", "mundo", "desde", "España"]));