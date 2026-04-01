let str = "the line has the largest wordjcbebje in it";

console.log(str.split(" ").reduce((a, b) => (a.length > b.length ? a : b)));
