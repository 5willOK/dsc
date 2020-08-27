$(function(){

    //   var newTime = new Date('2020-10-10 11:50:31');
    //   var newDay = new Date()
    //   var newCount = (newTime - newDay)/1000;
    //   var days =parseInt(newCount/60/60/24) 
    //   var dayHours = parseInt(newCount / 60 / 60 % 24);
    //   var dayMinutes = parseInt(newCount / 60 % 60);
    //   var daysec = parseInt(newCount % 60);

     function getTimer(time){
        var newTime = new Date(time);
        var newDay = new Date()
        var newCount = (newTime - newDay)/1000;
        var objtime = {}
        objtime.days =parseInt(newCount/60/60/24) 
        objtime.dayHours = parseInt(newCount / 60 / 60 % 24);
        objtime.dayHours = objtime.dayHours < 10 ? '0' + objtime.dayHours : objtime.dayHours;
        objtime.dayMinutes = parseInt(newCount / 60 % 60);
        objtime.dayMinutes = objtime.dayMinutes < 10 ? '0' + objtime.dayMinutes : objtime.dayMinutes;
        objtime.daysec = parseInt(newCount % 60);
        objtime.daysec = objtime.daysec < 10 ? '0' + objtime.daysec : objtime.daysec;
        return objtime


     }

   //   for(var i=0;i<5;i++){
   //      if(i=2){
   //       setInt(2,'2021-04-30 13:46:56')
   //      }else{
   //       setInt(i,'2020-10-10 11:50:31')
   //      }
   //   }


      
      setInt(0,'2020-10-10 11:50:31')
      setInt(1,'2020-10-10 11:50:31')
      setInt(3,'2020-10-10 11:50:31')
      setInt(4,'2020-10-10 11:50:31')
      setInt(2,'2021-04-30 13:46:56')




      function  setInt(num,strtime){
         setInterval( function(){
            var newobj = getTimer(strtime)
            $('.days').eq(num).text(newobj.days)
            $('.hours').eq(num).text(newobj.dayHours)
            $('.minutes').eq(num).text(newobj.dayMinutes)
            $('.seconds').eq(num).text(newobj.daysec)
         }, 1000);
      }

      




})



// $(function() {
//    /* 网站导航 */
  
//     $('.header-max-nav ul li').eq(5).addClass("active").siblings('.header-max-nav ul li').removeClass("active")

// })