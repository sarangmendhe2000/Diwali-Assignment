let arr = ["apple", "banana", "cherry", "watermelon", "kiwi"];

let maxLength = 0;

for(let i=0;i<arr.length;i++)
{
    if(arr[i].length > maxLength)
    {
        maxLength = arr[i].length;
    }
}

console.log("The length of the longest string is - " , maxLength);