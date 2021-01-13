function gamingJS() {
    if (!$(".monitor_compare").length) return false;
    var $movingBtn = $(".moving_btn");
    var _lcdScreenW = null;
    var _movingMouse = true;

    $movingBtn.mousedown(function (e) {
        _movingMouse = true;
        e.preventDefault();
        var _this = $(this),
            _lcdScreen = _this.parent(),
            _lcdScreenW = _lcdScreen.width();
        var _mouseStart= e.clientX;

        $(document).mousemove(function (e) {
            if(_movingMouse === false) return false;
            var _movingMax = e.clientX - _mouseStart + _lcdScreenW;
            if(_movingMax < 65){ return false;}
            if(_compareBoxW + 64 > _movingMax){
                _lcdScreen.css({width: _movingMax});
            }
        });
    });
    $(document).mouseup(function () {
        _movingMouse = false;
    });
}