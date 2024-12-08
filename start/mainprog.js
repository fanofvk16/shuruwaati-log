const prompt = require('prompt-sync')();

const num = parseInt(prompt("Enter a number: "));
console.log(num);

let isPrime = false;
if(num === 1) {
    console.log("no prime not composite");
}

else if(num > 1)
{
    for(let i=2; i<=num/2; i++)
    {
        if(num % i ===0)
        {
            isPrime =true;
            break;
        }
    }
}

if(isPrime)
{
    console.log("is prime");
}
else 
{
    console.log("is not prime");
}