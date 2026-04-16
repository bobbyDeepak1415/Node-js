
let arr=[13,5,5,9,45,45,98]

let result=[]

let seen=new Set()

for(let i of arr){
    if(!seen.has(i)){
        seen.add(i)
    }
}



console.log(seen)