/**@heYinXue
 * Created by Administrator on 2016/10/7.
 */
$(function () {
    //鼠标移入li标签时候，当前图片突出显示
    //$(".collection_pic").css("opacity",0.4);
    var flag = true;
    $(".collection_pic").mouseenter(function () {
        $(this).css("opacity", 1);
        $(this).siblings().css("opacity", 0.4);
        $(".collection_pic_text").eq($(this).index()).stop(true,true).slideDown("normal").slideUp("slow").fadeIn(1000);
    });
    //鼠标离开大盒子时候，所有图片透明度为1
    $(".collection_wrap").mouseleave(function () {
        $(this).find(".collection_pic").css("opacity", 1);
        $(".collection_pic_text").eq($(this).index()).stop(false,true);
    });
    //阻止默认跳转
    //$('.collection a').click(function (event) {
    //    event.preventDefault();
    //})
});

// collection 结束