$(document).ready(function() {

    var scrollLink = $('.scroll');

    // 스무스 스크롤
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1200);
    });

    // 활성 링크 스위치
$(window).scroll(function() {
    var scrollBarLocation = $(this).scrollTop();
    scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top -20;
            if ( sectionOffset <= scrollBarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
    })
})

// 아래로 화살표 바운스
$(".sliding-link").click(function(i) {
    i.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({
            scrollTop: $(aid).offset().top -75
        }, 'slow');
    });

// 비디오 재생
$(".play-1").yu2fvl();
$(".play-2").yu2fvl();
$(".play-3").yu2fvl();
$(".play-4").yu2fvl();
$(".play-5").yu2fvl();
$(".play-6").yu2fvl();

})