    let n= 3;

    console.log("sum of first ", n , "odd number is - " , n*n);

    let sum = 0;
    
    // Optional using loop 
    
    for(let i=1;i<=2*n-1;i+=2)
    {
        sum = sum+i;
    }
    console.log("sum of first ", n , "odd number is - ", sum);