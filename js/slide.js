/**
 * Created by Administrator on 2016/10/7 0007.
 */

$(function(){
    //自动适应屏幕
    var height=$(window).height();
    var wid = $(window).width();
    var campaigns = $("#campaigns")[0].scrollWidth;
    var campaignssss = $("#campaigns");
    var ch = wid/campaigns;
    campaignssss.css({transform:"scale("+ch+")",transformOrigin:"left top"})
    $(".main_banner").css({"height":height-74})
    
    var navuls = $("#navul").children();

    //console.log(navuls[1]);

    navuls.on("click",function(){
        var ary = ["#banner","#campaigns","#collection","#banner","#share","#news","#footbg"]

        var t = $(ary[$(this).index()]).offset().top-72;
        console.log(t);
        $(window).scrollTop(t);
        return false;
    });


    //navuls.each(function(index,ele){
    //    //console.log(1);
    //    var ary = ["#campaigns","#collection","#share","#news","#footernav"]
    //    var t = $(ary[index]).offset().top;
    //    console.log(t);
    //    ele.on("click",function(){
    //
    //    })
    //
    //    $(window).scrollTop(t);
    //    return false;
    //});



    //显示隐藏箭头
    $(".main_banner").mouseenter(function(){
       clearInterval(timer);
        $(".arr").css({"display":"block"})
        })
   $(".main_banner") .mouseleave(function(){
           $(".arr").css({"display":"none"})
          clearInterval(timer);
         timer=setInterval(play,2500)
        })
    var timer;
    var index=0;
    //利用小圆点轮播
    $(".main_banner>ol>li").mouseenter(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        index=$(this).index();
        $(".main_banner>ul>li").eq($(this).index()).fadeIn("ease-in-out").siblings().fadeOut("ease-in-out");

    })
    //点击轮播
    $("#left").click(function(){
        if(index==0){
            index=3;
        }
        index--;
        $(".main_banner>ul>li").eq(index).fadeIn("ease-in-out").siblings().fadeOut("ease-in-out");
        $(".main_banner>ol>li").eq(index).addClass("active").siblings().removeClass("active")

    })
    $("#right").click(play);
    //自动轮播
    function play(){
        if(index==2){
            index=-1;
        }
        index++;
        $(".main_banner>ul>li").eq(index).fadeIn("ease-in-out").siblings().fadeOut("ease-in-out");
        $(".main_banner>ol>li").eq(index).addClass("active").siblings().removeClass("active")

    }
   timer=setInterval(play,2000);
    $(".main_banner>ul>li").eq(2).after($(".main_banner>ul>li").eq(0).clone());
})