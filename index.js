const obj1 = {
  fName: "Bobby",
  lName: "Deepak",
  city: "ongole",
  state: "AP",
  printName(city, state) {
    console.log(`${this.fName} ${this.lName} is from ${city} in ${state}`);
  },
};

const obj2 = {
  fName: "Leo",
  lName: "King",
};

obj1.printName.call(obj2, "Bengaluru", "Karnataka");
