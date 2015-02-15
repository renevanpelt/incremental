
render = function(){
    $('#points').html(Math.floor(points));
    $('#ppc .value').html(pointsPerClick);
    $('#pps .value').html(pointsPerSecond);
    $('#cooldownTime .value').html(coolDownTime/1000 + ' sec.');


    $('#cooldown .value').html(Math.floor(coolDown*100) + '%');
    $('#coolDownBar').css('width', Math.floor(coolDown * 100) + '%') ;

};
