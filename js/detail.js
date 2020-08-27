$(function() {
    // 鼠标移入切换图片
    $('.sm-img-item img').hover(function() {
        $('.sm-img-item img').removeClass('active')
        $(this).addClass('active')
        $('.md-img').removeClass('active')
        $('.md-img').eq($(this).parents('.sm-img-item').index() - 2).addClass('active')
        $('.lg-img').removeClass('active')
        $('.lg-img').eq($(this).parents('.sm-img-item').index() - 2).addClass('active')
    })

    // 蒙版的大小 = 蒙版下边的图片的宽度 * 放大镜的宽度 / 放大的图片的宽度
    var mWidth = $('.md-img').width() * $('.big-glass').width() / $('.lg-img').width()
    var mHeight = $('.md-img').height() * $('.big-glass').height() / $('.lg-img').height()
    $('.mask').css({
        width: mWidth,
        height: mHeight
    })

    // 蒙版和放大镜的显示合影隐藏
    $('.magnifying-glass-top').on('mouseover', function(e) {
        maskMove(e)
        $('.mask').show()
        $('.big-glass').show()
    })
    $('.magnifying-glass-top').on('mouseout', function() {
        $('.mask').hide()
        $('.big-glass').hide()
    })

    $('.magnifying-glass-top').on('mousemove', function(e) {
        maskMove(e)
    })

    // 放大的图片的移动


    // 蒙版移动
    function maskMove(e) {
        var mLeft = e.pageX - $('.magnifying-glass-top').offset().left - $('.mask').width() / 2
        var mTop = e.pageY - $('.magnifying-glass-top').offset().top - $('.mask').height() / 2
        if (mLeft <= 0) {
            mLeft = 0
        } else if (mLeft >= $('.magnifying-glass-top').width() - $('.mask').width()) {
            mLeft = $('.magnifying-glass-top').width() - $('.mask').width()
        }
        if (mTop <= 0) {
            mTop = 0
        } else if (mTop >= $('.magnifying-glass-top').height() - $('.mask').height()) {
            mTop = $('.magnifying-glass-top').height() - $('.mask').height()
        }

        $('.mask').css({
            left: mLeft,
            top: mTop
        })


        var bLeft = -mLeft * ($('.lg-img').width() - $('.big-glass').width()) / ($('.magnifying-glass-top').width() - $('.mask').width())
        var bTop = -mTop * ($('.lg-img').height() - $('.big-glass').height()) / ($('.magnifying-glass-top').height() - $('.mask').height())
        $('.lg-img').css({
            left: bLeft,
            top: bTop

        })

    }

    // 看了又看部分
    // 轮播图
    var liHeight = $('.track-con-ul').children('li').height();
    var lg = true;
    $('.track-bt-down').on('click', function() {
        if (lg) {
            lg = false;
            $('.track-con-ul').animate({
                'top': -liHeight
            }, 500, function() {
                $(this).find('li').eq(0).appendTo($(this))
                $(this).css('top', 0)
                lg = true;
            })
        }

    })

    $('.track-bt-up').on('click', function() {
        if (lg) {
            lg = false;
            $('.track-con-ul').css('top', -liHeight);
            $('.track-con-ul li:last').prependTo($('.track-con-ul'));
            $('.track-con-ul').animate({
                'top': 0
            }, 500, function() {
                lg = true;
            })
        }
    })

    var timer = setInterval(function() {
        $('.track-bt-down').click()
    }, 2500)

    $('.track-more').hover(function() {
        clearInterval(timer)
    }, function() {
        timer = setInterval(function() {
            $('.track-bt-down').click()
        }, 2500)
    })


    // 配送部分
    $('.txt,.area-warp').hover(function() {
        $('.area-warp').css('display', 'block');
        $('.txt').addClass('tex-before');
        $('.txt-icon').html('&#xe60b;');
    }, function() {
        $('.txt').removeClass('tex-before');
        $('.area-warp').css('display', 'none');
        $('.txt-icon').html('&#xe600;');
    })

    // 对比 收藏
    $('.contrast-label').hover(function() {
        $(this).addClass('contrast-label2')
    }, function() {
        $(this).removeClass('contrast-label2')
    })

    $('.a-contrast').click(function() {
        var inputChecked = $(this).find('input[type=checkbox]')
        if (inputChecked.is(":checked")) {
            inputChecked.next('label').addClass('contrast-label1');
            $('.duibi-box').css('display', 'block');
        } else {
            inputChecked.next('label').removeClass('contrast-label1');
            $('.duibi-box').css('display', 'none');
        }
    });

    // 对比栏
    $('.hide-me').click(function() {
        $('.duibi-box').css('display', 'none')
    })

    // tab切换
    $('.area-warp .tab').find('li').on('click', function() {
        $(this).addClass('tab-curr').siblings(this).removeClass('tab-curr');
        $('.area-warp').find('.tab-content').eq($(this).index()).css('display', 'block').siblings('.tab-content').css('display', 'none')
    })

    $('.gm-tab').find('li').on('click', function() {
        $(this).addClass('tab-surr').siblings(this).removeClass('tab-surr')
        $('.gm-floors').find('.gm-f-item').eq($(this).index()).css('display', 'block').siblings('.gm-f-item').css('display', 'none')
    })

    //手机购买
    $('.qrcode,.qrcode-pop').hover(function() {
        $('.qrcode-pop').css('display', 'block');
    }, function() {
        $('.qrcode-pop').css('display', 'none');
    });

    $('.qrcode_tit,.qrcode_pop').hover(function() {
        $('.qrcode_pop').css('display', 'block');
    }, function() {
        $('.qrcode_pop').css('display', 'none');
    })

    // 加入购物车
    $('.regBtn').on('click', function() {
        $('.tb-popsku').css('display', 'block')
    });
    $('.btn-cancel').on('click', function() {
        $('.tb-popsku').css('display', 'none')
    })

    // 数量库存
    var val = 1;
    $('.btn-add').on('click', function() {
        val++;
        $('.buy-number').val(val)
        $('.btn-reduce').find('i').css('color', '#555');
    })

    $('.btn-reduce').on('click', function() {
        if ($('.buy-number').val() == 1) {
            $('.buy-number').val(1);
            $(this).find('i').css('color', '#ccc');
        } else {
            val--;
            $('.buy-number').val(val);
            $(this).hover(function() {
                $(this).find('i').css('color', 'red');
            }, function() {
                $(this).find('i').css('color', '#555');
            })
        }
    })





})