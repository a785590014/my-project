$(function(){
    $('.title .icon').on('click', function(){
        $('.gps-none').fadeIn();
    })
    $('.gps-none').on('click', function(){
        $(this).hide();
    })

    $('.x').on('click',function(){
        $('.shade').fadeOut();
    })


    var w_h= $(window).height();
    var y = $(window).scrollTop();
    if(y > w_h){
        $('.returntop').show();
        $('.returntop').on('click',function(){
            $('html,body').stop(true).animate({scrollTop: 0});
        })
    }

    $('.map').on('click', function(){
        $('.shade').fadeIn();
        $('html,body').css({'overflow-x': 'hidden'});
            // 百度地图API功能
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(118.786511,32.029147);
        map.centerAndZoom(point, 15);
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        var opts = {
          position : point,    // 指定文本标注所在的地理位置
          offset   : new BMap.Size(30, -30)    //设置文本偏移量
        }
        var label = new BMap.Label("弓箭坊40号，欣才IT学校", opts);  // 创建文本标注对象
        label.setStyle({
             color : "#000",
             fontSize : "12px",
             height : "20px",
             lineHeight : "20px",
             fontFamily:"微软雅黑"
         });
    map.addOverlay(label);
        $(window).on("resize", function(){
            var loadCount = 1;
            map.addEventListener("tilesloaded", function () {
                if (loadCount == 1) {
                    map.setCenter(point);
                }
                loadCount = loadCount + 1;
            });
        })
    })
    $('.ban-son').fadeIn();
    var y1 = $('.banner').height()/2;
    var y2 = y1 + $('.big-date .right').height()/1.5;
    var y3 = y2*2.5;
    var y4 = y3 + $('.contact').height()*1.3;

    function scro(top){
        $('html,body').stop(true).animate({scrollTop: top},2000);
    }

    $('.gps a').eq(1).on('click', function(){
       scro(y1 * 2);
    })
    $('.gps a').eq(2).on('click', function(){
       scro(y1 * 2);
    })
    $('.gps a').eq(3).on('click', function(){
       scro(y1 * 2);
    })
    $('.gps a').eq(4).on('click', function(){
        scro(y1 * 2 + $('.big-date').height());
    })
    $('.gps a').eq(5).on('click', function(){
        scro(y1 * 2 + $('.big-date').height() + 1200);
    })
    $('.gps a').eq(6).on('click', function(){
        scro(y1 * 2 + $('.big-date').height() + 2000);
    })
    $(window).on('scroll', function(){
        var y = $(window).scrollTop();
        var w_h = $(window).height();
        var w_w = $(window).width();
        if(y > w_h && w_w < 500){
            $('.returntop').show();
            $('.returntop').on('click',function(){
                $('html,body').stop(true).animate({scrollTop: 0});
            })
        }else if(y < w_h){
            $('.returntop').hide();
        }
        $('.gps-none').fadeOut();
        if(y > y1){
            $('.big-date .left h1,p').fadeIn();
            $('.big-date .right .con,ul').fadeIn();
        }
        if(y > y2){
            $('.stu h1').fadeIn(4000);
            $('.stu .text ul,.con').fadeIn(4000);
        }
        if(y > y3){
            $('.res h1').fadeIn(3000);
            $('.res .res-son .arr-per .son .son-font,span').fadeIn(3000);
        }
        if(y > y4){
            $('.contact .left h1').fadeIn();
            $('.contact .right .mar-t').fadeIn();
        }
    })

    $('.back').on('click', function(){
        $("html,body").stop(true).animate({scrollTop: 0}, 1000);
    })
})