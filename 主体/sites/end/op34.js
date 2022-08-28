var op =
{
    "type": 0,

    "nextpage": "../../登录/menu.html",

    "steps": 10,

    "name": ["Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "旁白", "旁白"],

    "texts": ["呵呵……",
        "你这个人，有什么事，总是藏着掖着",
        "让我感觉一直跟你有种距离感呢",
        "如果你能再真诚一些，可能就能找到女朋友了呢",
        "除了这一点，我觉得我跟你也有很多不合的地方",
        "总之……",
        "你还是放下这段感情吧",
        "这样对我们俩都好",
        "Sena酱摆了摆手，离开了",
        "你达成了坏结局，仍需努力！"],

    "small": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"],

    "big": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"],

    "bigpos": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
};
var index = window.localStorage.userid;
var array = JSON.parse(window.localStorage.userArr);
array[index].achi4 = 1;
alert("达成结局成就“实力单身”");
array[index].achi8 = array[index].achi8 + 1;
if (array[index].achi8 == 4) {
    alert("达成全结局成就");
}
window.localStorage.userArr = JSON.stringify(array);

