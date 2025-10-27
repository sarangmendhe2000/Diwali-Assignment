let num = 5;
// let num = parseInt(prompt("Enter number to find Factorial - "));

if(num < 0)
{
    console.log("Please Enter Valid Positive Number");
    
}
else if( num == 0 )
{
    console.log("Factorial of the given Number is - 1")
}
else
{
    let fact = 1
    for(let i=1;i<=num;i++)
    {
        fact = fact*i;
    }

    console.log("Factorial of the given Number is - " , fact);
}