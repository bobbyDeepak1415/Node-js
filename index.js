function program1() {
  console.log("from 1");
  program2();
}

function program2() {
  console.log("from 2");
  program3();
}

function program3() {
  console.log("from 3");
}

program1();
