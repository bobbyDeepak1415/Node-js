
let arr=[3,3,4,5,6,7,8,8]

let result=[]


for(let i=0;i<arr.length;i++){
    let item=arr[i]
    if(!result.includes(item)){
        result.push(item)
    }

}


console.log(result)