var op = 
{   "type":0,

    "nextpage":"index.html",

    "steps":4,
    
    "name":["来自Sena酱的微信消息","来自Sena酱的微信消息","来自Sena酱的微信消息","来自Sena酱的微信消息",],
    "texts":["你怎么总是这样，天天就想着去网吧打游戏",
            "我现在知道你一直找不到女朋友的原因了,跟女生出来玩也得顾及一下对方的感受啊，谈恋爱最重要的就是互相理解与着想。",
            "这个世界很精彩，希望你别老窝在网吧打游戏，多出来感受一下外边的世界吧。",
            "以后我们有缘再会。"],
    
    "small":["FA01A_A120","FA01A_A120","FA01A_A120","FA01A_A120",],

    "big":["none","none","none","none",],

    "bigpos":["none","none","none","none",]
};
function MusicPlayer() {
	var music=document.getElementById("music");
	music.play();
    music.loop=false;
    music.preload=true;
    music.volume=1;
}
function MusicPlayer2() {
	var music=document.getElementById("music2");
	music.play();
    music.loop=false;
    music.preload=true;
    music.volume=1;
}
