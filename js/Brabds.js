$(function(){

   $(".brand-cart li").mouseover(function(){

    
       $(this).find(".mask").stop().slideDown(200, "linear")
       $(this).find(".describe").css("height","190px")
       $(this).find(".b-logo img").hide()
       $(this).find(".b-logo a").show()
   })

   $(".brand-cart li").mouseout(function(){

    
    $(this).find(".mask").stop().slideUp(200, "linear")
    $(this).find(".describe").css("height","0px")
    $(this).find(".b-logo img").show()
    $(this).find(".b-logo a").hide()
})



$(".brand-cart li").eq(19).nextAll().hide()





var count = 2;
$(document).scroll(function() {
    var scroH = $(document).scrollTop();  //滚动高度
    var viewH = $(window).height();  //可见高度
    var contentH = $(document).height();  //内容高度
 
    // if(scroH >100){  //距离顶部大于100px时
 
    // }
    // if (contentH - (scroH + viewH) <= 100){  //距离底部高度小于100px
          
    // } 

    // console.log(scroH)
   
    var scroHviewH =parseInt(contentH - viewH)
    // console.log(scroHviewH)
    // contentH == scroHviewH
    if(count < 6){
    if (contentH - (scroH + viewH) <= 15){  //滚动条滑到底部啦
        console.log(scroH + viewH)
        console.log(contentH)
       
           
            $(".brand-cart li").eq(20*count).prevAll().show()
            count++
           
          

        //    $(document).scrollTop(scroHviewH-20)

       }
           
    
        // $(".brand-cart li").eq(40).prevAll().show()
        // $(".brand-cart li").eq(39).nextAll().hide()

    }else{
        $(".brand-cart li").show()
    } 
 
});


});


$(function() {
    /* 网站导航 */
    


     $('.header-max-nav ul li').eq(8).addClass("active").siblings('.header-max-nav ul li').removeClass("active")







})