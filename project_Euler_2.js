//project euler problem #2
//Even Fibonacci numbers
let fib1= 1;
let fib2 =2;
let sum = 0;
function sumOfEvenFibs(max){
    while(fib1 <=max && fib2 <=max){
        if(fib1%2==0){
            sum+= fib1;
        }
        fib1+= fib2;
        if(fib2%2==0){
            sum+= fib2;
        }
        fib2+=fib1;
    }
    return sum;
}
console.log(sumOfEvenFibs(4000000));