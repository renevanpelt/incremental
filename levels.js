
var levels = [
    {
        cost: 100000,
        pointsPerClick:4,
        ACU:0.4,
        priceMultiplier: 6
    },
    {
        cost: 1000000,
        pointsPerClick:13,
        ACU:1,
        priceMultiplier: 14
    }
    ,
    {
        cost: 10000000,
        pointsPerClick:108,
        ACU:7,
        priceMultiplier: 60
    },
    {
        cost: 40000000,
        pointsPerClick:800,
        ACU:30,
        priceMultiplier: 30
    },
    {
        cost: 100000000,
        pointsPerClick:10000,
        ACU:100,
        priceMultiplier: 30
    }

];


var currentLevel = 0;

function nextLevel(){
    if(currentLevel == levels.length){
        return 0;
        console.log(0);
    }
    if(levels[currentLevel].cost <= points){
        points -= levels[currentLevel].cost;
        pointsPerClick = levels[currentLevel].pointsPerClick;
        pointsPerSecond = levels[currentLevel].ACU;
        priceACU = 1;
        priceCRU = 1;
        coolDownTime =1000;
        currentLevel +=1;
        currentRCU = 0;
        currentACU = 0;
        drawUpgrades();
        drawLevels();
        if(!(levels.length == currentLevel)){
            priceMultiplier = levels[currentLevel].priceMultiplier;
        }
        $('.item').remove();
        for(i=0;i<items.length;i++){

            console.log(399999999933333333333333);
            items[i].drawn = false;
            items[i].bought = false;

        }
    }
}

function drawLevels(){
    if(currentLevel < levels.length){

        $('#level_price').html(Beautify(levels[currentLevel].cost));
    } else {
        $('#level_price_wrapper').html("You are a hero.");
    }
    $('#level_widget').html(currentLevel+1);

}

drawLevels();

$('.level-wrapper').click(function(){
    nextLevel();
});