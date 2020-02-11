

// A $( document ).ready() block.
$( document ).ready(function(){
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
});
