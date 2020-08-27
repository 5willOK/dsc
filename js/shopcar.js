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
    var allCheckBox = $('input[type="checkbox"]');
    //记忆：[]匹配具有此属性的所有元素
    var allCheck = $('.allCheck'); //选中所有全选框
    var storCheck = $('.storCheck'); //选择所有的店铺全选
    var sonCheck = $('.soncheck'); //选择所有的商品复选框
    var listItem = $('.item-list'); //所有商品列表盒子
    //点击每一个按钮变成选中状态
    allCheckBox.click(function() {
            // 记忆：is方法判断是否具有此属性值
            if ($(this).is(':checked')) {
                $(this).next('label').addClass('active')
                $(this).prop('checked', true)
            } else {
                $(this).next('label').removeClass('active')
                $(this).prop('checked', false)
            }
            allPrice()
        })
        // 点击店铺全选时选择店铺内内所有商品
        //不容易找对元素
    storCheck.click(function() {
            if ($(this).is(':checked')) {
                $(this).parents('.car-tbody').find('.soncheck').next('label').addClass('active');
                $(this).parents('.car-tbody').find('.soncheck').prop('checked', true);
                var num = 0
                var len = $(this).parents('.warp').find('.storCheck').next('label').length;
                $(this).parents('.warp').find('.storCheck').each(function() {

                    if ($(this).is(':checked')) {
                        num++
                    }
                    if (num == len) {
                        $(this).parents('.warp').find('.allCheck').next('label').addClass('active');
                        $(this).parents('.warp').find('.allCheck').prop('checked', true)
                    }

                })


            } else {
                $(this).parents('.car-tbody').find('.soncheck').next('label').removeClass('active');
                $(this).parents('.car-tbody').find('.soncheck').prop('checked', false);
                $(this).parents('.warp').find('.allCheck').next('label').removeClass('active');
                $(this).parents('.warp').find('.allCheck').prop('checked', false)
            }
            allPrice()
        })
        //点击全选按钮选中所有的框
    allCheck.click(function() {
            if ($(this).is(':checked')) {
                allCheckBox.next('label').addClass('active');
                allCheckBox.prop('checked', true)
            } else {
                allCheckBox.next('label').removeClass('active');
                allCheckBox.prop('checked', false)
            }

            allPrice()

        })
        // 刷新页面即全选
    setTimeout(function() {
            allCheck.attr('checked', true);
            allCheck.click()
        }, 0)
        //选中店铺内所有商品后将店铺也选中
    sonCheck.click(function() {
        // var self = $(this).parents('.car-tbody').find('.soncheck');
        // var self1 = $(this).parents('.car-tbody').find('.storCheck');
        // var self2 = $(this).parents('.warp').find('.allCheck');

        var num = 0;
        var len = $(this).parents('.car-tbody').find('.soncheck').length;
        $(this).parents('.car-tbody').find('.soncheck').each(function() {
                if ($(this).is(':checked')) {
                    num++;
                }
                if (num == len) {
                    $(this).parents('.car-tbody').find('.storCheck').next('label').addClass('active');
                    $(this).parents('.car-tbody').find('.storCheck').prop('checked', true)
                } else {
                    $(this).parents('.car-tbody').find('.storCheck').next('label').removeClass('active');
                    $(this).parents('.car-tbody').find('.storCheck').prop('checked', false)
                }

            })
            // 选中所有店铺内所有商品后将店铺也选中，全选也选中
        var len2 = $(this).parents('.warp').find('.soncheck').length;
        var num1 = 0
        $(this).parents('.warp').find('.soncheck').each(function() {
                if ($(this).is(':checked')) {
                    num1++;
                }
                if (num1 == len2) {
                    $(this).parents('.warp').find('.allCheck').next('label').addClass('active');
                    $(this).parents('.warp').find('.allCheck').prop('checked', true)
                } else {
                    $(this).parents('.warp').find('.allCheck').next('label').removeClass('active');
                    $(this).parents('.warp').find('.allCheck').prop('checked', false)
                }
            })
            /***************************** */
            // n只能累加到2？？？？？
            // function select(sl, n, l) {
            //     self.each(function() {
            //         if ($(this).is(':checked')) {
            //             n++;
            //         }
            //         if (n == l) {
            //             sl.next('label').addClass('active');
            //             console.log(l);
            //             console.log(n);
            //         }
            //     })
            // }
            // select(self1, num, len)
            // select(self2, num1, len2)

        allPrice()
    })


    var add = $('.add');
    var reduce = $('.reduce');
    //点击加号
    add.click(function() {
            var amount = parseFloat($(this).parents('.amount').find('input').val());
            amount += 1;
            $(this).parents('.amount').find('input').val(amount);
            //计算小计
            var onePrice = parseFloat($(this).parents('.item-list').find('.s-price span').html());
            var price = amount * onePrice;
            $(this).parents('.item-list').find('.s-sum span').html(price);

            allPrice()
        })
        //点击减号
    reduce.click(function() {
            var amount = parseFloat($(this).parents('.amount').find('input').val());
            amount -= 1;
            if (amount < 1) {
                amount = 1;
            }
            $(this).parents('.amount').find('input').val(amount);
            //计算小计
            var onePrice = parseFloat($(this).parents('.item-list').find('.s-price span').html());
            var price = amount * onePrice;
            $(this).parents('.item-list').find('.s-sum span').html(price);

            allPrice()
        })
        //直接输入数值进行计算
    var inputPrice = $('.item-list .amount input');
    inputPrice.keyup(function() {
        var amount = parseFloat($(this).val().replace(/\D|^0/g, ""));
        if (!amount) {
            amount = 1;
        }
        $(this).val(amount)
        var onePrice = parseFloat($(this).parents('.item-list').find('.s-price span').html());
        var price = amount * onePrice;
        $(this).parents('.item-list').find('.s-sum span').html(price);

        allPrice()
    })

    //选中计算总价
    function allPrice() {
        var goallPrice = 0;
        var sum = 0;
        sonCheck.each(function() {
            if ($(this).is(':checked')) {
                var amount = parseFloat($(this).parents('.item-list').find('.amount input').val());
                var price = parseFloat($(this).parents('.item-list').find('.s-sum span').html());
                goallPrice += price;
                sum += amount;
                console.log(goallPrice);
            }
        })
        $('.sps').html(goallPrice)
        $('.amount-sum em').html(sum);
    }

    //删除
    var that = null;
    $('.s-action a:first-child').click(function() {
        that = $(this);
        $('.modal-bg').fadeIn(400);
        $('.modal-box').fadeIn(400);
    })
    $('.first button:first-of-type').click(function() {
        $('.modal-box1').fadeIn(400);
        $('.modal-box').fadeOut(400);
    })
    $('.second button:last-of-type').click(function() {
        $('.modal-box1').fadeOut(400);
        $('.modal-bg').fadeOut(400);
    })
    $('.second button:first-of-type').click(function() {
        $('.modal-box1').fadeOut(400);
        $('.modal-bg').fadeOut(400);
        //模态框消失放下面为什么不行？？？？？？？
        //在删除动作之后无法找到父级元素！！！！！！！！！！！！！！！
        var shop = that.parents('.car-tbody');
        that.parents('.item-list').remove();
        sonCheck = $('.soncheck');
        allPrice()
            // 无法使用
            // shop.find('.item-list').html().trim() == null || 
        if (shop.find('.item-list').length == 0) {
            shop.remove();
            sonCheck = $('.soncheck');
            allPrice()
        }
    })

})