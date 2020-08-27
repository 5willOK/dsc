$(function () {
  // 点击同意条款
  $(".reader").click(function () {
    // console.log($('#checkbox').is(":checked"))
    if ($("#checkbox").is(":checked")) {
      // console.log($('#checkbox').is(":checked"))

      $("#ok-post").removeClass("checkedTure");
      $("#ok-post").addClass("checkedFalse");
    } else {
      $("#ok-post").removeClass("checkedFalse");
      $("#ok-post").addClass("checkedTure");
    }
  });
  //  input 获取/失去焦点
  $(".post-item input").focus(function () {
    
    $(this).parent().css("border-color", "#8c8c8c");
  });
  $(".post-item input").blur(function () {
    
    $(this).parent().css("border-color", "#d2d2d2");
  })
      //  点击注册
  $(".post-sumbit").click(function () {
    // $(".post-item input").focus(function () {
    //   console.log(11111);
    //   $(this).parent().css("border-color", "#f42424");
    // });



    for(var i=0;i<$(".post-item input").length;i++){
        if($(".post-item input").eq(i).val() == ''){

            $('.item-ater').eq(i).show()
        }
    }
   if($("#checkbox").is(":checked")){
    $('.ture').eq(5).show()
   }else{
    $('.ture').eq(5).hide()
   }
     


  });
      //  验证手机号
   $('#phone').blur(function(){
    var pattern = /^1[34578]\d{9}$/; 
     if(pattern.test($('#phone').val())){
         $('.ture').eq(0).show()
         $('.item-ater').eq(0).hide()
     }else if($('#phone').val().trim() == ''){
          $('.item-ater').eq(0).show()
          $('.item-ater:eq(0) span').html("手机号码不能为空")
          $('.ture').eq(0).hide()
     }else{
        $('.item-ater').eq(0).show()
        $('.ture').eq(0).hide()
        $('.item-ater:eq(0) span').html("手机号码不是一个有效号码")
     }

   })

// 验证密码
   $('#password').blur(function(){
    var pattern =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/; 
     if(pattern.test($('#password').val())){
         $('.ture').eq(3).show()
         $('.item-ater').eq(3).hide()
     }else if($('#password').val().trim() == ''){
          $('.item-ater').eq(3).show()
          $('.item-ater:eq(3) i').show()
          $('.item-ater:eq(3) span').html("密码不能为空")
          $('.ture').eq(3).hide()
     }else{
        //  console.log(1111)
        $('.item-ater').eq(3).show()
        $('.ture').eq(3).hide()
        $('.item-ater:eq(3) i').hide()
        $('.item-ater:eq(3) span').html("8-16位且必须包含大小写字母和数字的组合")
     }



     $('.onloading').hide()
   })
    

       $('#passwordEven').blur(function(){
           if($('#password').val() == $('#passwordEven').val()){
            $('.ture').eq(4).show()
            $('.item-ater').eq(4).hide()
           }else{
            $('.item-ater').eq(4).show()
            $('.ture').eq(4).hide()
            $('.item-ater:eq(4) span').html("两次输入密码不一致")
           }
       })

      
       $('#password').bind('input propertychange', function(){
        $('.item-ater').eq(3).hide()
         
           $('.onloading').show()
           
           if($('#password').val().length<8){
                $('.onloading .s2').width('70px')
                $('.onloading .r1').html('低')
           }else if($('#password').val().length<12){
            var pattern =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/; 
            if(pattern.test($('#password').val())){
              $('.onloading .s2').width('110px')
              $('.onloading .r1').html('中')
            }
           }else{
            var pattern =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/; 
            if(pattern.test($('#password').val())){
              $('.onloading .s2').width('150px')
              $('.onloading .r1').html('高')
            }
           }





       })

      


});
