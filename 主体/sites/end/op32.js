var op =
{
    "type": 0,

    "nextpage": "../../登录/menu.html",

    "steps": 11,

    "name": ["Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "我", "我", "Sena酱", "旁白"],

    "texts": ["唉，事到如今，我也不能嘴硬了呢", "你这人啊",
        "这种事直接跟我说就好了嘛",
        "谈恋爱还是得真诚一些呢",
        "像今天这种事，如果你以前不担心这担心那，直接跟我说，不就不会发生了吗",
        "以后，跟我在一块，放开一点",
        "你看我是不是有什么事都跟你说", "好…………我明白了",
        "那么，你的意思是答应我的告白了？", "呵呵，暂时答应了吧，之后还是看你表现呢",
        "恭喜！你达成了好结局"],

    "small": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"],

    "big": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"],

    "bigpos": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
};
var index = window.localStorage.userid;
var array = JSON.parse(window.localStorage.userArr);
array[index].achi2 = 1;
alert("达成结局成就“人生赢家”");
array[index].achi8 = array[index].achi8 + 1;
if (array[index].achi8 == 4) {
    alert("达成全结局成就");
}
window.localStorage.userArr = JSON.stringify(array);


