// 3. Clone merge
const clone = <T>(source: T): T => {
  return { ...source };
};

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = <T, U>(source: T, target: U): T & U => {
  return { ...target, ...source };
};


console.log("************** DELIVERABLE 03 *********************");

console.log("clone", clone({ a: 1, b: 2 }));
console.log("merge", merge(a, b));
