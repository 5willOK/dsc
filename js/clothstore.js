$(function() {

    //位置导航下拉菜单
    $('.quck-menu li.li_dropdown').hover(function() {
        $('.quck-menu li.li_dropdown .dt').css({
            'border': '1px solid #d2d2d2',
            'border-bottom': '1px solid #fff',
            'background': '#fff'
        })
        $('.quck-menu li.li_dropdown .dd').css({
            'display': 'block'
        })
    }, function() {
        $('.quck-menu li.li_dropdown .dt').css({
            'border': 'none',
            'background': '#eee'
        })
        $('.quck-menu li.li_dropdown .dd').css({
            'display': 'none'
        })
    })

    //购物车下拉
    $('.shoppingcar').stop().hover(function() {
        $('.shoppingcar .drapdown').css('display', 'block')
        $('.shoppingcar .car').css('border-bottom', 'none')
    }, function() {
        $('.shoppingcar .drapdown').css('display', 'none')
        $('.shoppingcar .car').css('border-bottom', '1px solid #d2d2d2 ')
    })

    //竖二级导航
    $('.index-tab-con-item>li').mouseenter(function() {
        $(this).css({
            background: '#E02B61'
        })
        $('.index-tab-con-item .item-nav').eq($(this).index()).css({
            display: 'block'
        })
    })


    $('.index-tab-con-item>li').mouseleave(function() {
            $(this).css({
                background: '#FD5F8E'
            })
            $('.index-tab-con-item .item-nav').css({
                display: 'none'
            })
        })
        //轮播图
    var index = 0;

    function changeImg() {
        $('.banner-img li').eq(index).fadeIn(400).siblings('li').fadeOut(400);
        $('.cloth-hd li').eq(index).addClass('active').siblings('li').removeClass('active');
    }
    $('.anniu').click(function() {
        index++;
        if (index > $('.banner-img li').length - 1) {
            index = 0;
        }
        changeImg();
    })
    $('.anniu1').click(function() {
        index--;
        if (index < 0) {
            index = $('.banner-img li').length - 1;
        }
        changeImg();
    })
    var changeImgTimer = setInterval(function() {
        $('.anniu').click();
    }, 3000)
    $('.cloth-hd li').mouseenter(function() {
        clearInterval(changeImgTimer);
        $('.banner-img li').eq($(this).index()).fadeIn(400).siblings('li').fadeOut(400);
        $(this).addClass('active').siblings('li').removeClass('active');
    })
    $('.cloth-hd li').mouseleave(function() {
        changeImgTimer = setInterval(function() {
            index = $('.cloth-hd li.active').index()
            $('.anniu').click();
        }, 3000)
    })


    //tab切换
    $('.catetop-floor').mouseenter(function() {
            // 存住当前最外层的指向
            var that = $(this)
            that.find('.f-hd .fgoods-hd ul li').mouseover(function() {
                // 找到tab切换的li并将索引存住
                var index = $(this).index();
                $(this).addClass('on').siblings().removeClass('on');
                that.find('.rightbottom .fgood-slists').eq(index).fadeIn(400).siblings('ul').fadeOut(400);

            })
        })
        // 刷新界面就将所有的tab界面显示为第一份ul
    setTimeout(function() {
        $('.catetop-floor').each(function() {
            $(this).find('.rightbottom .fgood-slists').eq(0).css('display', 'block').siblings().css('display', 'none');
        })
        $('.catetop-floor').mouseover()
    }, 1)

    //随手购按钮
    $('.awg-bd').hover(function() {
            $('.bd-prev').css('display', 'block');
            $('.bd-next').css('display', 'block');
        }, function() {
            $('.bd-prev').css('display', 'none');
            $('.bd-next').css('display', 'none');
        })
        //随手购轮播
    var flag = 1;

    $('.bd-next').click(function() {
        flag++;
        $('.awg-bd .atwillgo-slide .hd ul li').eq(flag).addClass('active').siblings('li').removeClass('active');

        if (flag > 2) {
            flag = 2
        }
        moveDistance()
    })

    $('.bd-prev').click(function() {
        flag--;
        if (flag < 0) {
            flag = 0
        }
        $('.awg-bd .atwillgo-slide .hd ul li').eq(flag).addClass('active').siblings('li').removeClass('active');

        moveDistance()
    })

    // 随手购手风琴
    var f = false
    $('.awg-bd .atwillgo-slide .hd ul li').mouseover(function() {
        flag = $(this).index();
        if (!f) {
            $(this).addClass('active').siblings('li').removeClass('active');
            moveDistance()
            f = true
        }

    })

    function moveDistance() {
        var distance = flag * -1200 + 'px';
        $('.awg-bd .atwillgo-slide .bd .warp ul').animate({
            left: distance
        }, function() {
            f = false
        })
    }

    // 楼层导航
    if ($('head title').text() == '男装、女装、内衣_大商创商城系统 B2B2C 多商户系统 多店铺商城系统 企业级电商系统') {
        var winHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        function floorPosition(index) {
            if (winHeight + scrollTop - $('.catetop-floor').eq(index).offset().top > winHeight * (4 / 5)) {
                $('.leftwarp ul li').eq(index).addClass('active').siblings('li').removeClass('active');
            }
        }
        $(window).scroll(function() {
                var i = 0
                scrollTop = $(window).scrollTop()
                if (winHeight + scrollTop - $('.catetop-floor').eq(0).offset().top > winHeight * (4 / 5)) {
                    $('.catetop-left').css('display', 'block');
                } else {
                    $('.catetop-left').css('display', 'none');
                }
                $('.catetop-floor').each(function() {
                        floorPosition(i);
                        i++
                    })
                    //

            })
            //楼层跳转
            //出现问题：当不选择用not不包含选择器时下面再绑定事件后会先执行上面的事件
        $('.leftwarp ul li:not(.gotop)').click(function() {

            var oTop = $('.catetop-floor').eq($(this).index()).offset().top - 100 + 'px'
            $('body,html').animate({
                'scrollTop': oTop
            }, 500)
            var i = 0;
        })

        $('.leftwarp ul li.gotop').click(function() {
            $('body,html').animate({
                'scrollTop': 0
            }, 500)
        })
    }
})