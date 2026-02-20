//String

let a= "Debabrat";
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());

for(let i=0;i<a.length;i++)
{
    console.log(a.charAt(i));   //to get characters
}

let b=a.slice(2,6);     //getting a slice of Debabrat from 2 to 5 index, excluding 6th index
console.log(b); 
console.log(a+b); //concatination

console.log(a.replace('t', 'ta'));  //replacing t of Debabrat with ta