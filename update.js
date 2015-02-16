

update = function(){
    autoClick();
    autoUpgrade();
    var cd_delta = Date.now() - lastClick;
    coolDown = cd_delta/coolDownTime;
    coolDown = coolDown > 1 ? 1 : coolDown;

};
