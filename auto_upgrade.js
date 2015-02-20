var currentUpgrade;

currentUpgrade = 'none';

function autoUpgrade(){
    if(currentUpgrade == 'ACU'){
        if(currentACU == autoClickUpgrades.length){
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
        return 0;
    }
}


$('.down-right').click(function(){
    console.log(this);
    $('.upgrade .active').removeClass("active");

    if (currentUpgrade == $(this).prop('id')){
        currentUpgrade = 'none';
    } else {
        currentUpgrade = $(this).prop('id');
        $(this).addClass('active');
        
    }
});
