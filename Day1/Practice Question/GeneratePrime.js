let n = parseInt(prompt("Enter How many Prime number you wants "))
let count = 0;
let num =2;


while(count < n)
{
    let flag = false;

    for(let i=2;i*i<=num;i++)
    {
        if(num%i === 0)
        {
            flag = true;
            break;
        }
    }
    if(!flag)
    {
        console.log(num);
        count++;
    }

    num++;
}