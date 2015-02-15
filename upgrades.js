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
        multiplier:1.7,
        priceMultiplier: 3
    },
    {
        multiplier:1.9,
        priceMultiplier: 3
    },
    {
        multiplier:1.9,
        priceMultiplier: 3
    },
    {
        multiplier:1.9,
        priceMultiplier: 3
    }

];

function newRCU() {

    if(points >= priceCRU*reduceCooldownUpgrades[currentRCU].priceMultiplier ){
        points -= priceCRU*reduceCooldownUpgrades[currentRCU].priceMultiplier;
        coolDownTime *= reduceCooldownUpgrades[currentRCU].multiplier;
        priceCRU *= reduceCooldownUpgrades[currentRCU].priceMultiplier;
        currentRCU += 1;
        drawRCU();
    }
}

function newACU() {

    if(points >= priceACU*autoClickUpgrades[currentACU].priceMultiplier ){
        points -= priceACU*autoClickUpgrades[currentACU].priceMultiplier;
        pointsPerSecond *= autoClickUpgrades[currentACU].multiplier;
        priceACU *= autoClickUpgrades[currentACU].priceMultiplier;
        currentACU += 1;
        drawACU();
    }
}

function drawRCU() {
    if(currentRCU != reduceCooldownUpgrades.length){
        $('#reduceCooldownUpgrade .price').html(reduceCooldownUpgrades[currentRCU].priceMultiplier*priceCRU);
        $('#reduceCooldownUpgrade .multiplier').html(100-(reduceCooldownUpgrades[currentRCU].multiplier*100));
    } else {
        $('#reduceCooldownUpgrade').html('Wait until the next level.')
    }
}

function drawACU() {
    if(currentACU != autoClickUpgrades.length){
        $('#autoClickUpgrade .price').html(autoClickUpgrades[currentACU].priceMultiplier*priceACU);
        $('#autoClickUpgrade .multiplier').html((autoClickUpgrades[currentACU].multiplier*100-100));
    } else {
        $('#autoClickUpgrade').html('Wait until the next level.')
    }
}


$('#reduceCooldownUpgrade').click(function(){

    if(currentRCU == reduceCooldownUpgrades.length){
        return 0;
    }
    newRCU();
});

$('#autoClickUpgrade').click(function(){

    if(currentACU == reduceCooldownUpgrades.length){
        return 0;
    }
    newACU();
});


drawRCU();
drawACU();



