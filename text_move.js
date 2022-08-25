App.onSay.Add(function(player, text){

    if(text == 'speed up'){
        player.moveSpeed = 400;
    }
    if(text == 'speed down'){
        player.moveSpeed = 30;
    }
    player.sendUpdated();
})