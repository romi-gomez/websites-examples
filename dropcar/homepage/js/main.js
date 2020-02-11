
// A $( document ).ready() block.
$( document ).ready(function() {
    w3IncludeHTML();


        $('.news-menu').mouseenter(function(){
          $('.press-menu').fadeIn(200);
        });

        $('.press-menu').mouseleave(function(){
          $(this).fadeOut(200);
        });

        $('.releases').click(function(){
          $('#pressRelease').addClass('active');
          $('#mediaCoverage').removeClass('active');
          $('#mediaKit').removeClass('active');

          $('.pressRelease').addClass('active');
          $('.mediaCoverage').removeClass('active');
          $('.mediaKit').removeClass('active');

        });

        $('.coverage').click(function(){
          $('#pressRelease').removeClass('active');
          $('#mediaCoverage').addClass('active');
          $('#mediaKit').removeClass('active');

          $('.pressRelease').removeClass('active');
          $('.mediaCoverage').addClass('active');
          $('.mediaKit').removeClass('active');
        });

        $('.kit').click(function(){
          $('#pressRelease').removeClass('active');
          $('#mediaCoverage').removeClass('active');
          $('#mediaKit').addClass('active');

          $('.pressRelease').removeClass('active');
          $('.mediaCoverage').removeClass('active');
          $('.mediaKit').addClass('active');

        });



    $(".buttonSchedule").click(function(){
      $(".scheduleForm").toggleClass('hidden', 'visible').fadeIn(1000);
    });

    $(".buttonError").click(function(){
      $(".scheduleForm").toggleClass('hidden', 'visible').fadeIn(1000);
    });

    $(".closeForm").click(function(){
      $(".scheduleForm").toggleClass('hidden', 'visible');
    });



    $(".phone").mouseenter(function(){
      $(".phoneNumber").fadeIn(500);
    });

    $(".phone").mouseleave(function(){
      $(".phoneNumber").fadeOut(500);
    });

    $(".willInner").mouseenter(function(){
    $(this).attr('src', 'images/Will.gif')
    });

    $(".willInner").mouseleave(function(){
    $(this).attr('src', 'images/Will.png')
    });

    $(".steveInner").mouseenter(function(){
    $(this).attr('src', 'images/Steve.gif')
    });

    $(".steveInner").mouseleave(function(){
    $(this).attr('src', 'images/Steve.png')
    });

    verImagen();

    var video = document.getElementById('video');
    video.addEventListener('click',function(){
      video.play();
    },false);


});


function verImagen(){

  var iphonePositionTop = $("#iphone").offset().top;
  var iphonePositionBottom = imgPositionTop + $("#iphone").height();

      var imgPositionTop = $("#i360").offset().top;
      var imgPositionBottom = imgPositionTop + $("#i360").height();

      $(window).scroll(function(){
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + window.innerHeight;


        if (windowBottom > imgPositionTop-50 && windowBottom < imgPositionTop+50) {
         $("#i360").attr("src", "images/360img.gif");
        };

        if (windowBottom > iphonePositionTop-50 && windowBottom < iphonePositionTop+50) {
         $("#iphone").attr("src", "images/iphoneDescription.gif");
        };
      });

}
