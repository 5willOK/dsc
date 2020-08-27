$(function() {
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
})