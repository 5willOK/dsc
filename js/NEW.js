$(function() {
    // 获得宽度
    var screenW = document.documentElement.clientWidth || document.body.clientWidth

    // 设置宽度
    // "展示"的宽度
    $(".show").css("width", screenW + "px");
    // "第一个轮播图"的ul,li宽度
    $(".banner .banner-ul li").css("width", screenW + "px");
    $(".banner-ul").css("width", screenW + "px");


    var f = 0;
    // 分类
    $(".classify li").click(function() {
        f = 0

        // 全部隐藏
        $(".product").hide()
        $(".preSaleNewTime").hide()
        $(".content .without").hide()

        // 排他
        $(this).addClass("selected").siblings("li").removeClass("selected")

        // 筛选
        for (var i = 0; i < 5; i++) {
            if ($(this).find("a").html() == $(".product").eq(i).attr("data-name") && $(".condition .selected").attr("data-time") == $(".product").eq(i).attr("data-time")) {
                $(".product").eq(i).show()
                f++;
                for (var a = 0; a < 4; a++) {
                    if ($(".preSaleNewTime").eq(a).attr("data-number") == $(".product").eq(i).attr("data-number")) {
                        $(".preSaleNewTime").eq(a).show()
                    }
                }
            } else if ($(this).find("a").html() == $(".product").eq(i).attr("data-name") && $(".condition .selected").find("a").html() == $(".product").eq(i).attr("data-all")) {
                $(".product").eq(i).show()
                f++;
                for (var a = 0; a < 4; a++) {
                    if ($(".preSaleNewTime").eq(a).attr("data-number") == $(".product").eq(i).attr("data-number")) {
                        $(".preSaleNewTime").eq(a).show()
                    }
                }
            } else if ($(".condition .selected").attr("data-time") == $(".product").eq(i).attr("data-time") && $(this).find("a").html() == $(".product").eq(i).attr("data-all")) {
                $(".product").eq(i).show()
                f++;
                for (var a = 0; a < 4; a++) {
                    if ($(".preSaleNewTime").eq(a).attr("data-number") == $(".product").eq(i).attr("data-number")) {
                        $(".preSaleNewTime").eq(a).show()
                    }
                }
                console.log(11);
            } else if ($(this).find("a").html() == $(".filter-quanbu").find("a").html() && $(".condition .selected").find("a").html() == $(".filter-quanbu").find("a").html()) {
                $(".product").show()
                $(".preSaleNewTime").show()

                f++;
            }
        }
        if (f == 0) {
            $(".content .without").show()
        }
    })

    // 状态
    $(".condition li").click(function() {
        f = 0

        // 全部隐藏
        $(".product").hide()
        $(".preSaleNewTime").hide()
        $(".content .without").hide()

        // 排他
        $(this).addClass("selected").siblings("li").removeClass("selected")

        // 筛选
        for (var i = 0; i < 5; i++) {
            if ($(this).attr("data-time") == $(".product").eq(i).attr("data-time") && $(".classify .selected").find("a").html() == $(".product").eq(i).attr("data-name")) {
                $(".product").eq(i).show()
                f++;
                for (var a = 0; a < 4; a++) {
                    if ($(".preSaleNewTime").eq(a).attr("data-number") == $(".product").eq(i).attr("data-number")) {
                        $(".preSaleNewTime").eq(a).show()

                    }
                }
            } else if ($(this).attr("data-time") == $(".product").eq(i).attr("data-time") && $(".classify .selected").find("a").html() == $(".product").eq(i).attr("data-all")) {
                $(".product").eq(i).show()
                f++;
                for (var a = 0; a < 4; a++) {
                    if ($(".preSaleNewTime").eq(a).attr("data-number") == $(".product").eq(i).attr("data-number")) {
                        $(".preSaleNewTime").eq(a).show()

                    }
                }
            } else if ($(".classify .selected").find("a").html() == $(".product").eq(i).attr("data-name") && $(this).find("a").html() == $(".product").eq(i).attr("data-all")) {
                $(".product").eq(i).show()
                f++;
                for (var a = 0; a < 4; a++) {
                    if ($(".preSaleNewTime").eq(a).attr("data-number") == $(".product").eq(i).attr("data-number")) {
                        $(".preSaleNewTime").eq(a).show()

                    }
                }
            } else if ($(this).find("a").html() == $(".filter-quanbu").find("a").html() && $(".classify .selected").find("a").html() == $(".filter-quanbu").find("a").html()) {
                $(".product").show()
                $(".preSaleNewTime").show()
                f++;
            }
        }
        if (f == 0) {
            $(".content .without").show()
        }
    })
})