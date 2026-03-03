//if
let a=10;
let b=12;
if(b>10)
{
    console.log("b is greater ",b);
}
console.log("----------------------------------------");


//if-else
let input=prompt("hi! please enter a value");
console.log("value received from user end: ", input);
if(input>=60)
    console.log("you are a senior citizen", input)
else if(input>=18 && input<60)
    console.log("you are an adult ", input);
else if(input<18 && input>0)
    console.log("you are not eligible to vote "+input);
else
    console.log("wrong input");
console.log("----------------------------------------");
