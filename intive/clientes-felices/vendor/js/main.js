var windowWidth;
var scrollPosition;
var windowHeight;

$(document).ready(function(){
  console.log('ready');
  w3IncludeHTML();
  getWindowWidth();
  showHideNav();
  showContact();
  showContactoBusqueda();

$(".benefit").flip({
  axis: 'y',
  trigger: 'hover'
});

  $(".comunity-inner").flip({
    axis: 'y',
    trigger: 'hover'
  });
});

var $root = $('html, body');
$('a').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-50
    }, 500);
    return false;
});

$( window ).resize(function() {
  getWindowWidth();
});

$( window ).scroll(function() {
  getScrollPosition();
});


function getWindowWidth(){
  windowWidth = window.innerWidth;
  if (windowWidth > 992){
    $('.nav-buttons').removeClass('collapse');
    $('.nav-buttons').removeClass('navbar-collapse');
    $('.nav').addClass('hidden-nav');
  } else{
    $('.nav-buttons').addClass('collapse');
    $('.nav-buttons').addClass('navbar-collapse');
    $('.nav').removeClass('hidden-nav');
  }
};

function getScrollPosition(){
  scrollPosition = $(window).scrollTop();
  console.log(scrollPosition);
  if (scrollPosition < 10) {
    $('.nav').removeClass('hidden-nav');
  } else{
    $('.nav').addClass('hidden-nav');
  }
};

function showHideNav(){
  $('#navigation').mouseenter(function(){
    $('.nav').removeClass('hidden-nav');
  });

  $('#navigation').mouseleave(function(){
    setTimeout(function(){
      $('.nav').addClass('hidden-nav');
    },5000);
  });
};

function showContact(){
  $('#contact-form-button').click(function(){
    $("#contact").toggleClass('hidden');
    $(".contact-modal").toggleClass('hidden');
  });

  $(".contact-modal").click(function(){
    $("#contact").toggleClass('hidden');
    $(".contact-modal").toggleClass('hidden');
  });
}

function showContactoBusqueda(){
  $('#postular-java').click(function(){
    $("#list-contact-form-java").toggleClass('hidden');
  });
  $('#postular-javascript').click(function(){
    $("#list-contact-form-javascript").toggleClass('hidden');
  });
  $('#postular-qa-automation').click(function(){
    $("#list-contact-qa-automation").toggleClass('hidden');
  });
  $('#postular-python').click(function(){
    $("#list-contact-python").toggleClass('hidden');
  });
  $('#postular-android').click(function(){
    $("#list-contact-android").toggleClass('hidden');
  });
  $('#postular-ios').click(function(){
    $("#list-contact-ios").toggleClass('hidden');
  });
  $('#postular-net').click(function(){
    $("#list-contact-net").toggleClass('hidden');
  });

  $('.bottom').click(function(){
    $(".list-contact-form").addClass('hidden');
  });
}
