/**@heYinXue
 * Created by Administrator on 2016/10/8.
 */
$(function () {
    //除了第一个大图片，其他的大图片隐藏

    function fn(className,id,idImg){
        !$(className).not(":first").hide();
        $(id).click(function(){
            if($("#"+this.rel).is(":hidden")){
                $(idImg).slideUp();
                $("#"+this.rel).slideDown();
            }
        })
    }
    fn("#gallery_output1 img","#gallery1 a","#gallery_output1 img");
    fn("#gallery_output2 img","#gallery2 a","#gallery_output2 img");
    fn("#gallery_output3 img","#gallery3 a","#gallery_output3 img")
    fn("#gallery_output4 img","#gallery4 a","#gallery_output4 img");
    fn("#gallery_output5 img","#gallery5 a","#gallery_output5 img");
   $(".banner_bottom>ul>li").click(function(){
       $(this).css({"border":"1px solid red"}).siblings().css({"border":"1px solid #FFF"});
       $(".max_collection").children("div").eq($(this).index()).fadeIn().siblings().fadeOut();
   })

})
