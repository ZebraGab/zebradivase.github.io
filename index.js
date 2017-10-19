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
   )});




    $(function() {
$(".slider_buttons__radio").hover(btn_hover_on);

function btn_hover_on() {
index = $(this).index();

clear_btn();
show_overlay(index);
};

function clear_btn() {
$(".slider_buttons__radio").removeClass("active");
$(".slider").removeClass("overlay");
}

function show_overlay(id) {
$this_button = $($(".slider_buttons__radio")[id]);
$this_overlay = $($(".slider")[id]);
$this_button.addClass("active");
$this_overlay.addClass("overlay");
}

function btn_hover_off() {
clear_btn();
show_overlay(0);
}

show_overlay(0);
});
