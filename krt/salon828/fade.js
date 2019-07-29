var image_list;
var define;
var firstview;


$(document).ready(function(){
  if(firstview == "on") {
    if(!localStorage.getItem("fade_no_first_view")) {
      localStorage.setItem("fade_no_first_view","true");
      setup();
    }
  } else {
    localStorage.removeItem("fade_no_first_view");
    setup();
  }
});


function setup() {
  var html = $("body").html();
  $("body").html("<div id='fade-main-content' style='display:none;'>"+html+"</div>");

  $("body").prepend("<div id='fade-image'></div>");
  for (var i=0 ; i<image_list.length ; i++) {
    $("#fade-image").append("<div style='background-image:url("+image_list[i]+");'></div>");
  }

  for (i=0;i<image_list.length;i++) {
    fade_in_out(i);
  }
}


function fade_in_out (i) {
    if(i == 0) {

      if(1 == image_list.length) {
        $("#fade-image div").eq(i).fadeIn(deley_time,function(){
          $(this).fadeOut(deley_time);
          $("#fade-main-content").fadeIn(deley_time);
        });
      } else {
        $("#fade-image div").eq(i).fadeIn(deley_time,function(){
          $(this).fadeOut(deley_time);
        });
      }
    } else if (i+1 == image_list.length) {
      setTimeout(function() {
        $("#fade-image div").eq(i).fadeIn(deley_time,function(){
          $(this).fadeOut(deley_time);
          $("#fade-main-content").fadeIn(deley_time);
        });
      }, deley_time*i);
    } else {
      setTimeout(function() {
        $("#fade-image div").eq(i).fadeIn(deley_time,function(){
          $(this).fadeOut(deley_time);
        });
      }, deley_time*i);
    }
}