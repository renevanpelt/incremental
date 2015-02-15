

update = function(){
    autoClick();
    var cd_delta = Date.now() - lastClick;
    coolDown = cd_delta/coolDownTime;
    coolDown = coolDown > 1 ? 1 : coolDown;



    //console.log(cd_delta);

};
