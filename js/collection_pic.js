/**@heYinXue
 * Created by Administrator on 2016/10/7.
 */
$(function () {
    //�������li��ǩʱ�򣬵�ǰͼƬͻ����ʾ
    //$(".collection_pic").css("opacity",0.4);
    var flag = true;
    $(".collection_pic").mouseenter(function () {
        $(this).css("opacity", 1);
        $(this).siblings().css("opacity", 0.4);
        $(".collection_pic_text").eq($(this).index()).stop(true,true).slideDown("normal").slideUp("slow").fadeIn(1000);
    });
    //����뿪�����ʱ������ͼƬ͸����Ϊ1
    $(".collection_wrap").mouseleave(function () {
        $(this).find(".collection_pic").css("opacity", 1);
        $(".collection_pic_text").eq($(this).index()).stop(false,true);
    });
    //��ֹĬ����ת
    //$('.collection a').click(function (event) {
    //    event.preventDefault();
    //})
});

// collection ����