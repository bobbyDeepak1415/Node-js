
let arr=[3,3,4,5,6,7,8,8]


let obj={}

for(let i=0;i<arr.length;i++){
    let item=arr[i]
    obj[item]=(obj[item] || 0)+1

}


let result=[]

for(let key in obj){
    if(obj[key]===1){
        result.push(Number[key])
    }
}

console.log(result)