jQuery.noConflict();
jQuery(document).ready(function(){
    var $ = jQuery;


    var scrolling;


    // Under bar

    $(window).load(function(){
      $(window).scrollTop(1);
    })

    $(window).scroll(function(){
      var scrollHeight = $(document).height() - $(window).height();
      var nowHeight = $(window).scrollTop();
      $(".pro_bar").width(nowHeight / scrollHeight * $(window).width());
      clearInterval(scrolling);

      var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
      if(height > 167){
        $('.btm_menu').addClass('fixfix');
        console.log("!");
      }else if(height <= 167){
        $('.btm_menu').removeClass('fixfix');
      }
    });

    if ($(document).height() == $(window).height()) {
      $(".pro_bar").css("width", "100%");
    }

    // $.fn.scrollEnd = function(callback, timeout) {
    //   $(window).scroll(function(){
    //     clearInterval(scrolling);
    //     var $this = $(window);
    //     if ($this.data('scrollTimeout')) {
    //       clearTimeout($this.data('scrollTimeout'));
    //     }
    //     $this.data('scrollTimeout', setTimeout(callback, timeout));
    //   });
    // };
    //



  });
