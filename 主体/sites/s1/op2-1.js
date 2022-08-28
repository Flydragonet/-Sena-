var op =
{
    "type": 0,

    "nextpage": "s1/page_3.html",

    "steps": 21,

    "name": ["旁白", "旁白", "我", "我", "旁白", "我", "我", "我", "我", "旁白", "我", "我", "我", "我", "我", "我", "旁白", "旁白", "旁白", "旁白", "我",],

    "texts": ["你醒了", "看了一眼手机，设定好的闹钟还有2分钟响铃", "芜湖！",
        "今日日程：和Sena酱约会", "你蹭的一下起了床", "我决定好了，今天就要给这件事情做个了结",
        "遥想四年前，我跟她还是同一所高中", "虽然不是同班的吧，但也算是有缘分了", "没想到她竟然也考来了北理工",
        "你利索地穿上了衣服，来到镜子面前，看了看自己", "哈哈", "虽然我很优秀，但是没想到我竟然有一天也能跟女生约会呢",
        "从小到大，我都是一个社恐，几乎没谈过恋爱", "大学刚入学的时候我倒是勇了一把，去主动和Sena酱套近乎", "现在来看情况还不错，跟她是很好的朋友了",
        "而且我们还都选了计算机专业", "你简单地洗漱了一下", "按理说今天应该精致地打扮一下自己",
        "但是你没有打扮自己的经验，每天都是随便从衣柜里抓来衣服穿", "你背上了书包，站在了门口", "今天，就要把事情了结",],

    "small": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",],

    "big": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",],

    "bigpos": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none",]
};

var index = window.localStorage.userid;
var array = JSON.parse(window.localStorage.userArr);
array[index].likability = 0;
window.localStorage.userArr = JSON.stringify(array);
