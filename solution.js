var johnTeamGame1 = 140;
var johnTeamGame2 = 120;
var johnTeamGame3 = 103;

var markTeamGame1 = 116;
var markTeamGame2 = 94;
var markTeamGame3 = 123;

// 1. Calculate average score of each team

var johnAveScore = (johnTeamGame1 + johnTeamGame2 + johnTeamGame3)/3;
console.log(johnAveScore);  //Average = 104

var markAveScore = (markTeamGame1 + markTeamGame2 + markTeamGame3)/3;
console.log(markAveScore); //Average = 111

// 2. Check the winner through the highest average score and console log it 
if (johnAveScore > markAveScore){
    console.log('John\'s team is the winner with the highest average point of ' + johnAveScore);
} else if (johnAveScore === markAveScore) {
    console.log('Both teams have a draw with '+ johnAveScore + ', ' + markAveScore + ' points each!!');
} else {
    console.log('Mark\'s team is the winner with the highest average point of ' + markAveScore);
};

// 3. Change scores to show another as winner. Let me change John's team scores to 200, 120, 130 to make John's team to win.

var johnTeamGame1 = 200;
var johnTeamGame2 = 120;
var johnTeamGame3 = 130;

var markTeamGame1 = 116;
var markTeamGame2 = 94;
var markTeamGame3 = 123;




var johnAveScore = (johnTeamGame1 + johnTeamGame2 + johnTeamGame3)/3;
console.log(johnAveScore);  //Average = 150

var markAveScore = (markTeamGame1 + markTeamGame2 + markTeamGame3)/3;
console.log(markAveScore); //Average = 111


Checking the winner through the highest average score and console logging it 

if (johnAveScore > markAveScore){
    console.log('John\'s team is the winner with the highest average point of ' + johnAveScore);
} else if (johnAveScore === markAveScore) {
    console.log('Both teams have a draw with '+ johnAveScore + ', ' + markAveScore + ' points each!!');
} else {
    console.log('Mark\'s team is the winner with the highest average point of ' + markAveScore);
};


//4. Mary

var maryTeamGame1 = 97;
var maryTeamGame2 = 134;
var maryTeamGame3 = 105;

var maryAveScore = (maryTeamGame1 + maryTeamGame2 + maryTeamGame3)/3;
console.log(maryAveScore); //Average = 112

if  (johnAveScore > markAveScore && johnAveScore > maryAveScore){
    console.log('John\'s team is the winner with average point of ' + johnAveScore);
} else if (markAveScore > johnAveScore && markAveScore > maryAveScore){
    console.log('Mark\'s team is the winner with average point of ' + markAveScore);
} else if (maryAveScore > johnAveScore && maryAveScore > markAveScore){
    console.log('Mary\'s team is the winner with average point of ' + maryAveScore);
} else if(johnAveScore === markAveScore === maryAveScore){
    console.log('All the three teams came out draw');
};
