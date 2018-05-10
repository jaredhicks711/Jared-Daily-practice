function alarmClock(currenttime){
    var allHours = ["twelve","One","Two","Three","Four","Five","Six","Seven","Eleven",];
    var allTensMinutes = ["oh"," ","Twenty","Thirty","Forty","Fifty"];
    var allOnesMinutes = [" ","one","two","three","four","five","six","seven","eight","nine"];
    var allSpecialMinutes = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var currentHour = parseInt(currenttime.substring(0,2));
    var currentMinute = parseInt(currenttime.substring(2,4));
    var amPm;
    if((currentHour<0 || currentHour >23) || (currentMinute<0 || currentMinute >59)){
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
    else{
        wordMinute = ""+allTensMinutes[Math.floor(currentMinute/10)]+" "+allOnesMinutes[currentMinute%10];
    }
    return "It's "+wordHour+" "+wordMinute+" "+amPm;
}

console.log(alarmClock("03:30"));