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