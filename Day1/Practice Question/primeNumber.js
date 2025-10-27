let num = parseInt(prompt("Enter number to check Prime Number"));
let flag= false;

if(num == 2)
{
    console.log("The Number is Prime")
    
}

for(let i=3;i*i<num;i++)
{
    if(num%i == 0)
    {
        flag=true;
        break;
    }


}
if(flag==true)
{
    console.log("The number is not Prime")
}
else
{
    console.log("The number is Prime ")
}