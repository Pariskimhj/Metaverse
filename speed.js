App.onJoinPlayer.Add(function(player){
    player.moveSpeed = 300;
    player.sendUpdated();
})