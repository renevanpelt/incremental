var currentUpgrade;

currentUpgrade = 'none';

function autoUpgrade(){
    if(currentUpgrade == 'ACU'){
        if(currentACU == reduceCooldownUpgrades.length){
            return 0;
        }
        newACU();
    }
    if(currentUpgrade == 'CRU'){
        if(currentRCU == reduceCooldownUpgrades.length){
            return 0;
        }
        newRCU();

    }
    if(currentUpgrade == 'none'){

    }
}


$('.down-right').click(function(){
    console.log(this);
    $('.upgrade .active').removeClass("active");
    currentUpgrade = $(this).prop('id');
    $(this).addClass('active');
});
