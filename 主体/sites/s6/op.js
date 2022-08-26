var op = 
{   "type":1,
    
    "steps":10,
    
    "name":["旁白","旁白","Sena酱","Sena酱","我","Sena酱","Sena酱","我","Sena酱","Sena酱",],
    
    "texts":["中关村被各种大学包围","所以这里有许多面向学生群体的接地气商场",
            "让我猜一猜","你是不是没有陪女孩子逛过街",
            "放过孩子吧，孩子单身十九年，怎么可能跟女孩子逛过街","嘿嘿，今天就让我教教你怎么陪女生逛街",
            "万一你以后有女朋友了，你可得陪她逛街哦","（“万一”是吧…………）",
            "好，那就从挑衣服开始吧","你感觉我适合什么穿衣风格呢？",],
    
    "small":["none","none","FA01A_A060","FA01A_A060","none","FA01A_C030","FA01A_C030","none","FA01A_D020","FA01A_D020"],

    "big":["none","none","ST01C_B030","ST01C_B030","ST01C_B030","ST01C_B030","ST01C_B030","ST01C_B030","ST01C_D020","ST01C_D020",],

    "bigpos":["none","none","right","right","right","right","right","right","right","right"]
};
function MusicPlayer() {
	var music=document.getElementById("music");
	var status=1;
	music.play();
}