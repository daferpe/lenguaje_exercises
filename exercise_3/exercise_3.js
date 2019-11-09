// --- EJERCICIO 3.Clone Merge

//Clone
function clone(source) {
  // Implementation here.
  let newObj = {};
  for (let prop in source) {
    newObj[prop] = source[prop];
  }
  return newObj;
}

//Merge
function merge(source, target) {
  // Implementation here.
  let A = clone(source);
  for(let prop in target) {
    if(A[prop] == undefined){
      A[prop] = target[prop];
    }
  }
  return A;
}

const obj1 = {name: "Francisco", surnmae: "Morralla", country: "SPA"};

console.log("obj1:", obj1);
let obj2 = clone(obj1);
console.log("obj2:", obj2);
obj2.name = "Pedro";
console.log("obj2 modificado:", obj2);
console.log("obj1 se mantiene sin cambios:", obj1);

//////////////////////////////////////

// Por ejemplo, dados estos 2 objetos:
var a = {name: "Maria", surname: "Ibañez", country: "SPA"};
var b = {name: "Luisa", age: 31, married: true};
// El resultado de mezclar a sobre b sería:
console.log("merge:", merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
