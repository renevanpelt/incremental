var upgrades = [];
var priceMultiplier = 1;
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
        multiplier:4,
        priceMultiplier:2
    },
    {
        multiplier:3,
        priceMultiplier: 3
    },
    {
        multiplier:2.5,
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
    },
    {
        multiplier:1.5,
        priceMultiplier: 3
    },
    {
        multiplier:1.5,
        priceMultiplier: 3
    },
    {
        multiplier:1.5,
        priceMultiplier: 3
    },
    {
        multiplier:1.5,
        priceMultiplier: 3
    },
    {
        multiplier:1.5,
        priceMultiplier: 3
    },
    {
        multiplier:1.5,
        priceMultiplier: 3
    }

];


function drawUpgrades() {
    console.log(currentACU);
    if(currentRCU != reduceCooldownUpgrades.length /*|| currentLevel == levels.length*/){
        $('#reduceCooldownUpgrade').show();
        $('#reduceCooldownUpgrade .price').html(Beautify(RCUprice()));
        $('#reduceCooldownUpgrade .multiplier').html(100-(reduceCooldownUpgrades[currentRCU].multiplier*100));
    } else {
        $('#reduceCooldownUpgrade').hide();
        $('#reduceCooldownUpgrade .price').html('Wait until the next level.')
        $('#reduceCooldownUpgrade .multiplier').html('');
    }
    if(currentACU != autoClickUpgrades.length /*|| currentLevel == levels.length*/){
        $('#autoClickUpgrade').show();
        $('#autoClickUpgrade .price').html(Beautify(ACUprice()));
        $('#autoClickUpgrade .multiplier').html((autoClickUpgrades[currentACU].multiplier*100-100));
    } else {
        $('#autoClickUpgrade').hide();
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
    newRCU();
});

function newRCU(){
    if(currentRCU != reduceCooldownUpgrades.length){
        if(points >= RCUprice()){
            points -= priceCRU*reduceCooldownUpgrades[currentRCU].priceMultiplier;
            coolDownTime *= reduceCooldownUpgrades[currentRCU].multiplier;
            priceCRU *= reduceCooldownUpgrades[currentRCU].priceMultiplier;
            if(currentRCU != reduceCooldownUpgrades.length){

                currentRCU += 1;
            }
        }
        drawUpgrades();
    }
}

$('#autoClickUpgrade').click(function(){

    if(currentACU == autoClickUpgrades.length){
        console.log(3333);
        return 0;
    }

    newACU();
});

function newACU(){
    if(currentACU != autoClickUpgrades.length){
        if(points >= ACUprice()){
            points -= priceACU*autoClickUpgrades[currentACU].priceMultiplier;
            pointsPerSecond *= autoClickUpgrades[currentACU].multiplier;
            priceACU *= autoClickUpgrades[currentACU].priceMultiplier;

            currentACU += 1;
            drawUpgrades();
        }
    }

}

/*
* This function will be run every time an upgrade is bought so
* it doesn't need to run in the render function. But it does
* need to be run initially here.
* */

function RCUprice(){
    return priceCRU*reduceCooldownUpgrades[currentRCU].priceMultiplier*priceMultiplier;
}
function ACUprice(){
    return priceACU*autoClickUpgrades[currentACU].priceMultiplier*priceMultiplier;
}
