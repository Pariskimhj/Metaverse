App.onJoinPlayer.Add(function(player){

    let mbtis = ["ENFP", "ESTJ", "INFP", "ISTP"]

    let nth = Math.floor(Math.random() * mbtis.length);

    player.moveSpeed = 300;
    player.title = mbtis[nth];
    player.sendUpdated();
})