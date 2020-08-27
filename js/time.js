// 获取盒子
var oTime = document.getElementsByClassName("time");

// 计时器运行函数
setInterval(gettime1, 100)
setInterval(gettime2, 100)
setInterval(gettime3, 100)

// 倒计时
function getTimer(setT, index) {

    // 现在
    var now = +new Date();

    // 设定的
    var setTime = +new Date(setT);

    // 获取剩余时间
    var disTime = (setTime - now) / 1000;

    // 天数
    var daytime = parseInt(disTime / 60 / 60 / 24);
    daytime = daytime < 10 ? '0' + daytime : daytime;

    // 小时
    var dayHour = parseInt(disTime / 60 / 60 % 24);
    dayHour = dayHour < 10 ? '0' + dayHour : dayHour;

    //分
    var dayMin = parseInt(disTime / 60 % 60);
    dayMin = dayMin < 10 ? '0' + dayMin : dayMin;

    // 秒
    var daysec = parseInt(disTime % 60);
    daysec = daysec < 10 ? '0' + daysec : daysec;

    // 添加到盒子
    var relTime = "倒计时" + '<span class="days">' + daytime + '</span>' + "天&nbsp;" + '<span class="hours">' + dayHour + ':</span>' + '<span class="minutes">' + dayMin + ':</span>' + '<span class="seconds">' + daysec + '</span>';
    oTime[index].innerHTML = relTime;


}

function gettime1() {
    return getTimer('2021-4-30 14:00:00', 0);
}

function gettime2() {
    return getTimer('2021-4-30 14:00:00', 1);
}

function gettime3() {
    return getTimer('2022-1-31 12:00:00', 2);
}