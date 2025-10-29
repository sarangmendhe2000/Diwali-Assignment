
var isPalindrome = function(x) {
    
     let original = x;

    // let reverseStr = String(x).split('').reverse().join('');
    // let reverse = Number(reverseStr);

    let reverse =0;
    let rem;

    while(x>0)
    {
        rem = x % 10;
        reverse = rem + (reverse * 10);
        x = Math.floor(x / 10);
    }

    if(original == reverse)
    {
        return true;
    }
    else
    {
        return false;
    }

};