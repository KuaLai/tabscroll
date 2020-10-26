//-----  nav-menu 左右捲動+監聽事件  start -----//

var gameTab = $('.tab-content');
var ul_width = gameTab[0].scrollWidth;
var nav_width = gameTab.width();
var nav_item_width = $('.tab-content li').width();
var nav_amount = $('.tab-content li').length;
var btn_prev = $('.tab-button-prev');
var btn_next = $('.tab-button-next');
var disabled_class = "tab-button-disabled";

if (nav_width < ul_width) {
    $('.tab-button').addClass('show');
    gameTab.addClass('scroll');
    btn_prev.addClass(disabled_class);

    gameTab.scroll(function () {
        var scrollVal = $(this).scrollLeft();
        if (scrollVal === nav_amount * nav_item_width - gameTab.width()) {
            btn_next.addClass(disabled_class);
            btn_prev.removeClass(disabled_class);
        } else {
            btn_next.removeClass(disabled_class);
        }

        if (scrollVal === 0) {
            btn_prev.addClass(disabled_class);
            btn_next.removeClass(disabled_class);
        } else {
            btn_prev.removeClass(disabled_class);
        }
    })
} else {
    //....
}

btn_prev.click(function () {
    var nowLeft = gameTab[0].scrollLeft;

    if (nowLeft === 0 || nowLeft <= nav_item_width) {
        btn_prev.addClass(disabled_class);
        gameTab.animate({
            scrollLeft: nowLeft - nav_item_width
        }, 400);
    } else {
        btn_next.removeClass(disabled_class);
        gameTab.animate({
            scrollLeft: nowLeft - nav_item_width
        }, 400);
    }
});

btn_next.click(function () {
    var nowLeft = gameTab[0].scrollLeft;

    if (nowLeft >= nav_amount * nav_item_width - gameTab.width()) {
        btn_next.addClass(disabled_class);
        gameTab.animate({
            scrollLeft: nowLeft + nav_item_width
        }, 400);

    } else {
        btn_prev.removeClass(disabled_class);
        gameTab.animate({
            scrollLeft: nowLeft + nav_item_width
        }, 400);
    }
});

//-----  nav-menu 左右捲動+監聽事件  end -----//