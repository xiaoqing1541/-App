/// <reference path="../ts/ts/typings/globals/angular/index.d.ts" />

angular.module('home.controller', [])

.controller('HomehCtrl', function($scope,$window) {
headerColor();
spike();

        
        
        $scope.myswiper = new Swiper('#myswiper', {
            slidesPerView: 1,
            paginationClickable: true,
            centeredSlides: true,
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
            loop: true,
            pagination: '.swiper-pagination',
            observer: true,
            observeParents: true
        });

        // 头条上下轮播效果
     setTimeout(function() {
             $scope.touSwiper = new Swiper('#touSwiper', {
            autoplay: 2000,
            direction : 'vertical',
            loop: true,
        });
        }, 0);
         // 头条上下轮播数据
        $scope.toutiaoData=['兰博丹尼1 可爱零钱包','维达 卫生纸222 140g卷纸*10卷','桂格11即食燕麦片超值装1478g'];



// 狂购轮播效果
setTimeout(function(){
    $scope.goSwiper = new Swiper('#goSwiper', {
            autoplay: 2000,
            pagination: '.swiper-pagination',
            loop: true,
        });
},200)
// 狂购轮播数据
$scope.goSwiperData=[{src:'./img/slide1.jpg'},{src:'img/slide2.jpg'},{src:'./img/slide3.jpg'}]


// -主题街轮播-->
$scope.footerSlide=new Swiper('#footerSlide',{
autoplay:2000,
pagination:'.swiper-pagination',
loop:true,
});
// 掌上秒杀
function spike()
{
    var  spikeTime=document.getElementById('spikeTime');
           setInterval(function(){
			//设定日期对象
			var  date=new Date(2017,1,16,17,18,19);
			var  dateNow=new Date();
			//倒计时： 未来时间-当前时间
			var   time1=dateNow.getTime();
			var  time2=date.getTime();
			var  absTime=time2-time1;   //时间差
			absTime =Math.floor(absTime/1000);   //转换为秒单位
			 //多少天？？
			 var dats=Math.floor(absTime/86400);
			 absTime=absTime%86400;               //不够一天
			  //多少小时？？
			   var  hours=Math.floor(absTime/3600);
			    absTime=absTime%3600;             //不够一个小时
			   //多少分？？
			  var  minus=Math.floor(absTime/60);
			  //多少秒？？
			  var sec=absTime%60; 
			//  console.log(dats+'天'+hours+'时'+minus+'分'+sec+'秒');
			  spikeTime.innerHTML=dats+'天'+hours+'时'+minus+'分'+sec+'秒';
       },1000);
			
}



 //改变头部颜色和返回顶部
    function headerColor(){
        var oBg = $window.document.getElementById('home-content');
        var oTop = $window.document.getElementById('top');
        var nowOpacity = 0;
        oBg.onscroll = (event)=>{
            // console.log(oBg.scrollTop / 250);
            if(oBg.scrollTop / 250 < 0.85){
                nowOpacity = oBg.scrollTop / 250;
            }
            // console.log(nowOpacity);
            if(oBg.scrollTop > 300){
                oTop.style.opacity = 1;
            }else if(oBg.scrollTop < 300){
                oTop.style.opacity = 0;
            }
            document.getElementById('headerBar-bg').style.opacity = nowOpacity;
            oTop.onclick = function(){
                oBg.scrollTop = 0;
            }
        }
        
    }

});

