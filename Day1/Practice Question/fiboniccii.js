// let num =  parseInt(prompt("Enter how many fabonaccii series you want to print"));
let num = 12
let a=0;
let b=1;

if(num==1)
{
    return a ;
}

else 
{
    console.log(a);
    console.log(b);
    for(let i=3 ;i<=num;i++)
    {
        let c = a + b ;
        console.log(c);
        
        a=b;
        b=c;

    }
}
