/**
 * Created by 89336 on 2016/10/7.
 */
$(function(){

    $(".foreword").mouseenter(function (){

        $(".foreword>i").stop().css("display","none");
        $(".foreword>.Txt").stop().css("border","none").css("left","27px").animate({
            bottom:336
        },600,"swing");
        $(".foreword>.Txt>.min").stop().css("padding-top","10px").css("padding-left","26px");

    }).mouseleave(function(){
        $(".foreword>i").stop().css("display","block");
        $(".foreword>.Txt").stop().css("border-left","4px solid #fff").css("left","23px").css("bottom","97px");
        $(".foreword>.Txt>.min").stop().css("padding-top","4px").css("padding-left","16px")
    })

    $(".fashion").mouseenter(function (){
        $(".fashion>i").stop().css("display","none");
        $(".fashion>.Txt").stop().css("border","none").css("left","27px").animate({
            bottom:336
        },600,"swing");
        $(".fashion>.Txt>.min").stop().css("padding-top","10px").css("padding-left","26px")

    }).mouseleave(function(){
        $(".fashion>i").stop().css("display","block");
        $(".fashion>.Txt").stop().css("border-left","4px solid #fff").css("left","23px").css("bottom","97px");
        $(".fashion>.Txt>.min").stop().css("padding-top","4px").css("padding-left","16px")
    })

})
