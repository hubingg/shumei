/**
 * Created by Administrator on 2016/10/7.
 */
    $(function(){

        /**
         * 封装勒一个图片变大的函数
         */
       function bigger(){
           var arr=[
               {
                   top:60,
                   left:5,
                   width:190,
                   height:295
               },
               {
                   top:133,
                   left:210,
                   width:190,
                   height:295
               },
               {
                   top:0,
                   left:420,
                   width:743,
                   height:430
               },
               {
                   top:133,
                   left:1180,
                   width:190,
                   height:295
               },
               {
                   top:60,
                   left:1390,
                   width:190,
                   height:295
               }
           ];
           var arr1=[
               {
                   top:75,
                   left:0,
                   width:200,
                   height:295
               },
               {
                   top:145,
                   left:205,
                   width:205,
                   height:295
               },
               {
                   top:0,
                   left:410,
                   width:765,
                   height:450
               },
               {
                   top:145,
                   left:1175,
                   width:205,
                   height:295
               },
               {
                   top:75,
                   left:1385,
                   width:200,
                   height:295
               }
           ];
           for(var i=0;i<arr.length;i++){
               $(".bottom-1").find("img").eq(i).css(arr[i]);

           }

           $(".bottom-1 a").mouseenter(function () {
               index=$(this).index();
               $(this).find("img").stop().animate(
                   arr1[index]
                   ,200,"linear");
           })



           $(".bottom-1 a").mouseleave(function(){
               index=$(this).index();
               $(this).find("img").stop().animate(arr[index],200,"linear");
           })

       }
        bigger();



        /**
         * 定义了一个旋转木马的函数
         */
function horseGo(){

    var config = [
        {
            "width": 100,
            "height": 100,
            "top":170,
            "left": 65,
            "opacity":0.5,
            "zIndex": 2
        },//0
        {
            "width": 250,
            "height": 250,
            "top": 150,
            "left":235,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 500,
            "height": 500,
            "top": 0,
            "left": 545,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 250,
            "height": 250,
            "top": 150,
            "left": 1115,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 100,
            "height": 100,
            "top": 170,
            "left": 1435,
            "opacity": 0.5,
            "zIndex": 2
        }]
//旋转点击按钮的显示与影藏
    $(".bottom-3").mouseenter(function(){
        $(this).find("div").css({display:"block"});
    })
    $(".bottom-3").mouseleave(function(){
        $(this).find("div").css({display:"none"});
    })

            /**
             * 定义了一个旋转的函数
              */
    function go(){
        var lis=$(".bottom-3").find("li");
        for(var i=0;i<lis.length;i++){
            lis.eq(i).find("img").animate(config[i],400,"swing",function(){
                flag=true;
            });
        }
    }
    go();


    var flag=true;
//左右点击旋转的函数
    $("#campArrRight").click(function(){
        if(flag){
            flag=false
            config.push(config.shift());
            go();
        }
    })

    $("#campArrLeft").click(function(){ go();
        if(flag){
            flag=false
            config.unshift(config.pop());
            go();
        }
    })
}
        horseGo();


        //点击换装部分
       var i=0;
        $(".choose").on("click","li",function(){
            if(i==0){
                i=1;
                $("#camp-main").children().eq(i).css({"display":"block"}).siblings().css({"display":"none"});
            }else{
                i=0
                $("#camp-main").children().eq(i).css({"display":"block"}).siblings().css({"display":"none"});
            }
        })
//点击换装按钮显示与影藏部分
        $("#camp").mouseenter(function () {
            $(".choose").find("ul").stop().animate({"opacity":1},1000,"linear");
        })

        $("#camp").mouseleave(function(){
            $(".choose").find("ul").animate({"opacity":0},1000,"linear").stop();
        })


    })
