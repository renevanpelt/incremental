
render = function(){
    $('#points').html(Math.floor(points));
    $('#ppc .value').html(Math.round(pointsPerClick),2);
    $('#pps .value').html(Math.round(pointsPerSecond),2);
    $('#cooldownTime .value').html(Math.round(coolDownTime/1000,2) + ' sec.');


    $('#cooldown .value').html(Math.floor(coolDown*100) + '%');
    $('#coolDownBar').css('width', Math.floor(coolDown * 100) + '%') ;

};
