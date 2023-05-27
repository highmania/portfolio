$(document).ready(function() {
    //메인메뉴 슬라이드 다운
    $('.mainmenu').mouseover(function() {
      $('.submenu, .submenu_bg').stop(true).show().slideDown(1000);
    })
    .mouseout(function() {
      $('.submenu, .submenu_bg').stop(true).slideUp(500, function() {
        $(this).hide();
      });
    });

    // Mobile nav 토글
    

    //메인 슬라이드
    $('.slide').slick({
      slide: '.slideimg',
      slidesToShow : 1,
      slidesToScroll : 1,
      fade : true,
      dots: true,
      infinite: true,
      autoplay : true,
      autoplaySpeed: 5000,
      pauseOnHover : true,
    });
    
    
    //사업분야 버튼 클릭 클래스on.off
    $('.biz_nav li').click(function() {
      var nav_btn = $(this).index();
      $('.biz_img a').eq(nav_btn).show().siblings().hide();
      $(this).addClass('on').siblings().removeClass('on');
      });
    

    //글로벌 진출 현황 국가별 클릭, 호출
    $('.nation_selection li').click(function() {
      var index = $(this).index();
      $('.nations_spot li').hide().eq(index).stop(true).fadeToggle(700);
    });

    //대표제품 슬라이드
    $('.products_slide').slick({
      slide: 'li',
      slidesToShow : 1,
      slidesToScroll : 1,
      dots: true,
      arrows: true,
      infinite: true,
      autoplay : true,
      autoplaySpeed: 10000,
    });
    
    //보도자료/소식 슬라이드
    $('.news_slide').slick({
      slide: 'li',
      slidesToShow : 3,
      slidesToScroll : 1,
      dots: true,
      infinite: true,
      autoplay : true,
      autospeed: 1000,
      responsive: [
        {
          breakpoint: 1200, 
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });
