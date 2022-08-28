var op =
{
    "type": 0,
    "nextpage": "../../登录/menu.html",

    "steps": 1,

    "name": ["旁白"],
    "texts": ["你达成了特殊结局"],

    "small": ["none"],

    "big": ["none"],

    "bigpos": ["none"]
};

var index = window.localStorage.userid;
var array = JSON.parse(window.localStorage.userArr);
array[index].achi1 = 1;
alert("达成结局成就“网瘾少年”");
array[index].likability = 0;
if (!(array[index].achi8 > 0 && array[index].achi8 < 4)) {
    array[index].achi8 = 1;
}
else array[index].achi8 = array[index].achi8 + 1;
if (array[index].achi8 == 4) {
    alert("达成全结局成就")
}
window.localStorage.userArr = JSON.stringify(array);


function MusicPlayer() {
    var music = document.getElementById("music");
    var status = 1;
    music.play();
}

