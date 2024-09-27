$(".sub,.sub_bg").hide();
$(".menu>li").mouseover(function(){
 $(".sub,.sub_bg").show();
})
$(".menu>li").mouseout(function(){
 $(".sub,.sub_bg").hide();
})

$(".m_nav").hide();
$(".m_btn").click(function(){
 $(".m_nav").show();
 $(".m_menu_wrap").animate({right:0},500)
})
$(".m_close").click(function(){
 $(".m_nav").fadeOut(500);
 $(".m_menu_wrap").animate({right:'-310px'},500)
})

$(".m_nav_bg").click(function(){
 $(".m_nav").fadeOut(500);
 $(".m_menu_wrap").animate({right:'-310px'},500)
})

$(".m_sub").hide();
$(".m_menu>li").click(function(){
 $(this).children(".m_sub").slideToggle(500);
 $(this).siblings().children(".m_sub").slideUp(500);
 $(this).toggleClass("active")
 $(this).siblings().removeClass("active")
})
/* toggle 한가지 동작으로 두가지 행동 */


const main=new Swiper('.main .swiper',{

navigation: {
 nextEl:".main_next",
 prevEl:".main_prev",
},
loop:true, /* 슬라이드 순환 */
autoplay:{delay:2500,disableOnInteraction:false},
pagination:{el:'.main .swiper-pagination', clickable:true},


}) /* main swiper end */

$(".main_stop").click(function(){
 $(".main_stop").hide();
 $(".main_go").show();
 main.autoplay.pause();
})

$(".main_go").click(function(){
 $(".main_stop").show();
 $(".main_go").hide();
 main.autoplay.start();
})


/* box1 slide */

const box1=new Swiper('.box1>.swiper',{
 loop:true,
autoplay:{delay:2000,disableOnInteraction: false},
navigation:{
 prevEl:'.box1_prev',
 nextEl:'.box1_next'
},
pagination:{el:'.box1 .swiper-pagination',
 clickable:true,
 type:'fraction', /* 숫자로 보여지는 타입 */
}
})


$(".box1_pause").click(function(){
 $(".box1_pause").hide();
 $(".box1_play").show();
 box1.autoplay.pause();
})

$(".box1_play").click(function(){
 $(".box1_pause").show();
 $(".box1_play").hide();
 box1.autoplay.start();
})


$(".notice2").hide();
$(".tab_title>li:nth-child(1)").click(function(){
 $(this).addClass("tab_active");
 $(this).siblings().removeClass("tab_active");
 $(".notice1").show();
 $(".notice2").hide();
})

$(".tab_title>li:nth-child(2)").click(function(){
 $(this).addClass("tab_active");
 $(this).siblings().removeClass("tab_active");
 $(".notice2").show();
 $(".notice1").hide();
})
