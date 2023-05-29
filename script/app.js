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

    // Mobile_menu 토글
      $('.mobile-nav-show').click(function() {
        $('.mobile_menu, .mobile-nav-hide').stop(true).show().animate({'right': '0px'}, 300, 'linear');
      });
    
      $('.mobile-nav-hide').click(function() {
        $('.mobile_menu, .mobile-nav-hide').stop(true).hide().animate({'right': '-340px'}, 300, 'linear');
      });
    // Mobile_submenu 토글
      $('.mobile_menu>li').click(function() {
        $(this).children('.mobile_submenu').stop(true).show().slideDown(1000);
      })
      $('.mobile_submenu').mouseleave(function() {
      $(this).stop(true).hide();
      })
      $(document).click(function(event) {
        if (!$(event.target).closest('.mobile_menu > li').length) {
            $('.mobile_submenu').stop(true).hide();
        }
    });
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
      var index = $(this).index();
      $('.biz_img a').hide().eq(index).stop(true).show();
      $('.biz_nav li').removeClass('on');
      $(this).addClass('on');
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
