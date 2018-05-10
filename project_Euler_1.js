//project euler problem #1
let total = 0;
function sumOfMultiples(max){
    for(i = 0;i<max;i++){
        if(i%3==0 || i%5==0){
            total+=i;
        }
    }
    return total;
}
console.log(sumOfMultiples(1000));