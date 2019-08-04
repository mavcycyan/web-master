$('.slide-down a[href^="#"]').click(function(){
    //Сохраняем значение атрибута href в переменной:
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
});  

$('.h-menu-mob-btn').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.h-mob .h-mob-menu').css('display', 'none');
    }
    else {
        $(this).addClass('active');
        $('.h-mob .h-mob-menu').css('display', 'block');
    }
});

$(window).on('load resize', function(){
    if($(window).width() > 991){
        $(".range-input").ionRangeSlider({
            grid: true,
            hide_from_to: true,
            hide_min_max: true,
            values: [
                "Не владею", "Использую готовые решения", "Использую готовые решения и умею и переделывать", "Пишу сложный JS с нуля"
            ]
        });
    }
    else {
        $(".range-input").ionRangeSlider({
            grid: false,
            hide_from_to: false,
            hide_min_max: true,
            values: [
                "Не владею", "Использую готовые решения", "Использую готовые решения и умею и переделывать", "Пишу сложный JS с нуля"
            ]
        });
    }
});