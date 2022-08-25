App.onJoinPlayer.Add(function(player){
    player.moveSpeed = 300;
    player.title = '여행';
    player.sendUpdated();
})