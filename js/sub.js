$(function(){
    $(".doorBtn>ul>li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".ham").on("click",function(){
        $(".nav").stop().animate({
            "left":0
        },1000)
    })
    $(".x").on("click",function(){
        $(".nav").stop().animate({
            "left":-100+"%"
        },1000)
    })
})