$(function() {
    // 获得宽度
    var screenW = document.documentElement.clientWidth || document.body.clientWidth

    // 设置宽度
    // "展示"的宽度
    $(".show").css("width", screenW + "px");
    // "主题内容"的宽度
    $(".content").css("width", screenW + "px");
    // "第一个轮播图"的ul,li宽度
    $(".tempWrap #bd li").css("width", screenW + "px");
    $("#bd").css("width", screenW * 4 + "px");

    // 第一个轮播
    function First() {
        // 获取li宽度
        var bdliwidth = Math.abs(screenW);

        var index = 0;
        $(".tempWrap #bd li").first().clone().appendTo(".tempWrap #bd");
        var length = $(".tempWrap #bd li").length;

        //  计时器
        var timer = setInterval(sliderTimer, 2000)

        // 自动轮播
        function sliderTimer() {
            index++;
            move()
        }


        // 鼠标放上去暂停
        $(".banner").hover(function() {
            clearInterval(timer)
        }, function() {
            timer = setInterval(sliderTimer, 2000)
        })

        // 小圆点
        for (var i = 0; i < length - 1; i++) {
            $(".pre-banner #dotted").append('<li></li>');
        }
        $(".pre-banner #dotted li").first().addClass("on");
        // 小圆点事件
        $(".pre-banner #dotted li").hover(function() {
            index = $(this).index();
            $(".tempWrap #bd").stop().animate({ left: -index * bdliwidth }, 500)
            $(".pre-banner #dotted li").eq(index).addClass("on").siblings().removeClass("on")
        })

        //  移动

        function move() {
            if (index == length) {
                $(".tempWrap #bd").css({ left: 0 });
                index = 1;
            }
            if (index == -1) {
                $(".tempWrap #bd").css({ left: -(length - 1) * bdliwidth })
                index = length - 2
            }
            $(".tempWrap #bd").stop().animate({ left: -index * bdliwidth }, 800)
            if (index == length - 1) {
                $(".pre-banner #dotted li").eq(0).addClass("on").siblings().removeClass("on")
            } else {
                $(".pre-banner #dotted li").eq(index).addClass("on").siblings().removeClass("on")
            }
        }
    }
    First()


    // 第二个轮播
    function Second() {
        // 获取li宽度
        var imgliwidth = 600;

        var index = 0;
        $(".content-banner .content-banner-img li").first().clone().appendTo(".content-banner .content-banner-img");
        var length = $(".content-banner .content-banner-img li").length;

        //  计时器
        var timer = setInterval(sliderTimer, 2000)

        // 自动轮播
        function sliderTimer() {
            index++;
            move()
        }


        // 鼠标放上去暂停
        $(".content-banner").hover(function() {
            clearInterval(timer)
            $(".prev").css("display", "block")
            $(".next").css("display", "block")
        }, function() {
            timer = setInterval(sliderTimer, 2000)
            $(".prev").css("display", "none")
            $(".next").css("display", "none")
        })

        // 小圆点
        for (var i = 0; i < length - 1; i++) {
            $(".content-banner .content-banner-circle").append('<li class=""></li>');
        }
        $(".content-banner .content-banner-circle li").first().addClass("oq");
        // 小圆点事件
        $(".content-banner .content-banner-circle li").hover(function() {
            index = $(this).index();
            console.log(index);
            $(".content-banner .content-banner-img").stop().animate({ left: -index * imgliwidth }, 500)
            $(".content-banner .content-banner-circle li").eq(index).addClass("oq").siblings().removeClass("oq")
        })

        // 给左右按钮绑定事件
        $(".prev").click(function() {
            index--
            move()
        })
        $(".next").click(function() {
            index++
            move()
        })

        //  移动

        function move() {
            if (index == length) {
                $(".content-banner .content-banner-img").css({ left: 0 });
                index = 1;
            }
            if (index == -1) {
                $(".content-banner .content-banner-img").css({ left: -(length - 1) * imgliwidth })
                index = length - 2
            }
            $(".content-banner .content-banner-img").stop().animate({ left: -index * imgliwidth }, 800)
            if (index == length - 1) {
                $(".content-banner .content-banner-circle li").eq(0).addClass("oq").siblings().removeClass("oq")
            } else {
                $(".content-banner .content-banner-circle li").eq(index).addClass("oq").siblings().removeClass("oq")
            }
        }
    }
    Second()


})