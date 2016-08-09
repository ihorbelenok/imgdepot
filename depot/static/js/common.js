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
    $(".img-box").height($(".main-panel").height()-10);
    $('.scrollbar-macosx').scrollbar();
});

function imgboxresize() {
    var imgbox = $(".img-box");
    if (imgbox.hasClass("fit")) {
        imgbox.removeAttr("style");
        imgbox.width($(".main-panel").width()-10);
        imgbox.removeClass("fit");
        imgbox.addClass("fill");
        $(".img-box img").removeAttr("style");
        $(".img-box img").width(imgbox.width());
        $(".scrollbar-macosx").scrollTop(($(".img-box").height()-$(".scrollbar-macosx").height()) / 2);
    }
    else if (imgbox.hasClass("fill")) {
        imgbox.removeClass("fill");
        imgbox.addClass("full");
        imgbox.removeAttr("style");
        $(".img-box img").removeAttr("style");
        $(".scrollbar-macosx").scrollTop(($(".img-box").height()-$(".scrollbar-macosx").height()) / 2);
        $(".scrollbar-macosx").scrollLeft(($(".img-box").width()-$(".scrollbar-macosx").width()) / 2);
    }
    else {
        imgbox.height($(".main-panel").height()-10);
        imgbox.removeClass("full");
        imgbox.addClass("fit");
        $(".img-box img").removeAttr("style");
        $(".img-box img").height(imgbox.height());
    }
}

$(window).on("resize", function () {
    console.log("blah");
    var imgbox = $(".img-box");
    if (imgbox.hasClass("fit")) {
        imgbox.height($(".main-panel").height()-10);
        $(".img-box img").removeAttr("style");
        $(".img-box img").height(imgbox.height());

    }
    else if (imgbox.hasClass("fill")) {
        imgbox.width($(".main-panel").width()-10);
        $(".img-box img").removeAttr("style");
        $(".img-box img").width(imgbox.width());
        $(".scrollbar-macosx").scrollTop(($(".img-box").height()-$(".scrollbar-macosx").height()) / 2);
    }
    else {
        imgbox.removeAttr("style");
        $(".img-box img").removeAttr("style");
        $(".scrollbar-macosx").scrollTop(($(".img-box").height()-$(".scrollbar-macosx").height()) / 2);
        $(".scrollbar-macosx").scrollLeft(($(".img-box").width()-$(".scrollbar-macosx").width()) / 2);
    }
});

$(".img-box").on("click", function () {
    imgboxresize();
});

