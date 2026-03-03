//Arithmatic Operator

 let a=5;
let b=7;
console.log("a+b is: ", a+b);
console.log("a-b is: ", a-b);
console.log("a*b is: ", a*b);
console.log("a/b is: ", a/b);
console.log("a%b is: ", a%b);
console.log("a to the power of b is: ", a**b);
console.log("----------------------------------------------");

//Unary operators

console.log("pre incremented a: ", ++a); //increment than print
console.log("value of a= ", a);
console.log("post incremented a: ", a++); //print than increment
console.log("value of a= ", a);
console.log("----------------------------------------------");

//Assignment operator with Arithmatic Operators
let m=10;
m+=1;
console.log("m+=1 is", m);
m*=2;
console.log("m*=2: ", m);
console.log("----------------------------------------------");

//comparison operator
// ==   ===     !=      !==
//>     <       <=      >=
let x=9;
let y="9";
console.log(x==y);  //checks content only
console.log(x===y); //checks content + data-type as well
console.log("----------------------------------------------");

//logical operator
// &&       ||      !

//Ternary Operator
// (Condition ? true output : false output)

let e=10;
let f=12;
console.log(f<e ? "true" : "false");
console.log("----------------------------------------------");
