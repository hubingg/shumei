//品牌动态部分- 开始  彭宇
window.onload = function(){
    var newsBox = document.getElementById("news_Box");
    var newsMain = document.getElementById("news_Main");
    var ul = newsMain.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var left = document.getElementById("arrLeft");
    var right = document.getElementById("arrRight");

    var picArrt = [
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
            "zIndex": 9
        },
        {
            "width": 300,
            "top": 20,
            "left": 300,
            "opacity": 0.5,
            "zIndex": 8
        }
    ];

    newsBox.onmouseover = function(){
        animate(arrow,{"opacity":1})
    }

    newsBox.onmouseout = function(){
        animate(arrow,{"opacity":0})
    }

    function assign(){
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i],picArrt[i],function(){
                flag = true;
            });
        }
    }

    assign();
    var flag = true;

    right.onclick = function(){
        if(flag){
            flag =false;//
            picArrt.push(picArrt.shift());
            assign();
        }
    }

    left.onclick = function(){
        picArrt.unshift(picArrt.pop());
        assign();
    }


}
function animate(obj,json,fn){
    clearInterval(obj.timeId);
    obj.timeId = setInterval(function(){
        var flag = true;
        for(var key in json){
            if(key == "opacity"){
                var leader = getStyle(obj,key)*100 || 0;
                var target = json[key]*100;
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader += step;
                obj.style[key] = leader/100;
            }else if(key == "zIndex"){
                var leader = parseInt(getStyle(obj,key))||0;
                var target = json[key];
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader += step;
                obj.style[key] = leader;
            }else {
                var leader = parseInt(getStyle(obj,key))||0;
                var target = json[key];
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader += step;
                obj.style[key] = leader + "px";
            }
            if(leader != target){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timeId);
            if(fn){
                fn();
            }
        }
    },15)
}

function getStyle(obj,attr){
    if(obj&&obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}

//品牌动态部分- 结束  彭宇