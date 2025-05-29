const fruits = ["banana", "coconate", "mango", "pinapple"]
fruits.splice = [1, 3, "ganabi", "msxali", "cxeni", 'nugzari']
console.log(fruits)
const fruitsrg = fruits.slice(0, 2)
console.log(fruitsrg)

//1
let arr = [10, 20, 30, 40, 50];
let spliced = arr.splice(1, 3);
let sliced = spliced.slice(1, 2);
sliced.splice(1, 0, 100, 200);

console.log(arr);
console.log(spliced);
console.log(sliced);

