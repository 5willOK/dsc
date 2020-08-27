// 头部js部分
// 位置定位部分
var oA = $('.header-letter').children();
var length = $('.header-letter').children().length;
oA.each(function() {
        var index = $(this).index();
        $(this).hover(function() {
            // 卷进去的高度
            var ulheight = index * parseInt($(this).position().top - 4);
            if (index < length - 2) {
                $('#header-lists').stop().animate({
                    'top': -ulheight
                }, 200, 'linear')
            }
            // 滚动条滚动的最大距离总高度
            var scrollMaxH = $('.header-scorllBar').height() - $('.header-bar').height();
            // 三个li的高度,让最后一个li永远在最下面
            var lisH = $('#header-lists').children('li').eq(0).height() * 3;
            // 滚动条滚动的偏移量
            var bi = ulheight * scrollMaxH / ($('#header-lists').height() - lisH);
            if (index > 0 && index < length - 2) {
                $('.header-bar').stop().animate({
                    'top': bi
                }, 200);
            } else if (index == 0) {
                $('.header-bar').css('top', 0);
            }
        })
    })
    // 滚动条拖拽
$('.header-bar').mousedown(function(e) {
        // 鼠标在滚动条中的落点坐标
        var disY = e.pageY - $('.header-bar').offset().top;
        // 滚动跳拖动的最大距离
        var barMaxHeight = $('.header-scorllBar').height() - $('.header-bar').height();
        // ul的高度与滚动条移动最大范围的比
        var proportion = ($('#header-lists').height() - 150) / barMaxHeight;
        $(".header-scrollboty").mousemove(function(e) {
            // 滚动条在父盒子中移动的坐标位置
            var oTop = e.pageY - $(this).offset().top;
            // 相对应的ul所移动的距离
            var ulTop = -proportion * oTop + 'px';
            if (oTop >= 0 && oTop <= barMaxHeight) {
                oTop = oTop + 'px';
                //滚动跳拖动距离
                $('.header-bar').css('top', oTop);
                // 改变相对应的ul的top值
                $('#header-lists').css('top', ulTop);
            }
        })
    })
    // 解绑
$(".header-location").mouseup(function() {
    $(".header-scrollboty").off('mousemove');
});
// 显示
$('.header-icon,.header-location').hover(function() {
        $('.header-zen,.header-location').show();
        $('.header-icon').addClass('header-if');
    }, function() {
        $('.header-zen,.header-location').hide();
        $('.header-icon').removeClass('header-if');
    })
    /* 网站导航 */
$('.header-for').hover(function() {
        $(this).addClass('header-dorp-fore')
        $('.header-dorpdown1').show().slideDown(600, 'linear')
    }, function() {
        $('.header-dorpdown1').hide()
        $(this).removeClass('header-dorp-fore')
    })
    /* 购物车 */
$('.header-shopping,.header-dorpdown').hover(function() {
        $('.header-dorpdown').show()
    }, function() {
        $('.header-dorpdown').hide()
    })
    // 商品分类
$('.header-cat,.header-tab').hover(function() {
    $('.header-tab').show()
}, function() {
    $('.header-tab').hide()
});
$('.header-item-layer').hide();
var headerItem = $('.header-tab').find('.header-item')
headerItem.each(function(index) {
    $(this).hover(function() {
        $(this).addClass('background')
        $('.header-item-layer').eq(index).show()
    }, function() {
        $('.header-item-layer').eq(index).hide()
        $(this).removeClass('background')
    })
})

// 广告淡入淡出
$(function() {
    var index = 1;
    var flag = true;

    function changeImg() {
        $(".banner .bd ul li")
            .eq(index)
            .stop()
            .fadeIn(600, function() {
                flag = true;
            })
            .siblings("li")
            .fadeOut(200);
        $(".banner .circle ul li")
            .eq(index)
            .addClass("active")
            .siblings("li")
            .removeClass("active");
    }
    $(".banner .circle ul li").mouseenter(function() {
        if (flag) {
            index = $(this).index();
            changeImg();
        }
        flag = false;
    });

    var timer = setInterval(function() {
        if (index >= $(".banner .bd ul li").length) {
            index = 0;
        }
        // 下面的代码要写在if外面是因为如果代码在if里面最后一张图index++后index=5跳出if然后等3s，再次进入if又等3秒
        // console.log(index);
        changeImg();
        index++;
    }, 3000);
    $(".banner").mouseenter(function() {
        clearInterval(timer);
    });
    $(".banner").mouseleave(function() {
        timer = setInterval(function() {
            if (index >= $(".banner .bd ul li").length) {
                index = 0;
            }
            changeImg();
            index++;
        }, 3000);
    });
});

//热门推荐
$(function() {
    var index = 0;
    $(".hot .hot-show >ul:first").css("display", "block");
    $(".hot .hot-nav ul li:first").addClass("active").siblings("li").removeClass("active");

    function changeMe() {
        $(".hot .hot-nav ul li").eq(index).addClass("active").siblings("li").removeClass("active")
    }
    $(".hot .hot-nav ul li").mouseenter(function() {
        index = $(this).index()
        var timeout = setTimeout(function() {
            $(".hot-show >ul").eq(index).fadeIn().siblings("ul").fadeOut()
            changeMe()
        }, 100)
        $(".hot .hot-nav ul li").mouseleave(function() {
            clearTimeout(timeout)
        })
    })
});

//厨房电器
$(function() {
    var index = 0;

    $(".kitchen .kitchen-show>ul:first").css("display", "block");
    $(".kitchen .kitchen-nav ul li:first")
        .addClass("active")
        .siblings("li")
        .removeClass("active");

    function changeStyle() {
        $(".kitchen .kitchen-nav ul li")
            .eq(index)
            .addClass("active")
            .siblings("li")
            .removeClass("active");
    }

    $(".kitchen .kitchen-nav ul li").mouseenter(function() {
        index = $(this).index()
        var timeout = setTimeout(function() {
            $(".kitchen .kitchen-show>ul").eq(index).fadeIn().siblings("ul").fadeOut()
            changeStyle()
        }, 100)
        $(".kitchen .kitchen-nav ul li").mouseleave(function() {
            clearTimeout(timeout)
        })
    })
});

//大家电
$(function() {
    var index = 0;

    $(".appliance .appliance-show>ul:first").css("display", "block");
    $(".appliance .appliance-nav ul li:first")
        .addClass("active")
        .siblings("li")
        .removeClass("active");

    function changeStyle() {
        $(".appliance .appliance-nav ul li")
            .eq(index)
            .addClass("active")
            .siblings("li")
            .removeClass("active");
    }
    $(".appliance .appliance-nav ul li").mouseenter(function() {
        index = $(this).index()
        var timeout = setTimeout(function() {
            $(".appliance .appliance-show>ul").eq(index).fadeIn().siblings("ul").fadeOut()
            changeStyle()
        }, 100)
        $(".appliance .appliance-nav ul li").mouseleave(function() {
            clearTimeout(timeout)
        })
    })
});

//个护健康
$(function() {
    var index = 0;

    $(".health .health-show>ul:first").css("display", "block");
    $(".health .health-nav ul li:first")
        .addClass("active")
        .siblings("li")
        .removeClass("active");

    function changeStyle() {
        $(".health .health-nav ul li")
            .eq(index)
            .addClass("active")
            .siblings("li")
            .removeClass("active");
    }
    $(".health .health-nav ul li").mouseenter(function() {
        index = $(this).index()
        var timeout = setTimeout(function() {
            $(".health .health-show>ul").eq(index).fadeIn().siblings("ul").fadeOut()
            changeStyle()
        }, 100)
        $(".health .health-nav ul li").mouseleave(function() {
            clearTimeout(timeout)
        })
    })
});

//五金家装
$(function() {
    var index = 0;

    $(".metals .metals-show>ul:first").css("display", "block");
    $(".metals .metals-nav ul li:first")
        .addClass("active")
        .siblings("li")
        .removeClass("active");

    function changeStyle() {
        $(".metals .metals-nav ul li")
            .eq(index)
            .addClass("active")
            .siblings("li")
            .removeClass("active");
    }
    $(".metals .metals-nav ul li").mouseenter(function() {
        index = $(this).index()
        var timeout = setTimeout(function() {
            $(".metals .metals-show>ul").eq(index).fadeIn().siblings("ul").fadeOut()
            changeStyle()
        }, 100)
        $(".metals .metals-nav ul li").mouseleave(function() {
            clearTimeout(timeout)
        })
    })
});
//生活电器
$(function() {
    var index = 0;

    $(".electric .electric-show>ul:first").css("display", "block");
    $(".electric .electric-nav ul li:first")
        .addClass("active")
        .siblings("li")
        .removeClass("active");

    function changeStyle() {
        $(".electric .electric-nav ul li")
            .eq(index)
            .addClass("active")
            .siblings("li")
            .removeClass("active");
    }
    $(".electric .electric-nav ul li").mouseenter(function() {
        index = $(this).index()
        var timeout = setTimeout(function() {
            $(".electric .electric-show>ul").eq(index).fadeIn().siblings("ul").fadeOut()
            changeStyle()
        }, 100)
        $(".electric .electric-nav ul li").mouseleave(function() {
            clearTimeout(timeout)
        })
    })
});

//随手购
$(function() {
    var index = 0;
    $(".casual .sui-nav ul li:first")
        .addClass("active")
        .siblings("li")
        .removeClass("active");

    function changeSui() {
        $(".casual .sui-nav ul li")
            .eq(index)
            .addClass("active")
            .siblings("li")
            .removeClass("active");
    }
    $(".casual .sui-nav ul li").mouseenter(function() {
        $(".casual .iconfont").css("display", "block");
        index = $(this).index();
        if (index < 3) {
            oLeft = index * -1200 + "px";
            $(".casual .sui-show ul").animate({
                    left: oLeft,
                },
                500
            );
            console.log(index);
            console.log(oLeft);
        }
        changeSui();
    });
    $(".casual .sui-nav ul").mouseleave(function() {
        $(".casual .sui-show .iconfont").css("display", "none");
    });
    $(".casual .sui-show ").mouseenter(function() {
        $(".casual .sui-show .iconfont").css("display", "block");
    });
    $(".casual .sui-show ").mouseleave(function() {
        $(".casual .sui-show .iconfont").css("display", "none");
    });

    //点击按钮
    $(".casual .sui-show .prev").click(function() {
        index--;
        move();
    });
    $(".casual .sui-show .next").click(function() {
        index++;
        move();
    });

    function move() {
        if (index < 0) {
            index = 0;
        } else if (index < 3) {
            oLeft = index * -1200 + "px";
            $(".casual .sui-show ul").animate({
                    left: oLeft,
                },
                500
            );
            console.log(index);
            console.log(oLeft);
        }
        changeSui();
    }
});

//楼层导航
$(function() {
    var index = 0;
    $(window).scroll(function() {
        var oScrollTop = $(window).scrollTop();
        if (oScrollTop > 310) {
            $(".jydqLeft").fadeIn(300);
        } else {
            $(".jydqLeft").fadeOut(300);
        }
        var winH = $(window).height();
        $(".floor").each(function(index) {
            if (winH + oScrollTop - $(this).offset().top > (winH * 5) / 7) {
                // console.log($(this).index());
                $(".jydqLeft>div").removeClass("active");
                $(".jydqLeft>div")
                    .eq($(this).index() - 3)
                    .addClass("active");
            }
        });
    });
    //点击侧边栏
    $(".jydqLeft div:not(.rtTop)").click(function() {
        var oH = $(".floor").eq($(this).index()).offset().top - 20;
        $("body,html").animate({
                scrollTop: oH,
            },
            300
        );
    });
    $(".rtTop").click(function() {
        $("body,html").animate({
                scrollTop: 0,
            },
            300
        );
    });
});

// //底部
// $(function () {
//   // 获得宽度
//   var screenW =
//     document.documentElement.clientWidth || document.body.clientWidth;

//   // 设置宽度
//   $("footer").css("width", screenW + "px");
// });

//右侧边栏
$(function() {
    // 用户栏等左侧动画
    $('.aside-user').hover(function() {
        $('.aside-user-info').show()
    }, function() {
        $('.aside-user-info').hide()
    })

    $('.aside-content li:gt(1),.service').hover(function() {
        $(this).children('div').css('visibility', 'visible')
        $(this).children('div').stop().animate({
            right: '40px',
        }, 400)
    }, function() {
        $(this).children('div').css('visibility', 'hidden')
        $(this).children('div').stop().animate({
            right: '80px'
        }, 200)
    })


    // 回到顶部
    $('.backTop').click(function() {
        $('body,html').animate({
            'scrollTop': 0
        }, 500)
    })

    // 底部邮箱栏
    // 鼠标向上滑动时影藏
    document.onmousewheel = function(e) {
            if (e.wheelDelta) {
                if (e.wheelDelta > 0) {
                    $('.mail-bottom').hide()
                }
            }
        }
        // 窗口大小改变时隐藏
        // $(window).on('resize', function() {
        //     $('.mail-bottom').hide()
        // })

    // 底部TOP按钮
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() >= 100) {
            $('.aside-content-bottom').css('bottom', 0)
        } else {
            $('.aside-content-bottom').css('bottom', '-40px')
        }
    })

    // 我的足迹
    $('.footprint').click(function() {
            if ($('.aside-warp').css('right') == '-280px') {
                $('.aside-right-goods').css('display', 'none')
                $('.aside-right').css('display', 'block')
                $('.aside-warp').stop().animate({
                    right: 0
                })
            } else {
                $('.aside-warp').stop().animate({
                    right: '-280px'
                }, function() {
                    $('.aside-right').css('display', 'none')
                })
            }
        })
        // 购物车
    $('.shopCart').click(function() {
        if ($('.aside-warp').css('right') == '-280px') {
            $('.aside-right').css('display', 'none')
            $('.aside-right-goods').css('display', 'block')
            $('.aside-warp').stop().animate({
                right: 0
            })
        } else {
            $('.aside-warp').stop().animate({
                right: '-280px'
            }, function() {
                $('.aside-right-goods').css('display', 'none')
            })
        }
    })


    // 关闭按钮
    $('.aside-right-title .btn').click(function() {
        $('.aside-warp').animate({
            right: '-280px'
        })
    })

    // 邮箱底部栏触发
    $('.mailbox').on('click', function() {
        $('.mail-bottom').toggle()
    })

    // 模态框触发
    $('.aside-user,.order,.discount,.property,.collect,.service').children('a').click(function() {
        $('.mark,.aside-login-box,.aside-login').show()
    })
    $('.aside-user-info .btns').click(function() {
        $('.mark,.aside-login-box,.aside-login').show()
    })
    $('.aside-login-box .btn').click(function() {
            $('.mark,.aside-login-box,.aside-login').hide()
        })
        //模态框里的验证码
    var index = 0;
    $('.yzm').click(function() {
            index++
            if (index >= 5) {
                index = 0
            }
            $('.yzm').hide()
            $('.yzm').eq(index).show()
        })
        // 模态框里的记住信息
    var color = 'gray'
    $('.lab').hover(function() {
        if (color == 'gray') {
            $('.lab').css('background', 'url(images/checkbox_red.png) no-repeat 0px 3px')
            $('.lab').css('color', 'red')
        }
    }, function() {
        if (color == 'gray') {
            $('.lab').css('background', 'url(images/checkbox_gray.png) no-repeat 0px 3px')
            $('.lab').css('color', '#555')
        }
    })
    $('.lab').click(function() {
        if (color == 'gray') {
            color = 'red'
            $('.lab').css('background', 'url(images/checked_red.png) no-repeat 0px 2px')
            $('.lab').css('color', 'red')
        } else {
            color = 'gray'
            $('.lab').css('background', 'url(images/checkbox_gray.png) no-repeat 0px 3px')
            $('.lab').css('color', '#555')
        }
    })


    // 点击空白处关闭侧边栏
    document.onclick = function(e) {
        var oX = $(window).width() - $('.aside-warp').width()
        if (e.pageX < oX) {
            $('.aside-warp').stop().animate({
                right: '-280px'
            })
        }
    }

})