var currentUpgrade;

currentUpgrade = 'none';

function autoUpgrade(){
    if(currentUpgrade == 'ACU'){
        newACU();
    }
    if(currentUpgrade == 'CRU'){
        newCRU();

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
