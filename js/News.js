/**
 * Created by Administrator on 2016/10/8 0008.
 */
//首页-品牌动态部分- 开始  彭宇
$(function(){
    var status = true;
    var timer = null;
    var json = [
        {
            "width": 300,
            "top": 20,
            "left": 0,
            "opacity": 0.5,
            "zIndex": 8
        },
        {
            "width": 600,
            "top": 60,
            "left": 100,
            "opacity": 1,
            "zIndex": 10
        },
        {
            "width": 300,
            "top": 20,
            "left": 300,
            "opacity": 0.5,
            "zIndex": 8
        }
    ];

    move();
    clearInterval(timer);
    timer=setInterval(function(){
        move(true);
    },2500);

    $("#news_Box").hover(function(){
        $("#arrow").stop().fadeIn();
        clearInterval(timer);
    },function(){
        $("#arrow").stop().fadeOut();
        timer=setInterval(function(){
            move(true);
        },2500);
    })

    $("#arrLeft").on("click",function(){
        if(status){
            status=false;
            move(true)
        }
    });

    $("#arrRight").on("click",function(){
        if(status){
            status=false;
            move(false)
        }
    });

    function move(offOn){
        if(offOn != undefined){
            if(offOn){
                json.unshift(json.pop());
            }else{
                json.push(json.shift());
            }
        }
        $.each(json,function(i,v){
            $("#news_Main ul li").eq(i).css("zIndex",v.zIndex).stop().animate({"width":v.width,"top":v.top,"left":v.left,"opacity":v.opacity},500,function(){
                /*动画完后执行的回调函数*/
                status=true;
            });
        })
    }
})
//首页-品牌动态部分- 结束  彭宇