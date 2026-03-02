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

var first = () => {
  console.log("first");

  return (second = () => {
    console.log("second");

    return (third = () => {
      console.log("third");
      second()
    });
  });

};

first()
