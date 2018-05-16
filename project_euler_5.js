//project euler problem #5
//Smallest multiple
//finished

let findingnum = true;
let num = 1;
function norem(max) {
    while(findingnum){
        for(let i = 1;i<=max;i++){
            if(num % i === 0 && i===max){
                    return num;
                    findingnum = false;
            }
            else if(num%i!== 0){
                break;
            }
        }
        num++;
    }
}
console.log(norem(20));