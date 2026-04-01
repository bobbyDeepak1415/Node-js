const obj1 = {
  fName: "Bobby",
  lName: "Deepak",
  city: "ongole",
  state: "AP"
};
function printName(city,state) {
  console.log(`${this.fName} ${this.lName} is from ${city} in ${state}`);
}

const obj2 = {
  fName: "Leo",
  lName: "King",
};


printName.call(obj1)
printName.apply(obj2,["guntur","karnataka"])