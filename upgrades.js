var upgrades = [];

var currentRCU = 0;
var priceCRU = 1;

var reduceCooldownUpgrades = [
    {
        multiplier:0.75,
        priceMultiplier:10
    },
    {
        multiplier:0.75,
        priceMultiplier:2
    },
    {
        multiplier:0.75,
        priceMultiplier: 3
    },
    {
        multiplier:0.5,
        priceMultiplier: 3
    },
    {
        multiplier:0.5,
        priceMultiplier: 3
    },
    {
        multiplier:0.5,
        priceMultiplier: 3
    },
    {
        multiplier:0.5,
        priceMultiplier: 3
    }

];


var currentACU = 0;
var priceACU = 1;

var autoClickUpgrades = [
    {
        multiplier:5,
        priceMultiplier:10
    },
    {
        multiplier:3,
        priceMultiplier:2
    },
    {
        multiplier:2,
        priceMultiplier: 3
    },
    {
        multiplier:2,
        priceMultiplier: 3
    },
    {
        multiplier:1.7,
        priceMultiplier: 3
    },
    {
        multiplier:1.6,
        priceMultiplier: 3
    },
    {
        multiplier:1.5,
        priceMultiplier: 3
    }

];


function drawUpgrades() {
    if(currentRCU != reduceCooldownUpgrades.length){
        $('#reduceCooldownUpgrade .price').html(reduceCooldownUpgrades[currentRCU].priceMultiplier*priceCRU);
        $('#reduceCooldownUpgrade .multiplier').html(100-(reduceCooldownUpgrades[currentRCU].multiplier*100));
    } else {
        $('#reduceCooldownUpgrade').html('Wait until the next level.')
    }
    if(currentACU != autoClickUpgrades.length){
        $('#autoClickUpgrade .price').html(autoClickUpgrades[currentACU].priceMultiplier*priceACU);
        $('#autoClickUpgrade .multiplier').html((autoClickUpgrades[currentACU].multiplier*100));
    } else {
        $('#autoClickUpgrade').html('Wait until the next level.')
    }
}


/*
*   A lot of the structure of these listeners are very repetitive.
   *   I wanted to do something about it, but couldn't come up
   *   a sound method since future updates can have very different
   *   effects, and I didn't want to use an eval solution.
   *   Then I figured that since not that much upgrade types
   *   will be added, it'll be a little code debt.
*
* */

 $('#reduceCooldownUpgrade').click(function(){
    if(currentRCU == reduceCooldownUpgrades.length){
        return 0;
    }
    newCRU();
});

function newCRU(){
    if(points >= priceCRU*reduceCooldownUpgrades[currentRCU].priceMultiplier ){
        points -= priceCRU*reduceCooldownUpgrades[currentRCU].priceMultiplier;
        coolDownTime *= reduceCooldownUpgrades[currentRCU].multiplier;
        priceCRU *= reduceCooldownUpgrades[currentRCU].priceMultiplier;
        currentRCU += 1;
        drawUpgrades();
    }
}

$('#autoClickUpgrade').click(function(){

    if(currentACU == reduceCooldownUpgrades.length){
        return 0;
    }

    newACU();
});

function newACU(){
    if(points >= priceACU*autoClickUpgrades[currentACU].priceMultiplier ){
        points -= priceACU*autoClickUpgrades[currentACU].priceMultiplier;
        pointsPerSecond *= autoClickUpgrades[currentACU].multiplier;
        priceACU *= autoClickUpgrades[currentACU].priceMultiplier;
        currentACU += 1;
        drawUpgrades();
    }

}

/*
* This function will be run every time an upgrade is bought so
* it doesn't need to run in the render function. But it does
* need to be run initially here.
* */
drawUpgrades();


