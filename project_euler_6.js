//project euler problem #6
//Sum square difference
//finished
let sum1 = 0;
let sum2 = 0;

function sumOfSquares(max){
    for(let i = 1; i<=max; i++){
        sum1 +=(i*i);
    }
    return sum1;
}
function squareOfSums(max){
    for(let i = 1; i<= max; i++){
        sum2+=i;
    }
    return(sum2*sum2);
}
function diffBetweenSquareOfSumsAndSumOfSquares(max){
    return Math.abs(squareOfSums(max)-sumOfSquares(max));
}
console.log(diffBetweenSquareOfSumsAndSumOfSquares(100));