$( document ).ready(function(){
  $(".button-collapse").sideNav();

  $("#box1").mouseenter( function() {
    $('#card1').animate({ bottom: "0"}, 500 );
  });
  $("#box1").mouseleave( function() {
    $('#card1').animate({ bottom: "-70%"}, 500 );
  });

  $("#box2").mouseenter( function() {
    $('#card2').animate({ bottom: "0"}, 500 );
  });
  $("#box2").mouseleave( function() {
    $('#card2').animate({ bottom: "-70%"}, 500 );
  });

  $("#box3").mouseenter( function() {
    $('#card3').animate({ bottom: "0"}, 500 );
  });
  $("#box3").mouseleave( function() {
    $('#card3').animate({ bottom: "-70%"}, 500 );
  });

  $("#box4").mouseenter( function() {
    $('#card4').animate({ bottom: "0"}, 500 );
  });
  $("#box4").mouseleave( function() {
    $('#card4').animate({ bottom: "-70%"}, 500 );
  });

  $("#box5").mouseenter( function() {
    $('#card5').animate({ bottom: "0"}, 500 );
  });
  $("#box5").mouseleave( function() {
    $('#card5').animate({ bottom: "-70%"}, 500 );
  });

  $("#box6").mouseenter( function() {
    $('#card6').animate({ bottom: "0"}, 500 );
  });
  $("#box6").mouseleave( function() {
    $('#card6').animate({ bottom: "-70%"}, 500 );
  });

  $("#box7").mouseenter( function() {
    $('#card7').animate({ bottom: "0"}, 500 );
  });
  $("#box7").mouseleave( function() {
    $('#card7').animate({ bottom: "-70%"}, 500 );
  });

  $("#box8").mouseenter( function() {
    $('#card8').animate({ bottom: "0"}, 500 );
  });
  $("#box8").mouseleave( function() {
    $('#card8').animate({ bottom: "-70%"}, 500 );
  });

  $("#box9").mouseenter( function() {
    $('#card9').animate({ bottom: "0"}, 500 );
  });
  $("#box9").mouseleave( function() {
    $('#card9').animate({ bottom: "-70%"}, 500 );
  });

  $("#box10").mouseenter( function() {
    $('#card10').animate({ bottom: "0"}, 500 );
  });
  $("#box10").mouseleave( function() {
    $('#card10').animate({ bottom: "-70%"}, 500 );
  });

  $("#box11").mouseenter( function() {
    $('#card11').animate({ bottom: "0"}, 500 );
  });
  $("#box11").mouseleave( function() {
    $('#card11').animate({ bottom: "-70%"}, 500 );
  });

  $("#box12").mouseenter( function() {
    $('#card12').animate({ bottom: "0"}, 500 );
  });
  $("#box12").mouseleave( function() {
    $('#card12').animate({ bottom: "-70%"}, 500 );
  });

  $("#box13").mouseenter( function() {
    $('#card13').animate({ bottom: "0"}, 500 );
  });
  $("#box13").mouseleave( function() {
    $('#card13').animate({ bottom: "-70%"}, 500 );
  });

  $("#box14").mouseenter( function() {
    $('#card14').animate({ bottom: "0"}, 500 );
  });
  $("#box14").mouseleave( function() {
    $('#card14').animate({ bottom: "-70%"}, 500 );
  });




  $(window).scroll(function() {
    var services = $('.services-scroll').offset().top;

    if ($(window).scrollTop() >= (services - 200)){
      $('.services1').addClass('animated slideInRight');
      $('.services1').removeClass('hidden');
      setTimeout(function () {
        $('.services2').addClass('animated slideInRight');
        $('.services2').removeClass('hidden');
      }, 500);
      setTimeout(function () {
        $('.services3').addClass('animated slideInRight');
        $('.services3').removeClass('hidden');
      }, 1000);
    } 
    var progress = $('.progress-scroll').offset().top;
    if ($(window).scrollTop() >= (progress - 200)){
      $('.progress1').addClass('animated slideInLeft');
      $('.progress1').removeClass('progress1');
    } 
  });
})