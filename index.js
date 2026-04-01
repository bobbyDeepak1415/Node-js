// function program1() {
//   console.log("from 1");
// }

// function program2() {
//   console.log("from 2");
// }

// function program3() {
//   console.log("from 3");
// }

// program1();
// program2();

// program3();

const obj1 = {
  fName: "Bobby",
  lName: "Deepak",
  printName: () => {
    console.log(this.fName +this.lName);
  },
};

console.log(obj1.printName())
