"use strict";
var winW;
var winH;
var esStep = "Expo.ease";
var $window = $(window);
var winSc;
var $html = $("html");
var htmlH;
var docW;
var $header = $("#header");
var $leftToRight = $("#leftToRight");
var leftToRightW;

$window.load(function () {
    htmlH = $("body").outerHeight(true);
    winSc = $(this).scrollTop();
    docW = $(document).width();
    leftToRightW = $leftToRight.width();
    $html.height(leftToRightW - docW + winH + 1000);
    $window.on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
        docW = $(document).width();
        leftToRightW = $leftToRight.width();
        $html.height(leftToRightW - docW + winH + 1000);
    });
    $(this).trigger("resize");
    $(window).scroll(function () {
        winSc = $(this).scrollTop();
    });
    main();
    layout();
    scrollEvent();
    movieJS();
    gamingJS();
    sportJS();
    lifeJS();
    leaderJS();
    lineUpJS();
});