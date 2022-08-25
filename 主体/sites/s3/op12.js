var op = 
{   "type":1,

    "steps":8,
    
    "name":["旁白","旁白","Sena酱","我","我","Sena酱","Sena酱","Sena酱",],
    
    "texts":["今天是一个大晴天",
            "虽然天气很热，但是行走中的两人有说有笑，气氛融洽",
            "你还记得Ayane吗，她在高中时是你的同班同学吧",
            "是的，但最近不咋联系了",
            "她不想在计算机专业内卷，所以去学别的专业了，哈哈",
            "之前学英语二级的时候我和她是同一组呢",
            "我觉得她人挺好的，还说跟你挺熟",
            "你对她有什么看法吗"],
    
    "small":["none","none","FA01A_A020","none","none","FA01A_A020","FA01A_A020","FA01A_B010"],

    "big":["none","none","ST01C_A020","ST01C_A020","ST01C_A020","ST01C_A020","ST01C_A020","ST01C_B010"],

    "bigpos":["none","none","middle","middle","middle","middle","middle","middle"]
};
function MusicPlayer() {
	var music=document.getElementById("music");
	var status=1;
	music.play();
}
