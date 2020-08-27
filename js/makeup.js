$(function() {
    // 主体js部分
    $('.getGuessGoods').find('a').click(function() {
        $(this).prop('href', 'detail.html')
        $(this).prop('target', '_blank')
    })

    // 多选部分
    var flag = true;
    var num = 1;
    $('.choose_open').on('click', function() { //上下箭头
        if (num == 1 || num == 2) {
            if (flag) {
                $('.selector').append($('<div class="box"></div>'));
                $('.box').animate({
                    'height': '100px'
                })
                $('#choose-icon1').html('&#xe60b;')
                flag = false;
                num = 1;
            } else {
                $('.box').remove();
                $('#choose-icon1').html('&#xe600;')
                flag = true;
                num = 2;
            }
        } else {
            alert('收起全部多选')
        }
    });
    num = 2;
    $('.icon-down1,.no_bt').bind('click', function() { // 加减号  关闭按钮
            if (num == 2 || num == 3) {
                if (flag) {
                    $('.wrap_brand').hide();
                    $('.all-a-z,.zimu_list,.enter_yes_no').slideDown(100);
                    $('#choose-icon2').html('&#xe602;')
                    $('.down-text').html('收起');
                    flag = false;
                    num = 3;
                } else {
                    $('.wrap_brand').show();
                    $('.all-a-z,.zimu_list,.enter_yes_no').slideUp(100);
                    $('#choose-icon2').html('&#xe66e;')
                    $('.down-text').html('多选');
                    flag = true;
                    num = 2;
                }
            } else {
                alert('请收起全部单选')
            }
        })
        // 所有品牌
    $('.all-a-z').find('li').not('.all-brand,.other-brand').each(function() {
        $(this).hover(function() {
            var key = $(this).data('key');
            $('.zimu_list').find('li').each(function() {
                var brand = $(this).data('brand');
                if (key == brand) {
                    $(this).css('display', 'block');
                } else if (key != brand) {
                    $(this).css('display', 'none')
                }
            })
        })
    });
    $('.all-brand').hover(function() {
            $('.zimu_list').find('li').each(function() {
                $('.zimu_list').css('display', 'block')
                $(this).css('display', 'block')
            })
        })
        // 多选复选框
    var sum = 0;
    var allCheckbox = $('.zimu_list').find('input[type="checkbox"]');
    allCheckbox.click(function() {
            if ($(this).is(":checked")) {
                $(this).next('label').addClass('choose-ico-checked')
                sum++
            } else {
                $(this).next('label').removeClass('choose-ico-checked')
                sum--
            }
            // 确认按钮
            if (sum == 0) {
                $('.yes_bt').css('display', 'none')
            } else {
                $('.yes_bt').css('display', 'block')
            }
        })
        // 推广商品
    var le = true;
    $('.goods-spread .gstop').on('click', function() {
            if (le) {
                $('.goods-spread').animate({
                    'margin-right': '-218px'
                }, 800)
                $('.gs-warp').animate({
                    'margin-left': '20px'
                }, 900)
                $('.goods-list').animate({
                    'width': '1405px'
                }, 1000)
                $(this).children('i').html('&#xe60e;')
                le = false;
            } else {
                $('.goods-list').animate({
                    'width': '1180px'
                }, 200)
                $('.goods-spread').animate({
                    'margin-right': '0'
                }, 400)
                $('.gs-warp').animate({
                    'margin-left': '0'
                }, 400)
                $(this).children('i').html('&#xe616;')
                le = true;
            }
        })
        // 筛选价格
    $('.fP-box').children('input').focus(function() {
        $('.fP-expand').css('display', ' block');
    });
    $('.fP-box').children('input').blur(function() {
            if ($(this).val() != '') {
                $('.fP-expand').children('.ui-btn-clear').on('click', function() {
                    $('.fP-box').children('input').each(function() {
                        $(this).val('')
                    })
                    $('.fP-expand').css('display', ' none');
                })
            } else {
                $('.fP-expand').css('display', ' none');
            }
        })
        // 默认
    $('.filter-sort a').each(function() {
        $(this).on('click', function() {
            if ($(this).find('i:first').hasClass('a')) {
                $(this).find('i:first').css('display', 'none').removeClass('a')
                $(this).find('i:last').css('display', 'block')
            } else {
                $(this).find('i:first').css('display', 'block').addClass('a')
                $(this).find('i:last').css('display', 'none')
            }
        })
    })

    // 销量
    // var listAll = [];
    // var quantity = [];
    // var lists = document.querySelectorAll('.goods-list>.items .gl-item')
    // for (var i = 0; i < lists.length; i++) {
    // listAll.push(lists[i]);
    // }
    // $('.goods-list>ul').find('em').each(function() {
    // quantity.push(Number($(this).html()))
    // })
    // function Arr(quantity, listAll) {
    // for (var i = 0; i < quantity.length; i++) {
    // for (var j = i + 1; j < quantity.length; j++) {
    // if (quantity[i] < quantity[j]) {
    // [quantity[i], quantity[j]] = [quantity[j], quantity[i]]
    // [listAll[i], listAll[j]] = [listAll[j], listAll[i]]
    // }
    // }
    // }
    // return quantity;
    // }
    // console.log(Arr(quantity, listAll))
    // var items = document.querySelector('.items')
    // $('.quantity').on('click', function() {
    // Arr(quantity, listAll)
    // for (var i = 0; i < quantity.length; i++) {
    // console.log(quantity[i])
    // $(quantity)
    // console.log($(quantity))
    // quantity[0].prependTo(items)
    // items.insertBefore(quantity[0])
    // items.appendChild(quantity[0])
    // }
    // })
    // 价格
    // $('.p-lie>.p-price').each(function() {
    // $(this).get().html()
    // })
    // console.log($(this).get())
})