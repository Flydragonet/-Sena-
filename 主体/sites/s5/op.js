var op = 
{   "type":1,
    
    "steps":10,
    
    "name":["旁白","旁白","Sena酱","Sena酱","Sena酱","旁白","我","我","我","Sena酱",],
    
    "texts":["西餐店开着空调，非常舒适","来吃饭的人很少，这里没有城市的嘈杂感",
            "芜湖，好久没吃西餐了","之前印象中的西餐还是很不健康的食品",
            "但是最近几年好多西餐店都开始向精致与轻奢转型了呢~","Sena酱品尝了一口香煎西葫芦佐柠檬乳酪和榛子青酱，并表示好吃",
            "（为什么有些西餐店的菜名这么长）","（算了，尝一口那个黄桃鹅肝吧，这可是在学校里吃不到的东西）",
            "（！！！口感竟如此绵密丝滑）","也就现在暑假能大吃特吃，过几周开学了又得控制饮食了呢",],
    
    "small":["none","none","FA01A_A030","FA01A_A020","FA01A_A020","none","none","none","none","FA01A_A121"],

    "big":["none","none","ST01C_B020","ST01C_B020","ST01C_B020","ST01C_B020","ST01C_B020","ST01C_B020","ST01C_B010","ST01C_B010"],

    "bigpos":["none","none","left","left","left","left","left","left","left","left"]
};
function MusicPlayer() {
	var music=document.getElementById("music");
	var status=1;
	music.play();
}
