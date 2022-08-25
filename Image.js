// spartan이라는 변수를 자바스크립트 문법에 맞게 생성

// 이미지, 너비, 높이
let spartan = App.loadSpritesheet('spartan.png', 64, 96, {

    // 방향키를 눌렀을 때 몇 번째 이미지를 반복시킬건지
    
    left: [0, 1, 2, 3], // left 라는 이미 정해진 왼쪽 방향으로 걸을 때의 애니메이션 이름
    up: [0], // 그 이름에 쓰일 전체 파일에서의 인덱스 넘버들
    down: [0],
    right: [0, 1, 2, 3],
}, 8); // 1초에 8장으로 한다.
    
    
    // 플레이어가 입장할 때(listen), 바로 spartan 그림으로 교체줍니다(action)
App.onJoinPlayer.Add(function(player){

    player.sprite = spartan; 
    // 플레이어 속성이 변경되었으므로 호출해서 실제 반영해준다.
    player.sendUpdated();
    
})