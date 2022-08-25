App.onSay.Add(function(player, text){
    let message = player.name + '님이 ' + text + '(이)라고 말했습니다';
    App.showCenterLabel(message);
})