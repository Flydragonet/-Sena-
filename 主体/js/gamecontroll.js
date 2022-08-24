//每一个页面的数据保存在同文件夹下 op.js 的op对象里

var count = op.steps;//总点击次数
var pagename = op.nextpage;
var page_type = op.type;//场景类型：0为自动跳转，1为分支选择，2为结局决定
var click = 0;//当前点击次数

//显示对话函数
function next_text(){
    $("#texts").hide();
    $("#name").hide();
    document.getElementById("name").innerHTML = "【" + op.name[click] + "】";
    document.getElementById("texts").innerHTML =  op.texts[click];
    $("#texts").fadeIn();
    $("#name").fadeIn();
    return;
}

//显示小立绘
function next_small(){
    if(click==0){
        if(op.small[click]!="none"){
            document.getElementById("small_pic").src="../../../素材/小立绘/"+op.small[click]+".png";
            $("#small_pic").fadeIn();
        }
    }
    else{
        if(op.small[click-1]!=op.small[click]){
            $("#small_pic").hide();
            if(op.small[click]=="none"){
                document.getElementById("small_pic").src="../../../素材/小立绘/transparrent.png";
            }
            else{
                document.getElementById("small_pic").src="../../../素材/小立绘/"+op.small[click]+".png";
            }
            $("#small_pic").fadeIn();
        }
    }
    return;
}

//显示大立绘
function next_big(){
    if(click==0){
        if(op.big[click]!="none"){
            document.getElementById(op.bigpos[click]).src="../../../素材/大立绘/"+op.big[click]+".png";
            $(op.bigpos[click]).fadeIn();
        }
    }
    else{
        if(op.bigpos[click]!=op.bigpos[click-1] || op.big[click]!=op.big[click-1]){
            $(op.bigpos[click-1]).hide();
            if(op.big[click]=="none"){
                document.getElementById(op.bigpos[click]).src="../../../素材/大立绘/transparrent.png";
            }
            else{
                document.getElementById(op.bigpos[click]).src="../../../素材/大立绘/"+op.big[click]+".png";
            }
            $(op.bigpos[click]).fadeIn();
        }
    }
    return;
}

//跳转指定页面
function goto(apage){
    $("body").fadeOut(1000,function(){window.location.replace(apage);})
};

//总控函数
function next_move(){
    //如果当前未到该页面结束，执行一系列动画
    if(click<count){
       next_text();
       next_small();
       next_big();
       click++;
    }
    else{//本页面已结束
        switch(page_type){
            case 0://自动跳转
                goto("../"+pagename);
                break;
            case 1://分支选择框出现
                $("#selection_box").fadeIn();
                break;
            case 2:
        }
    }
};

//保存函数
function Save(GameName,GameAddress){
    localStorage.setItem("GameName",GameName);
    localStorage.setItem("GameAddress",GameAddress);
    alert(GameName + "保存成功");
}



