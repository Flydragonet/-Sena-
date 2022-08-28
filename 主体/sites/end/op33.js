var op =
{
    "type": 0,

    "nextpage": "../../登录/menu.html",

    "steps": 13,

    "name": ["Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "Sena酱", "旁白"],

    "texts": ["呵呵……", "你怎么回事",
        "这么快就告白？", "怎么说呢……",
        "我不想直接拒绝你", "但是你确实有些我不能接受的点",
        "比如说，今天这个事", "如果你早点跟我说，不就不会引发今天的事故了吗",
        "谈恋爱，讲究一个真诚", "有什么事，沟通就好了，何必非要瞒着呢",
        "总之……", "我可能还不能接受你的告白",
        "你达成了一般结局，仍需努力"],

    "small": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",],

    "big": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",],

    "bigpos": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",]
};
var index = window.localStorage.userid;
var array = JSON.parse(window.localStorage.userArr);
array[index].achi3 = 1;
array[index].likability = 0;
alert("达成结局成就“你是个好人”");
if (!(array[index].achi8 > 0 && array[index].achi8 < 4)) {
    array[index].achi8 = 1;
}
else array[index].achi8 = array[index].achi8 + 1;
if (array[index].achi8 == 4) {
    alert("达成全结局成就")
}
window.localStorage.userArr = JSON.stringify(array);