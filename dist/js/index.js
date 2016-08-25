/**
 * Created by Lam on 2016/8/23.
 */
bannerMove();
function bannerMove(){
    $(function () {
        //获取banner;
        var $baner = $('.carousel_banner'),
        //获取banner的宽度
        bannerWidht = $('.carousel_banner').width(),
        //获取父容器的宽度
        $carousel = $('.carousel-inner'),

        timer=null;
        show()
        function show(){
            timer = setInterval(function () {
                $carousel.animate({
                    'left': -bannerWidht
                }, 600, function () {
                    //第一张走完后,立马把第一张往后面插入,这样循环下去;
                    $carousel.children("div:first").insertAfter($carousel.children("div:last"));
                    $carousel.children("div:first").addClass('animating').siblings().removeClass('animating');
                    $carousel.css("left", 0);
                })
            }, 8000)
        }
    })
};
