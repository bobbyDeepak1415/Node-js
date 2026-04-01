let str = "AAABBCDDAB";

function display(str) {
  let result = "";

  let obj = {};
  let arr = str.split("");
  for (let i of arr) {
    obj[i] = (obj[i] || 0) + 1;
  }
}

console.log(display(str));
