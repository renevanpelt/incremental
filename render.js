
render = function(){
    $('#points').html(Math.floor(points));
    $('#ppc .value').html(Math.round(pointsPerClick));
    $('#pps .value').html(Math.round(pointsPerSecond));
    $('#cooldownTime .value').html(Math.round(coolDownTime/1000,2) + ' sec.');


    $('#cooldown .value').html(Math.floor(coolDown*100) + '%');
    $('#coolDownBar').css('width', Math.floor(coolDown * 100) + '%') ;

};
