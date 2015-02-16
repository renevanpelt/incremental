var canClick = true;
var pointsPerClick = 1;
var coolDownTime = 1000;
var lastClick = -Infinity;
var coolDown = 1;




$('#points-wrapper').click(function(event){
    manClick();
});

function manClick(){

    canClick = coolDown >= 1;

    if(canClick){
        points += pointsPerClick;
        lastClick = Date.now();
    }
}



var pointsPerSecond = 0.1;
var lastAutoClick = Date.now();

function autoClick(){

    var deltaAutoClick = (Date.now() - lastAutoClick)/1000;

    points += pointsPerSecond*deltaAutoClick;
    lastAutoClick = Date.now();
}
