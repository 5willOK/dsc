$(function() {
    // 获得宽度
    var screenW = document.documentElement.clientWidth || document.body.clientWidth

    // 设置宽度
    $("footer").css("width", screenW + "px");
})