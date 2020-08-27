$(function() {
    $('.score').hover(function() {
        $('.score-con').toggle()
    })
    $('.phone-shop').hover(function() {
        $('.ewm').toggle()
    })
    $('.select').hover(function() {
        $('.select-ul').toggle()
    })

    // 轮播
    function sidePlay(btn, target) {
        $(btn).click(function() {
            $(this).siblings('.btn').removeClass('active')
            $(this).addClass('active')
            $(target).eq($(this).index()).fadeIn(400).siblings('li').fadeOut(200)
        })
    }
    sidePlay('.side-big .btn', '.side-big ul li')
    sidePlay('.side-sm .btn', '.side-sm ul li')

    // 自动轮播
    var index = 0
    var timer = null

    function autoPlay(btn, target) {
        (function(index, timer) {
            timer = setInterval(function() {
                $(btn).removeClass('active')
                $(btn).eq(index).addClass('active')
                $(target).eq(index).fadeIn(400).siblings(target).fadeOut(200)
                    ++index
                if (index >= $(target).length) {
                    index = 0
                }
            }, 5000)
            $(target).hover(function() {
                clearInterval(timer)
            }, function() {
                timer = setInterval(function() {
                    $(btn).removeClass('active')
                    $(btn).eq(index).addClass('active')
                    $(target).eq(index).fadeIn(400).siblings(target).fadeOut(200)
                        ++index
                    if (index >= $(target).length) {
                        index = 0
                    }
                }, 5000)
            })
        })(index, timer)
    }
    autoPlay('.side-big .btn', '.side-big ul li')
    autoPlay('.side-sm .btn', '.side-sm ul li')
})