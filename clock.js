//clock word problem
//finished
let allHours = ["twelve","One","Two","Three","Four","Five","Six","Seven","eight" ,"nine" ,"ten","Eleven"];
let allTensMinutes = ["oh","","Twenty","Thirty","Forty","Fifty"];
let allOnesMinutes = ["","one","two","three","four","five","six","seven","eight","nine"];
let allSpecialMinutes = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
let amPm;

function alarmClock(currenttime){

    let currentHour = parseInt(currenttime.substring(0,2));
    let currentMinute = parseInt(currenttime.substring(3,5));

    if((currentHour<0 || currentHour >23) || (currentMinute<0 || currentMinute >59) || (currenttime.length!=5) || (currenttime.charAt(2)!= ':')){
        return "invalid time";
    }
    if(currentHour>=12) {
        amPm = "pm";
        currentHour= currentHour%12;
    }
    else {
        amPm = "am";
    }
    let wordHour = allHours[currentHour];
    let wordMinute;
    if(currentMinute>=10 && currentMinute<=19){
        wordMinute = allSpecialMinutes[currentMinute%10];
    }
    else if(Math.floor(currentMinute/10)== 0 && currentMinute%10 == 0){
        wordMinute = "";
    }
    else{
        wordMinute = ""+allTensMinutes[Math.floor(currentMinute/10)]+" "+allOnesMinutes[currentMinute%10];
    }

    return "It's "+wordHour+" "+wordMinute+" "+amPm;
}

console.log(alarmClock("13:00"));
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is the current time? input time in 24 hour 00:00 format.', (answer) => {
    console.log(alarmClock(answer));
    rl.close();
});