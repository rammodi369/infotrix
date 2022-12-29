let var1=Math.random();
let a=prompt("enter your guess")
a=Number.parseInt(a);
while(a!=var1)
{
if(a<100&&a>50){
console.log(" entered value is greater than 50 less thamn 100")
}
else if(a<=50){
console.log(" entered value is less than or equal to 50");
}
a=prompt("enter your guess")
a=Number.parseInt(a)
}