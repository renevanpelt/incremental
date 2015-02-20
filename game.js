var upgrades = [];
var priceMultiplier = 1;
var currentRCU = 0;
var priceCRU = 1;
var levels;
var currentLevel;
var currentACU = 0;
var priceACU = 1;
var buttons = [];
var points = 0000000000000;

var nums = ['k','M','B','T','Qa','Qi', 'Sx', 'Sp', 'Oc', 'No', 'De', 'UnD', 'DuD', 'TrD', 'QaD', 'QiD', 'SeD', 'SpD', 'OcD', 'NoD', 'Vi', 'UnV'];

function Beautify(num)
{
    if (!isFinite(num)) return 'Infinity'
    if(num < 1e3 || num >= parseFloat('1e' + 3*(nums.length))) return     Math.round(num)
    var i = 0;
    while(num >= 1000)
    {
        num/=1000;
        i++;
    }
    num = Math.round(num*1000)/1000;
    if(num>=1000)
    {
        num/=1000;
        i++;
        num = Math.round(num*1000)/1000;
    } //deals with rounding errors
    num = num.toFixed(2);
    return num + nums[i - 1]
}

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


