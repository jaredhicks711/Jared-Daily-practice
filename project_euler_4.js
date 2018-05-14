//project euler problem #4
//Largest palindrome product
//unfinished
function isPalindrome(num){
    let num1 = num.toString();
    let reverseString;
    for(let i = num1.length-1;i>=0;i--){
        reverseString+= num1.charAt(i);
    }
    console.log(reverseString);
   return(reverseString === num1);
}
console.log(isPalindrome(131));