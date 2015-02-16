
render = function(){
    $('#points').html(Math.floor(points));
    $('#ppc .value').html(pointsPerClick.toFixed(1));
    $('#pps .value').html(pointsPerSecond.toFixed(1));
    $('#cooldownTime .value').html(Math.round(coolDownTime).toFixed(2)/1000+ ' sec.');


    $('#cooldown .value').html(Math.floor(coolDown*100) + '%');
//    $('#coolDownBar').css('width', Math.floor(coolDown * 100) + '%') ;

};
