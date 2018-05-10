//clock word problem
var allHours = ["twelve","One","Two","Three","Four","Five","Six","Seven","eight" ,"nine" ,"ten","Eleven"];
var allTensMinutes = ["oh","","Twenty","Thirty","Forty","Fifty"];
var allOnesMinutes = ["","one","two","three","four","five","six","seven","eight","nine"];
var allSpecialMinutes = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
var amPm;

function alarmClock(currenttime){

    var currentHour = parseInt(currenttime.substring(0,2));
    var currentMinute = parseInt(currenttime.substring(3,5));

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
    var wordHour = allHours[currentHour];
    var wordMinute;
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