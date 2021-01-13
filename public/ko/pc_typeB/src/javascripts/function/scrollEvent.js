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









