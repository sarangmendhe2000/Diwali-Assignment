
    var reverse = function(x) {

        let absNum = Math.abs(x);

        let reverseStr = String(absNum).split('').reverse().join('');
        let number = Number(reverseStr);
        let result ;

        if(x < 0)
        {
            result = - number;
        }
        else
        {
            result = number;
        }

        const maxInt = Math.pow(2,31)-1;
        const minInt = Math.pow(-2,31);

        if(result > maxInt || result < minInt)
        {
            return 0;
        }
        else
        {

        return result;
        }
        
    };