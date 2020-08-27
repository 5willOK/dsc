$(function() {
    // //滚动navhover
    $('.hide-nav .goods-variety ').hover(function() {
                $('.hide-nav   .goods-variety ').find('.variety').show()
                $(".hide-nav .variety-item").hover(function() {
                    $(this).css('background', 'rgba(0,0,0,.5)').siblings(".hide-nav .variety-item").css('background', 'rgba(51,51,51,.8)')
                        // console.log($('.publicity-img span'));
                    $('.hide-nav #zzzzzz .cate-layer-con').eq($(this).index()).show().siblings('.cate-layer-con').hide()
                }, function() {
                    $('.hide-nav #zzzzzz .cate-layer-con').hover(function() {
                        $(this).show()
                    }, function() {
                        $(this).hide()
                    })
                    $('.hide-nav .variety-item').css('background', 'rgba(51,51,51,.8)')
                    $('.hide-nav #zzzzzz .cate-layer-con').hide()
                })
            },
            function() {
                $(".hide-nav .variety-item").hover(function() {
                    $(this).css('background', 'rgba(0,0,0,.5)').siblings(".hide-nav .variety-item").css('background', 'rgba(51,51,51,.8)')
                        // console.log($('.publicity-img span'));
                    $('.hide-nav #zzzzzz .cate-layer-con').eq($(this).index()).show().siblings('.cate-layer-con').hide()
                }, function() {
                    $('.hide-nav #zzzzzz .cate-layer-con').hover(function() {
                        $(this).show()
                    }, function() {
                        $(this).hide()
                    })
                    $('.hide-nav .variety-item').css('background', 'rgba(51,51,51,.8)')
                    $('.hide-nav #zzzzzz .cate-layer-con').hide()
                })
                $('.hide-nav .goods-variety  .variety').hide()
            })
        // 头部hover部分显示与隐藏
    $(".navitems-wrap .variety-item").hover(function() {
        // console.log($('.publicity-img span'));
        $(this).css('background', 'rgba(0,0,0,.5)').siblings(".navitems-wrap .variety-item").css('background', 'rgba(51,51,51,.8)')
        $('.navitems-wrap .cate-layer-con').eq($(this).index()).show().siblings('.cate-layer-con').hide()
    }, function() {
        $(this).css('background', 'rgba(51,51,51,.8)')
        $('.navitems-wrap .cate-layer-con').hover(function() {
            $(this).show()
        }, function() {
            $(this).hide()
        })
        $('.navitems-wrap .cate-layer-con').hide()
    })


    // 关闭头部广告
    $('.publicity-img span').click(function() {
        $('.top-publicity').hide()

    })



    //banner淡入淡出轮播图
    var bannerindex = 0;
    $('.next').click(function() {
            bannerindex++
            if (bannerindex > $(".banner-img").length - 1) {
                bannerindex = 0
            }
            bannerchangeImg()

        })
        //自定义动画
    function bannerchangeImg() {
        $(".banner-img").eq(bannerindex).fadeIn(600).siblings(".banner-img").fadeOut(200)
        $('.banner-circle li').eq(bannerindex).addClass('circle-active').siblings('.banner-circle li').removeClass('circle-active')
    }
    //自动轮播
    var bannerTimer = setInterval(function() {
            // clearInterval(bannerTimer)


            bannerindex++
            if (bannerindex > $(".banner-img").length - 1) {
                bannerindex = 0
                    // console.log(bannerindex);

            }
            bannerchangeImg()

            // bannerindex++
            // bannerchangeImg()
            // $('.next').click()
        }, 3000)
        //点击小圆点
    $('.banner-circle li').click(function() {
            bannerindex = $(this).index()
            bannerchangeImg()
        })
        // 鼠标移入关闭定时器
    $('.banner-img').hover(function() {
            clearInterval(bannerTimer)
        },
        function() {
            clearInterval(bannerTimer)

            bannerTimer = setInterval(function() {
                // $('.next').click()

                bannerindex++
                if (bannerindex > $(".banner-img").length - 1) {
                    bannerindex = 0
                }
                bannerchangeImg()
            }, 3000)
        })


    // 图片原始的top值
    var oldtop = 0;

    // console.log(oldtop1);
    // 给地图导航添加事件
    $('.dsc-choie').hover(function() {
        $(this).addClass('choie-active')
        $('.head-map').show()
        mapanimate()
    }, function() {
        $(this).removeClass('choie-active')
        $('.head-map').hide()
        $('.map-con-scrool').css('top', '64px')
        $('.map-con-warp1').css('top', '0px')
        $('.head-map').off('mousemove')
    })

    // 地图导航动画
    function mapanimate() {
        oldtop = $('.map-con-scrool').position().top;
        // var oldtop = oldtop1;
        // console.log(oldtop);
        $('.map-nav a').hover(function() {
            // 每个元素距离顶部的距离
            var scrolltopitem = $('.map-con-warp .map-con-itemr').eq($(this).index()).position().top;
            $('.map-con-warp1').css('top', -scrolltopitem + 'px')
                //图片移动的距离
            var scrolltopimg = $('.map-con-warp').height() / $('.map-con-warp1').height() * scrolltopitem
            var newscrolltopimg = oldtop + scrolltopimg + 'px';
            // console.log($('.map-con-warp').height() / $('.map-con-warp1').height());
            $('.map-con-scrool').css('top', newscrolltopimg)
        })

    }

    // 拖动图片
    $('.map-con-scrool').mousedown(function() {
        $('.head-map').mousemove(function(e) {
            var oClientY = e.pageY - $(this).offset().top
            if (oClientY >= 61 && oClientY < 55 + $('.map-con-warp').height()) {
                $('.map-con-scrool').css('top', oClientY + 'px')
                var oboxtop = ($('.map-con-scrool').position().top - 64) * ($('.map-con-warp1').height() / $('.map-con-warp').height());
                $('.map-con-warp1').css('top', -oboxtop + 'px')
            }
        })
        $('.head-map').mouseup(function(e) {
            $('.head-map').off('mousemove')
        })

    })




    //秒杀轮播定时器
    var seckilltimer

    // 秒杀轮播图
    //移入ul显示按钮
    $('.seckill-item').hover(function(e) {
        $('.seckill-item-wrap>div').show()
        clearInterval(seckilltimer)
    }, function() {
        $('.seckill-item-wrap>div').hide()
        seckilltimer = setInterval(function() {
            if (off) {
                off = false
                $('.seckill-item ').animate({
                    left: oLeft
                }, 500, function() {
                    $('.seckill-item ').find('li').slice(0, num).appendTo($('.seckill-item'))
                    $('.seckill-item ').css('left', 0)
                    off = true
                })
            }
            // $('.seckill-previous').click()
        }, 2000)

    })

    //移入自身自身显示
    $('.seckill-item-wrap>div').hover(function() {
        $('.seckill-item-wrap>div').show()
    }, function() {
        $('.seckill-item-wrap>div').hide()
    })

    //给按钮绑定点击事件
    var off = true;
    var num = 1
    var oLeft = -num * $('.seckill-item li:first').outerWidth(true) + 'px';
    //下一个
    $('.seckill-previous').on('click', function() {
        if (off) {
            off = false
            $('.seckill-item ').animate({
                left: oLeft
            }, 500, function() {
                $('.seckill-item ').find('li').slice(0, num).appendTo($('.seckill-item'))
                $('.seckill-item ').css('left', 0)
                off = true
            })
        }
    })

    //上一个
    $('.seckill-next').on('click', function() {
            if (off) {
                off = false
                var olastli = $('.seckill-item').find('li').slice($('.seckill-item li').length - num)
                olastli.prependTo($('.seckill-item'))
                $('.seckill-item').css('left', oLeft)
                $('.seckill-item').animate({
                    left: 0,
                }, 500, function() {
                    off = true
                })
            }
        })
        //自动轮播
    seckilltimer = setInterval(function() {
        if (off) {
            off = false
            $('.seckill-item ').animate({
                left: oLeft
            }, 500, function() {
                $('.seckill-item ').find('li').slice(0, num).appendTo($('.seckill-item'))
                $('.seckill-item ').css('left', 0)
                off = true
            })
        }
        // $('.seckill-previous').click()
    }, 3000)

    //鼠标移入定时器结束






    // 侧边跳楼
    //绑定滚动事件
    $(window).scroll(function() {
            //显示滚动导航栏
            var oSrcolltop = $(window).scrollTop()
            if (oSrcolltop > $('.header').offset().top + $('.header').height()) {
                $('.hide-nav').show()
            } else {
                $('.hide-nav').hide()
            }
            // 显示侧边栏
            if (oSrcolltop > $('.view').offset().top + $('.view').height()) {
                $('.yl-nav').show()
            } else {
                $('.yl-nav').hide()
            }
            //滚动跟随
            $('.main>div').each(function(index) {
                if (oSrcolltop > $(this).offset().top - 200) {
                    $('.yl-nav>div').eq(index).addClass('yl-active').siblings('div').removeClass('yl-active')
                    $('.lift-item i').hide()
                    $('.lift-item i').eq(index).show()
                }
            })


        })
        //点击
        // console.log($('.lift-item i'));
    $('.lift-item ').click(function() {
            console.log($(this).index());
            var oH = $('.main>div').eq($(this).index()).offset().top - 100
            $('body,html').animate({
                    'scrollTop': oH
                }, 500)
                // console.log(111);

        })
        // 返回顶部
    $('.lift-top').click(function() {
        $('body,html').animate({
            'scrollTop': 0
        }, 500)
    })





    //定位侧导航
    // 绑定窗口改变事件
    $(window).resize(function() {
        // $(window).width()获取屏幕的宽度
        if ($(window).width() < 1400) {
            console.log($(window).width());

            $('.yl-nav').css({
                'left': '10px',
                'margin-left': 0

            })
        } else {
            $('.yl-nav').css({
                'left': '50%',
                'margin-left': '-750px'

            })
        }

    })

    // 公告teb切换
    $('.vip-item-t span').hover(function() {
        $(this).addClass('fred').siblings('span').removeClass('fred')
        $('.vip-item-con').eq($(this).index()).addClass('vipblock').siblings('.vip-item-con').removeClass('vipblock')
    })

    // 文字不能选中
    // $(document.body).on('mousedown', function(e) {
    //     e.preventDefault()
    // })

    //添加a连接放大镜
    $('.seckill-item .item-img a').on('click', function() {
        $(this).prop('href', 'detail.html');
    })

    //底部商品添加a连接
    $('.plenty ul li a').on('click', function() {
        $(this).prop('href', 'good.html');
        $(this).prop('target', '_blank');
    })
})