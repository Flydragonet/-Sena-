var op = 
{   "type":0,

    "nextpage":"../../game2/index.html",
    
    "steps":6,
    
    "name":["旁白","Sena酱","Sena酱","Sena酱","Sena酱","我",],
    
    "texts":["你们随便走进了一家杂货店","现在的杂货店可真是什么都有呢",
            "各种有趣的小玩意都安排上了","比如说这个“复古游戏机","这有个试玩机欸，你不玩玩？","没玩过游戏机，但是可以试试",],
    
    "small":["none","FA01A_B020","FA01A_B020","FA01A_B020","FA01A_B020","none",],

    "big":["none","ST01C_A010","ST01C_A010","ST01C_A010","ST01C_A010","ST01C_A010",],

    "bigpos":["right","right","right","right","right","right",]
};
function MusicPlayer() {
	var music=document.getElementById("music");
	var status=1;
	music.play();
}