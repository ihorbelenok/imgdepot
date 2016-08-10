$(function () {

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }
    ;

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    }
    ;

    $("img, a").on("dragstart", function (event) {
        event.preventDefault();
    });
});

$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("fast");
});

$(document).ready(function(){
    $('.scrollbar-macosx').scrollbar();

    var imgScWr = $(".img-scrollbar-wrapper");
    var img = $(".scrollbar-macosx .img-box img");
    if (imgScWr.width()/imgScWr.height()>img.data("width")/img.data("height")) {
        imgScWr.addClass("fit-width");
    }
    else {
        imgScWr.addClass("fit-height");
    }
});

$(window).resize(function () {
    var imgScWr = $(".img-scrollbar-wrapper");
    var img = $(".scrollbar-macosx .img-box img");
    if (imgScWr.width()/imgScWr.height()>img.data("width")/img.data("height")) {
        imgScWr.addClass("fit-width");
        $(".scrollbar-macosx").css("max-height", $(".img-scrollbar-wrapper").height());
        imgScWr.removeClass("fit-height");
    }
    else {
        $(".scrollbar-macosx").css("max-height", "inherit");
        imgScWr.addClass("fit-height");
        imgScWr.removeClass("fit-width");
    }

});

$(".img-box").on("click", function () {
    var imgScWr = $(".img-scrollbar-wrapper");
    if (imgScWr.hasClass("fit")){
        if (imgScWr.hasClass("fit-height")){
            $(".scrollbar-macosx").css("height", "auto");
            $(".scrollbar-macosx").css("max-height", $(".img-scrollbar-wrapper").height());
        }
        imgScWr.removeClass("fit");
        imgScWr.addClass("fill");
    }
    else if (imgScWr.hasClass("fill")){
        $(".scrollbar-macosx .img-box img").removeAttr("style");
        imgScWr.addClass("full");
        imgScWr.removeClass("fill");
    }
    else {
        imgScWr.addClass("fit");
        imgScWr.removeClass("full");
    }
});



