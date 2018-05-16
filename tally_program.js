//tally program problem
//finished
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
function tally(rawScores){
    for(let i = 0; i<rawScores.length;i++){
        switch(rawScores.charAt(i)){
            case 'a':
                a+=1;
                break;
            case 'A':
                a--;
                break;
            case 'b':
                b++;
                break;
            case 'B':
                b--;
                break;
            case 'c':
                c++;
                break;
            case 'C':
                c--;
                break;
            case 'd':
                d++;
                break;
            case 'D':
                d--;
                break;
            case 'e':
                e++;
                break;
            case'E':
                e--;
                break;
        }
    }
    console.log("a: "+a+" b: "+b+" c: "+c+" d: "+d+" d: "+e+" e: ");
}
tally("EbAAdbBEaBaaBBdAccbeebaec");