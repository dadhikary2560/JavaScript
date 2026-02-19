//for Loop program

let lines=prompt("please enter how many lines you want");

for(let i=1;i<=lines;i++)
{
    for(let space=lines;space>0;space--)
    {
        console.log(" ");
    }
    for(let star=1;star<=i;star++)
    {
        console.log("* ");
    }
    console.log();
}