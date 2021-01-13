function lineUpJS() {
    var $spec = $("#spec");
    if (!$spec.length) return false;
    var $specTable = $spec.find(".spec_table"),
        _specTableW = $specTable.innerWidth();

    var $detailTable = $spec.find(".detail_table"),
        _detailTableH = $detailTable.height();

    var $specBar = $("#productLine").find(".spec_bar"),
        $specBox = $specBar.find(".box"),
        _specBoxW = winW / _specTableW * 100;
        $specBox.width(_specBoxW.toFixed(2) + "%");
    var $productTable = $spec.find(".product_table");

    $window.on("resize", function () {
        _specBoxW = winW / _specTableW * 100;
        $specBox.width(_specBoxW.toFixed(2) + "%");
    });

    dragElement(document.querySelector(".box"));
    var tableMovingOff = 0;
    function dragElement(boxSelect) {
        var _movingLeft = 0;
        var _setLeft = 0;
        boxSelect.onmousedown = dragMouseDown;
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            _setLeft = e.clientX;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            _movingLeft = _setLeft - e.clientX;
            _setLeft = e.clientX;
            var boxCrrPosition = boxSelect.offsetLeft - _movingLeft;
            tableMovingOff = boxSelect.offsetLeft * (_specTableW / winW);
            if (boxCrrPosition < 0 || boxCrrPosition > winW - $specBox.width() - 240) {
                e.preventDefault();
            } else {
                boxSelect.style.left = boxCrrPosition + "px";
                TweenMax.set($spec, {scrollLeft: boxSelect.offsetLeft * (_specTableW / winW)});
                if ($productTable.hasClass("fixed")) {
                    TweenMax.set($productTable, {x: -tableMovingOff});
                }
            }
        }
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    $window.scroll(function () {
        var _productOffset = $spec.offset().top;
        var _detailOffset = $spec.find(".detail_table").offset().top;
        if (_productOffset + 40 > winSc || winSc > _detailOffset + _detailTableH - 400) {
            $productTable.removeClass("fixed");
            TweenMax.set($productTable, {x: 0});
        } else if (_productOffset < winSc) {
            TweenMax.set($productTable, {x: -tableMovingOff});
            $productTable.addClass("fixed");
        }
        if (winSc + winH > _detailOffset) {
            $specBar.addClass("fixed");
        } else if (winSc + winH < _detailOffset) {
            $specBar.removeClass("fixed");
        }
        if (winSc + winH > _detailOffset + _detailTableH + 180) {
            $specBar.removeClass("fixed");
        }
    });
}