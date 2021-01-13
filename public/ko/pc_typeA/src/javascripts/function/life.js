function lifeJS() {
    var $lifeSlide = $(".life_contents .slide_wrap");
    var $lifeImg = $lifeSlide.find(".slide_img li"),
        $lifeImgLength = $lifeImg.length,
        $slideTxt = $lifeSlide.find(".slide_txt li");

    var $lifePrevBtn = $lifeSlide.find(".prev_btn"),
        $lifeNextBtn = $lifeSlide.find(".next_btn");

    var $lifeCrrNum = $lifeSlide.find(".crr_num"),
        $lifeMaxNum = $lifeSlide.find(".max_num");

    var lifeSlideCrr = {};
    var _lifeSlideDirection = null;
    var _lifeSlideDuration = .3;
    $lifeMaxNum.text($lifeImgLength);
    $lifePrevBtn.click(function () {
        if (!TweenMax.isTweening($lifeImg)) {
            _lifeSlideDirection = "prev";
            lifeSlideCrr.number--;
        }
    });
    $lifeNextBtn.click(function () {
        if (!TweenMax.isTweening($lifeImg)) {
            _lifeSlideDirection = "next";
            lifeSlideCrr.number++;
        }
    });
    Object.defineProperty(lifeSlideCrr, 'number', {
        get: function () {
            return this.num || 0;
        },
        set: function (_index) {
            if(_index < 0){
                _index = $lifeImgLength - 1;
            }
            _index = _index % $lifeImgLength;
            if(_lifeSlideDirection === "next"){
                TweenMax.to($lifeImg, _lifeSlideDuration, {y: 60, opacity: 0});
                TweenMax.fromTo($lifeImg.eq(_index), _lifeSlideDuration, {y: -60}, {y: 0, opacity: 1});
            } else {
                TweenMax.to($lifeImg, _lifeSlideDuration, {y: -60, opacity: 0});
                TweenMax.fromTo($lifeImg.eq(_index), _lifeSlideDuration, {y: 60}, {y: 0, opacity: 1});
            }
            TweenMax.to($slideTxt, .3, {opacity:0});
            TweenMax.to($slideTxt.eq(_index), .3, {opacity:1});
            $lifeCrrNum.text(_index + 1);
            this.num = _index;
        }
    });
}