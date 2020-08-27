$(function(){
    
   $('.login-contain .item input').focus(function(){
    $(this).parent().addClass('item-focus')
   })
   $('.login-contain .item input').blur(function(){
    $(this).parent().removeClass('item-focus')
   })
   

//    var indexInt = 0;
   $('.btn').click(function(){
       var lengthInt = $('.login-contain .item input').length
    //    console.log(lengthInt)
      
       for(var i=0;i<lengthInt;i++){
        //    console.log($('.login-contain .item input').eq(i).val())
           if($('.login-contain .item input').eq(i).val() == ''){
            //   indexInt = i;
            //   console.log(indexInt)
              $('.login-contain .item input').eq(i).focus()
              $('.login-contain .item input').eq(i).parent().css("border-color","#f42424")

              switch(i){
                case 0:
                    $('.arter').html('<i class="iconfont">&#xe749;</i>请输入用户名');break;
                case 1:
                     $('.arter').html('<i class="iconfont">&#xe749;</i>请输入密码');break;
                 case 2:
                  $('.arter').html('<i class="iconfont">&#xe749;</i>请输入验证码');break;

            
           }
           return
        
       }


     
       
       }



   })

})