// 2. Concat
const concat = (a: any[], b: any[]) => {
  return [...a, ...b];
};

const concat2 = (...arrays: any[]) => {
  return arrays.reduce((resultado, array) => [...resultado, ...array], []);
};


console.log("************** DELIVERABLE 02 *********************");

console.log("concat", concat([1, 2], [3, 4, 5]));
console.log("concat2", concat2([1, 2], [3, 4, 5], [6, 7, 8]));
