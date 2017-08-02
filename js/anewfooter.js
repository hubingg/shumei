/**
 * Created by Administrator on 2016/10/8 0008.
 */

window.onload = function() {
    var footernavUl = document.getElementById("footernavUl");
    var navLis = footernavUl.children;
    var navLiAs = footernavUl.getElementsByTagName("a");
    for (var i = 0; i < navLis.length; i++) {
        navLis[i].index = i;
        navLis[i].onmouseover = function () {

            for (var k = 0; k < navLis.length; k++) {
                navLis[k].style.backgroundColor = "#333";
            }
            this.style.backgroundColor = "#eee";

            for (var j = 0; j < navLis.length; j++) {
                navLiAs[j].style.color = "#fff"
            }
            navLiAs[this.index].style.color = "#545454";

            for (var m = 0; m < navLis.length; m++) {
                condivs[m].style.display = "none";
            }
            condivs[this.index].style.display = "block";
        }
    }

    var footercon = document.getElementById("footercon");
    var condivs = footercon.children;


//三剑客------------------------------

    $(function () {
        /*底部二维码*/

        $(".weibo_icon").hover(function () {
            $(".weibo").fadeIn(500);
            $(".qq,.twitter,.wechat").fadeOut(0);
            $(".code_wrap").css("z-index", 200);
        }, function () {
            $(".weibo").fadeOut(0);
            $(".code_wrap").css("z-index", 50);
        });

        $(".qq_icon").hover(function () {
            $(".qq").fadeIn(500);
            $(".weibo,.twitter,.wechat").fadeOut(0);
            $(".code_wrap").css("z-index", 200);
        }, function () {
            $(".qq").fadeOut(0);
            $(".code_wrap").css("z-index", 50);
        });
        $(".twitter_icon").hover(function () {
            $(".twitter").fadeIn(500);
            $(".weibo,.qq,.wechat").fadeOut(0);
            $(".code_wrap").css("z-index", 200);
        }, function () {
            $(".twitter").fadeOut(0);
            $(".code_wrap").css("z-index", 50);
        });
        $(".wechat_icon").hover(function () {
            $(".wechat").fadeIn(500);
            $(".weibo,.qq,.twitter").fadeOut(0);
            $(".code_wrap").css("z-index", 200);
        }, function () {
            $(".wechat").fadeOut(0);
            $(".code_wrap").css("z-index", 50);
        });
        $(".weibo,.twitter,.wechat").hover(function () {
            $(this).fadeIn(0);
            $(".code_wrap").css("z-index", 200);
        }, function () {
            $(this).fadeOut(500);
            $(".code_wrap").css("z-index", 50);
        });
    })


    $(function () {
        $(".city li").on("mouseenter", function () {
            $(this).css("backgroundColor", "#ccc");

        });
        $(".city li").on("mouseleave", function () {
            $(this).css("backgroundColor", "#fff");
        });
    })

    //业凯--------------------------------------------


    $(function(){
        $(".fs18").on("mouseenter",function(){
            $(this).stop().animate({
                fontSize:25
            },500)
        }).on("mouseleave",function(){
            $(this).stop().animate({
                fontSize:18
            },500)
        })
        $(".fs36").on("mouseenter",function(){
            $(this).stop().animate({
                fontSize:42
            },500)
        }).on("mouseleave",function(){
            $(this).stop().animate({
                fontSize:36
            },500)
        })
        $(".fs14").on("mouseenter",function(){
            $(this).stop().animate({
                fontSize:20
            },500)
        }).on("mouseleave",function(){
            $(this).stop().animate({
                fontSize:14
            },500)
        })
    })

    //飞敏--------------------------------------------

    var box11 = document.getElementById("box11");
    var box22 = document.getElementById("box22");
    var box33 = document.getElementById("box33");
    var box1Con = document.getElementById("box1Con");
    var box2Con = document.getElementById("box2Con");
    var box3Con = document.getElementById("box3Con");

    box11.onmouseover = function () {
        aliPlayDown(box1Con);
    }
    box11.onmouseout = function () {
        aliPlayUp(box1Con);
    }
    box22.onmouseover = function () {
        aliPlayDown(box2Con);
    }
    box22.onmouseout = function () {
        aliPlayUp(box2Con);
    }
    box33.onmouseover = function () {
        aliPlayDown(box3Con);
    }
    box33.onmouseout = function () {
        aliPlayUp(box3Con);
    }


    var wrap1 =document.getElementById("wrap1");
    wrap1.onmouseover = function () {
        aliPlayDown(box1Con);
    }
    wrap1.onmouseout = function () {
        aliPlayUp(box1Con);
    }

    var wrap2 =document.getElementById("wrap2");
    wrap2.onmouseover = function () {
        aliPlayDown(box2Con);
    }
    wrap2.onmouseout = function () {
        aliPlayUp(box2Con);
    }


    var wrap3 =document.getElementById("wrap3");
    wrap3.onmouseover = function () {
        aliPlayDown(box3Con);
    }
    wrap3.onmouseout = function () {
        aliPlayUp(box3Con);
    }



    //row-------------------------------------
    var card = document.getElementById("card");
    var lis = card.children;
    for(var i=0; i<lis.length; i++) {
        lis[i].index = i;
        
        // 移入事件
        lis[i].onmouseover = function () {
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = "card-item";
            }
            this.className = "card-item active";

            for(var k=0; k<getCardFirstArr.length; k++){
                getCardFirstArr[k].style.display = "block";
                getCardSecondArr[k].style.display = "none";
            }
            getCardSecondArr[this.index].style.display = "block";
        }
        // 移除事件
        lis[i].onmouseout = function () {
            this.className = "card-item";
            for(var k=0; k<getCardFirstArr.length; k++){
                getCardFirstArr[k].style.display = "block";
                getCardSecondArr[k].style.display = "none";
            }
            getCardSecondArr[this.index].style.display = "none";
        }

    }

    var getCardDiv = card.getElementsByTagName("div");
    var getCardFirstArr = [];
    var getCardSecondArr = [];
    for (var i = 0; i < getCardDiv.length; i++) {
        if (getCardDiv[i].className == "card-content-down-first") {
            getCardFirstArr.push(getCardDiv[i]);
        }
        if (getCardDiv[i].className == "card-content-down-second") {
            getCardSecondArr.push(getCardDiv[i]);
        }
    }


    /**
     * 封装一个阿里云向下的动画函数
     * @param obj
     */
    function aliPlayDown(obj) {
        clearInterval(obj.timerId);
        obj.timerId = setInterval(function () {
            var leader = obj.offsetTop;
            if (leader > -4425) {
                var step = -75;
                leader = leader + step;
                obj.style.top = leader + 'px';
            } else {
                clearInterval(obj.timerId);
                obj.style.top = "-4425px";
            }
        }, 1000 / 60);
    }

    /**
     * 封装一个阿里云向上的动画函数
     * @param obj
     */
    function aliPlayUp(obj) {
        clearInterval(obj.timerId);
        obj.timerId = setInterval(function () {
            var leader = obj.offsetTop;
            if (leader < 0) {
                var step = 75;
                leader = leader + step;
                obj.style.top = leader + 'px';
            } else {
                clearInterval(obj.timerId);
                obj.style.top = "0px";
            }
        }, 1000 / 60);
    }
    //观喜----------------------------------------------


}