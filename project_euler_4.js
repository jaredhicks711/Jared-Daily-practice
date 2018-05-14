//project euler problem #4
//Largest palindrome product
//finished 
let largestPali = 0;
function isPalindrome(num){
    let num1 = num.toString();
    let reverseString ="";
    for(let i = num1.length-1;i>=0;i--){
        reverseString+= num1.charAt(i);
    }
   return(reverseString === num1);
}
function paliProduct(min, max){
    for(let a = min;a<=max; a++){
        for(let b = min; b<=max; b++){
            if(isPalindrome(a*b) && (a*b) >= largestPali){
                largestPali = (a*b);
            }
        }
    }
    return largestPali;
}
console.log(paliProduct(100, 999));