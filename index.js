let obj1 = {
  name: "Bobby",
  age: 30,
  active: true,
  print: function (city, country) {
    console.log(this.name + " is " + this.age + city + country);
  },
};

let obj2 = {
  name: "Deepak",
  age: 40,
  active: false,
};

obj1.print.apply(obj2, ["AP", "India"]);
