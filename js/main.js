$(window).bind('scroll', function() {
    var navHeight = $(window).height();
    if ($(window).scrollTop() > navHeight) {
        $('.navigation').addClass('sticky-nav');
        $('.menu li a').css("color","black");
        $('nav .drop-menu ').css("background","white");
    } else {
        $('.navigation').removeClass('sticky-nav');
        $('.menu li a').css("color","#fff");
        $('nav .drop-menu ').css("background","#02082e");
    }
});


$('nav li').hover(
    function() {
        $('ul', this).stop().slideDown(200);
    },
    function() {
        $('ul', this).stop().slideUp(200);
    }
    );
