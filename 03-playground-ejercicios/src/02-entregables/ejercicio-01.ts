// 1. Array operations
const head = ([first]: any[]) => {
  return first;
};

const tail = ([, ...rest]: any[]) => {
  return rest;
};

const init = (array: any[]) => {
  return array.slice(0, -1);
};

const last = (array: any[]) => {
  return array[array.length - 1];
};


console.log("************** DELIVERABLE 01 *********************");

console.log("head", head([3, 2, 1]));
console.log("tail", tail([1, 2, 3]));
console.log("init", init([1, 2, 3, 4]));
console.log("last", last(["a", "b", "c"]));
