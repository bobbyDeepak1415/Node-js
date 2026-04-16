let str = "AABKCCCDABJJKJ";

let result = "";

let obj = {};

for (let i of str) {
  obj[i] = (obj[i] || 0) + 1;
}

for(let key in obj){
    result+=key+obj[key]
}

console.log(result)