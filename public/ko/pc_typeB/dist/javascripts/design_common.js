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
function gamingJS() {

}
































function layout() {
    var $allNav = $("#allNav");
    var $gnbNav = $allNav.find("nav");
    var $allMenuBtn = $("#allMenuBtn");
    var $navDimmed = $("#navDimmed");

    //햄버거 메뉴 오픈
    $allMenuBtn.click(function () {
        var _this = $(this);
        if(!$allNav.hasClass("nav_open")){
            $html.addClass("no_scroll");
            $allNav.addClass("nav_open");
            TweenMax.to($navDimmed, .3, {display:"block", opacity:.6});
            TweenMax.to($gnbNav, .3, {x:"0%", ease:esStep});
        } else {
            allNavClose();
        }
    });
    $navDimmed.click(function () {
        allNavClose();
    });
    function allNavClose(){
        $html.removeClass("no_scroll");
        $allNav.removeClass("nav_open");
        TweenMax.to($navDimmed, .3, {display:"none", opacity:0});
        TweenMax.to($gnbNav, .3, {x:"-100%", ease:esStep});
    }
}




function leaderJS() {

}
































function lifeJS() {

}
































function lineUpJS() {

}
































function main() {
    //메인 비쥬얼 스케일/줌인
    var $mainVisual = $("#mainVisual .img_wrap");
    TweenMax.to($mainVisual, 10, {scale:1.1, ease:esStep});
}
































//console.log((conPosLeft[2] - winSc - winW) / (winW + conWidth[2]) * 100);
//console.log(conWidth[2]*.4);
//패럴 추가
function movieJS() {
    var conPosLeft = [],
        conWidth = [];
    $leftToRight.find(".contents").each(function(i){
        var _this = $(this);
        conPosLeft.push(_this.offset().left);
        conWidth.push(_this.width());
    });
    $(window).scroll(function(e){
        /*console.log(conWidth[2] * .4);
        console.log(
            ((conPosLeft[2] - winSc - winW) / (winW + conWidth[2]) * 100) * conWidth[2] * .4 / 100
        );*/
        $leftToRight.css({"transform": "translateX(" + -winSc  + 'px' + ")"});
        $leftToRight.find(".contents").each(function(i){
            var _this = $(this);
            if(winW > conPosLeft[i] - winSc && conPosLeft[i] - winSc > -conWidth[i]){
                TweenMax.to(_this.find(".js-pall-con01"), .3, {x:((conPosLeft[i] - winSc - winW) / (winW/2 + conWidth[i]/2) * 100) * conWidth[i] * .6 / 100});
                TweenMax.to(_this.find(".js-pall-con02"), .3, {x:((conPosLeft[i] - winSc - winW) / (winW/2 + conWidth[i]/2) * 100) * conWidth[i] * .8 / 100});
                TweenMax.to(_this.find(".js-pall-con03"), .3, {x:((conPosLeft[i] - winSc - winW) / (winW/2 + conWidth[i]/2) * 100) * conWidth[i] * -.6 / 100});
            }
        });
    });
}

/* 좌우 패럴 */
//각 섹션을 디자인에 맞춰 나열시키고
//기본적인 코딩을 맞춘뒤에
//각 섹션의 위치 값을 저장, 각 섹션의 넓이를 저장, 현재 브라우저 넓이
//섹션 안에 js-pall-con01, js-pall-con02, js-pall-con03 클래스를 추가
//01은 css를 추가해서 원래 위치에서 left x%추가
//02은 css를 추가해서 원래 위치에서 left x%추가
//03은 css를 추가해서 원래 위치에서 left -x%추가
//음..... 보내는건 각 섹션의 위치랑 스크롤값 브라우저를 빼서 스타트 위치를 0으로 퍼센트화해서 어쨋든
//브라우저 위치를 퍼센트화해서 css로 위치 보낸만큼을 퍼센트화 한거에 대입해서 스크롤이 움직이면 0 ~ 100% 까지 각각의 css를 픽셀화해서 각섹션이이 브라우저 화면에서 나올때부터
//완전히 다 없어질때까지 픽셀로 - 화시켜서 보낸다
//01은 <- 방향으로 원래 스크롤의 0.4배 더해서 보내고, 02는 <-- 방향으로 0.6배 더해서 보내고, 03은 -> 방향으로 -0.4배 보낸다

//진행이 되고 나면 픽셀화 시킨것을 브라우저 화면 끝에서 끝이 아니고 등장 시점부터 센터에 오면 css로 보내둔 픽셀값들이 센터에서 0이되도록 추가 구현한다































function scrollEvent(){
    var $subVisual = $("#subVisual");
    if(!$subVisual.length) return false;

    $(window).scroll(function () {
        //스크롤에 따른 bg 패럴럭스
        $(".pall_bg").each(function () {
            var offset = $(this).offset();
            var offsetTop = offset.top;
            var _this_h = $(this).innerHeight();
            var _bg_p = (winSc - offsetTop) / _this_h * 100;
            $(this).css({"background-position-y":-_bg_p.toFixed(2) / 2 + "%"});
        });
        //서브 비쥬얼 bg 패럴럭스
        $subVisual.css({"background-position-y":-170 + winSc / 2});
        headerFix();
    });
    /*스크롤 헤더 픽스*/
    function headerFix(){
        if(winSc > 0){
            $header.addClass("fixed");
        } else {
            $header.removeClass("fixed");
        }
    }
    headerFix();

    var _containerH = $("#container").offset().top;
    var $discoverBtn = $("#discoverBtn");
    $discoverBtn.click(function () {
        TweenMax.to($("html"), .5, {scrollTop:_containerH - 70, ease:esStep});
    });
}










function sportJS() {

}































