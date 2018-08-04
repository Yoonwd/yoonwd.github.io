
// 사이드내비 
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// 스크롤 앵커
//
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

// READMORE 버튼
$(".sliding-link").click(function(i) {
    i.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({
            scrollTop: $(aid).offset().top -5
        }, 'slow');
    });


})