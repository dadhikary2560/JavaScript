let arr=[1,2,3,4,5,6];

arr.forEach(function printVal(val){
    console.log(val);
})


let newArr=arr.map(function printVal(val)
{
    return val%2==0;
})
console.log(newArr);

let newArr2=arr.filter(function printVal(val)
{
    return val%2==0;
})
console.log(newArr2);

let arr2=[54,5,8,92,70,2];
let max=0;
function printVal(arr2)
{
    for(let i=0;i<arr2.length-1;i++)
    {
        if(arr2[i]>arr2[i+1])
            max=arr2[i];
        else
            max=arr2[i+1];
    }
    console.log(max);
}

printVal(arr2);