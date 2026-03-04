let firstName = "Debabrat";
let age = 31;
console.log(firstName + " " + age);


// ------------------------------------------------------------
//javaScript is dynamic
let abc = "some string value";
console.log(abc);
abc = 78;
console.log(abc);


// ------------------------------------------------------------
//const is like final in java
const abc1 = "value declared can not be changed later";
//abc1=90;    //shows error in console
console.log(abc1);


// ------------------------------------------------------------
//defining objects
const obj1={
    firstName:"Debabrat",
    age:31,
    isHuman: true,
};
console.log(obj1.firstName+" "+obj1.age+" "+obj1.isHuman);
console.log(obj1);


// ------------------------------------------------------------
//operators in JS
let abc2=7;
let abc3=4;
console.log("sum value is: "+(abc2+abc3));
console.log("substraction value is: "+(abc2-abc3));
console.log("multiplication value is: "+(abc2*abc3));
console.log("division value is: "+(abc2/abc3));
console.log("mod value is: "+(abc2%abc3));
console.log("abc2 to the power abc3 value is: "+(abc2**abc3));


// ------------------------------------------------------------
//equals to in JS + conditional statement
let x=24;
let y='24';
if(x==y)        //only checks if the content is true
    console.log("true");
else
    console.log("false");

console.log("-----------------------------------------");
x=54;
y="54";
if(x===y) //checks both content and data-type
    console.log("true");
else
    console.log("false");


// ------------------------------------------------------------
//Ternary Operator
let a=prompt("enter value");
console.log("value received from prompt: "+a);
console.log(a>10 && a<=18? "teen" : "invalid input");


// ------------------------------------------------------------
//loops
for(let i=0;i<10;i++)
    console.log("Debabrat");

let i=10;
while(i>0)
{
    console.log(i);
    console.log("while loop");
    i--;
}


// ------------------------------------------------------------
//String operation
let abd="small letters";

console.log(abd.toUpperCase());     //converts to uppercase letters, but the original remains intact
for(let i=0;i<=abd.length;i++)
    console.log(abd.charAt(i));

console.log(abd.slice(2,8));        //prints a section of the whole length of the main string



// ------------------------------------------------------------
//array

let arr=[1,2,3,4,5];
console.log(arr);

for(let i=0;i<arr.length;i++)
    console.log(arr[i]);

//array methods
arr.push(67);       //adds value at the end also increases array size
arr.push("Debabrat");
console.log(arr);

arr.pop();          //deletes value from end
console.log(arr);

let b=arr.toString();   //converts to a string a need to be saved in a different variable
console.log(b);

arr.shift();        //deletes from the beginning
console.log(arr);


// ------------------------------------------------------------
//functions

function m1(a)
{
    let b=a;
    let rem=0;
    let sum=0;
    while(b>0)
    {
        rem=b%10;
        sum=sum*10+rem;
        b=Math.floor(b/10);
        console.log(sum);
    }
console.log(sum);
if(sum===a)
    console.log("number is palindrome");
else
    console.log("not palindrome");
};

m1(101);