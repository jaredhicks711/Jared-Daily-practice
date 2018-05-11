//project euler problem #3
//Find the largest prime factor of a composite number
//finished
let largestPrime = 1;
function findLargestPrime(num) {
    let currentNum = num;
    while (largestPrime <= currentNum) {
        for (let i = 2; i <= currentNum; i++) {
            if (currentNum % i == 0) {
                if (i > largestPrime) {
                    largestPrime = i;
                }
                currentNum /= i;
                break;
            }
        }
    }
    return largestPrime;
}
console.log(findLargestPrime(600851475143));