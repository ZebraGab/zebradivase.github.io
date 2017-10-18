$(function() {
$(".text_about").mouseover(function(e) {
$(".description_right").toggleClass("overlay");
});
$(".text_about").mouseout(function(e) {
$(".description_right").toggleClass("overlay");
});
});

$(function() {
$(".text_about3").mouseover(function(e) {
$(".description_right3").toggleClass("overlay");
});
$(".text_about3").mouseout(function(e) {
$(".description_right3").toggleClass("overlay");
});
});

$(function() {
$(".text_about2").mouseover(function(e) {
$(".description_right2").toggleClass("overlay");
});
$(".text_about2").mouseout(function(e) {
$(".description_right2").toggleClass("overlay");
});
});

   $(document).ready(function() {
    $('.itm.animated').hover(
     function() {
      $(this).addClass('pulse');
     },
     function() {
      $(this).removeClass('pulse');
     }
    )})
