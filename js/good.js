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

    // 收藏里的对比按钮
    var color = 'gray'
    $('.contrast').hover(function() {
        if (color == 'gray') {
            $('.contrast i').removeClass()
            $('.contrast i').addClass('check2')
            $('.contrast').css('color', 'red')
        }
    }, function() {
        if (color == 'gray') {
            $('.contrast i').removeClass()
            $('.contrast i').addClass('check1')
            $('.contrast').css('color', '#555')
        }
    })
    $('.contrast').click(function() {
        if (color == 'gray') {
            color = 'red'
            $('.contrast i').removeClass()
            $('.contrast i').addClass('check3')
            $('.contrast').css('color', 'red')
        } else {
            color = 'gray'
            $('.contrast i').removeClass()
            $('.contrast i').addClass('check1')
            $('.contrast').css('color', '#555')
        }
    })


})