function cinemaJS() {
    var $cinemaSlide = $(".cinema_contents .slide_wrap");
    var $cinemaImg = $cinemaSlide.find(".slide_img ul"),
        $cinemaImgLi = $cinemaImg.find("li"),
        _cinemaImgLength = $cinemaImgLi.length;

    var $cinemaPrevBtn = $cinemaSlide.find(".prev_btn"),
        $cinemaNextBtn = $cinemaSlide.find(".next_btn");

    var $cinemaCrrNum = $cinemaSlide.find(".crr_num"),
        $cinemaMaxNum = $cinemaSlide.find(".max_num");

    $cinemaImgLi.each(function (i) {
        $(this).css({"left": i * 110 + "%"});
    });
    $cinemaMaxNum.text(_cinemaImgLength);

    var cinemaSlideCrr = {};
    Object.defineProperty(cinemaSlideCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            if(_index < 0 ) return false;
            if(_index > _cinemaImgLength - 1 ) return false;
            $cinemaPrevBtn.removeClass("off").addClass("on");
            $cinemaNextBtn.removeClass("off").addClass("on");
            if(_index === 0) {
                $cinemaPrevBtn.removeClass("on").addClass("off")
            }
            if(_index === _cinemaImgLength - 1){
                $cinemaNextBtn.removeClass("on").addClass("off")
            }
            TweenMax.to($cinemaImg, .3, {x: _index * -110 + "%"});
            $cinemaCrrNum.text(_index + 1);
            this.num = _index;
        }
    });
    $cinemaPrevBtn.click(function () {
        cinemaSlideCrr.number--;
    });
    $cinemaNextBtn.click(function () {
        cinemaSlideCrr.number++;
    });
}