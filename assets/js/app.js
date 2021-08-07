let menu_list = {
    1: {
        "link": "02_gioithieu",
        "title": "GIỚI THIỆU",
    },
    2: {
        "link": "",
        "title": "SẢN PHẨM",
    },
    3: {
        "link": "",
        "title": "HỆ THỐNG PHÂN PHỐI",
    },
    4: {
        "link": "",
        "title": "TIN TỨC",
    },
    5: {
        "link": "",
        "title": "THƯ VIỆN",
    },
    6: {
        "link": "",
        "title": "LIÊN HỆ",
    },
};



$(document).ready(function () {
    $('.site4_head_col0_kova').append(renderHeader());
})


let renderHeader = () => {
    var logo = '<div class="container"><div class="row"><div class="header"><div class="logo"><a href="" title=""><img src="./assets/img/logo1.png"></a></div>';
    var menu = '<div class="menu-top"><div class="menu-wrapper"><div class="hamburger"><span></span><span></span><span></span></div></div>';
    var list = '<ul class="menu-list accordion"><li class="logo-menu"><a href="" title=""><img src="./assets/img/logo1.png" alt=""></a></li>';
    var searchbar = '<div class="searchbar"><span class="fa-search"><img src="./assets/img/seach.png" alt=""></span><div class="togglesearch"><input type="text" placeholder="" /><input type="button" value="Search" /></div></div>';
    $.each(menu_list, function (index, value) {
        list += '<li><a class="menu1 title5" href="' + value.link + '.html" title="">' + value.title + '</a></li>'
    })
    logo += menu + list + '</ul></div></div>' + searchbar + '</div></div>';
    return logo;
}



$(document).ready(function () {

    $(".fa-search").click(function () {
        $(".togglesearch").toggle();
        $("input[type='text']").focus();
    });

});

$(function () {
    function slideMenu() {
        var activeState = $(".menu-top .menu-list").hasClass("active");
        $(".menu-top .menu-list").animate({ left: activeState ? "0%" : "-100%" }, 400);
    }
    $(".menu-wrapper").click(function (event) {
        event.stopPropagation();
        $(".hamburger").toggleClass("open");
        $(".menu-top .menu-list").toggleClass("active");
        slideMenu();

        $("body").toggleClass("overflow-hidden");
    });

    $(".menu-list").find(".accordion-toggle").click(function () {


        $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
        $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });

}); // jQuery load