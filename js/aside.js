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
                //  images/checkbox_gray.png
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