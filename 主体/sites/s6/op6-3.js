var op = 
{   "type":0,

    "nextpage":"../../game1/index.html",
    
    "steps":8,
    
    "name":["旁白","旁白","旁白","我","旁白","活动主持人","Sena酱","我"],
    
    "texts":["之后，你们逛了很多家店","……一个小时后……",
            "你们走到了一个广场，发现广场上有一群人聚集","那是啥，过去看看吧","你们走过去，发现是商场在举办活动","（大声呼喊）在商场消费的顾客，可以参与小游戏的游玩，获胜者可以获得精美礼品","呕吼？你要不要试试去，正好给我们这趟留个纪念品呢","交给我吧！"],
    
    "small":["none","none","none","none","none","none","FA01A_A020","none",],

    "big":["none","none","none","none","none","none","none","none",],

    "bigpos":["none","none","none","none","none","none","none","none",]
};
function MusicPlayer() {
	var music=document.getElementById("music");
	var status=1;
	music.play();
}