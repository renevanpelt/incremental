var upgrades = [];
var priceMultiplier = 1;
var currentRCU = 0;
var priceCRU = 1;
var levels;
var currentLevel;
var currentACU = 0;
var priceACU = 1;
var buttons = [];
var points = 0;

main = function(){
    drawUpgrades();


    setInterval(function(){

        update();
        render();
    }, 50);

};

$(document).ready(function(){
    main();
});


