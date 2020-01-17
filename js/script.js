jQuery.noConflict();
jQuery(document).ready(function(){
    var $ = jQuery;


    var scrolling;


    // bottom bar

    $(window).load(function(){
      $(window).scrollTop(1);
    })

    $(window).scroll(function(){
      var scrollHeight = $(document).height() - $(window).height();
      var nowHeight = $(window).scrollTop();
      $(".pro_bar").width(nowHeight / scrollHeight * $(window).width());
      clearInterval(scrolling);

      var height = $(document).scrollTop(); //스크롤 높이 측

      if(height > 167){ //하단 메뉴 바 fix 상태 바꾸기
        $('.btm_menu').addClass('fixfix');
        console.log("!");
      }else if(height <= 167){
        $('.btm_menu').removeClass('fixfix');
      }
    });

    if ($(document).height() == $(window).height()) {
      $(".pro_bar").css("width", "100%");
    }

  });
