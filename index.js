

const obj1={
    fName:"Bobby",
    lName:"Deepak"
}

function printName(){
    console.log(this.fName+" "+this.lName)
}


printName.call(obj1)
// console.log("hello")