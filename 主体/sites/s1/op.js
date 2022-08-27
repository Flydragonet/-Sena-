var op = 
{   "type":0,
    
    "nextpage":"s2/page_4.html",
    
    "steps":6,
    
    "name":["旁白","旁白","旁白","旁白","我","旁白"],
    
    "texts":["你和Sena酱约在了学校门口见面，嗯，当然是中关村校区",
            "(5分钟过去了)",
            "(10分钟过去了)",
            "(20分钟过去了)",
            "Sena酱怎么还没到，都已经迟到半个小时了",
            "身后传来急促的脚步声"],
    
    "small":["none","none","none","none","none","none"],

    "big":["none","none","none","none","none","none"],

    "bigpos":["none","none","none","none","none","none"]
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
