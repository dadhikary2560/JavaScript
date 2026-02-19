let arr=[90,120,300,800,970];
let discount=10/100;
console.log(discount)
for(let i=0;i<arr.length;i++)
{
    num=arr[i];
    arr[i]=arr[i]-arr[i]*discount;
    console.log("discounted", num, "value: "+arr[i]);
}
console.log(arr);