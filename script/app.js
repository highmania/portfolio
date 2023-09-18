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

  //스크롤 이벤트
  $(document).on("scroll", function() {
    let scrollTop = $(window).scrollTop();
      if (scrollTop > 50) {
        $("header, .submenu_bg").addClass("bg_active");
      } else {
        $("header, .submenu_bg").removeClass("bg_active");
      }
    });

  // Mobile_menu 토글
    $('.mobile-nav-show').click(function() {
      $('.mobile_menu, .mobile-nav-hide, .mobile_nav_bg').stop(true).show().animate({'right': '0px'}, 300, 'linear');
    });
  
    $('.mobile-nav-hide').click(function() {
      $('.mobile_menu, .mobile-nav-hide, .mobile_nav_bg').stop(true).hide().animate({'right': '-340px'}, 300, 'linear');
    });

  // Mobile_submenu 토글
  $('.mobile_menu > li').click(function() {
    var submenu = $(this).children('.mobile_submenu');
    if (submenu.is(':hidden')) {
        $('.mobile_submenu').hide();
        submenu.stop(true).slideDown(500);
    } else {
        submenu.stop(true).hide();
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
    autoplaySpeed: 3500,
    pauseOnHover : true,
  });
  
  //사업분야 버튼 클릭 클래스on.off
  $('.biz_nav li').click(function() {
    var btn_biz = $(this).index();
    $('.biz_img a').hide().eq(btn_biz).stop(true).show();
    $('.biz_nav li').removeClass('on');
    $(this).addClass('on');
  });

  //글로벌 진출 현황 국가별 클릭, 호출
  $('.nation_selection li').click(function () {
    var btn_nation = $(this).index();
    $('.nations_spot li').hide().eq(btn_nation).stop(true).fadeToggle(700);
    $('.nation_selection li').removeClass('active');
    $(this).addClass('active');
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
    slidesToShow : 5,
    slidesToScroll : 1,
    dots: true,
    infinite: true,
    autoplay : true,
    autospeed: 1000,
    responsive: [
      {
        breakpoint: 1400, 
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900, 
        settings: {
          slidesToShow: 1,
        },
      }
    ]
  });
  // Top버튼 보이기 | 숨기기 
  $(window).scroll(function() { 
      if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여짐니다. 
          $('#toTop').fadeIn(); 
          $('#toTop').css('left', $('#sidebar').offset().left); // #sidebar left:0 죄표 
      } else { 
          $('#toTop').fadeOut(); 
      } 
  }); 
  // 버튼 클릭시 
  $("#toTop").click(function() { 
      $('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
      }, 400); // 속도 400 return false; 
  }); 
  
  //gsap 세팅
  gsap.utils.toArray(".show").forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        start: "top 80%",
        end: "bottom 20%",
        markers: false,
        onEnter: () => {animate(item)}, 
    });
    item.style.opacity = "0";
  });

  const animate = (item) => {
    let x = 0;
    let y = 0;
    if(item.classList.contains("show_left")){
        x = -100;
        y = 0;
    } else if(item.classList.contains("show_bottom")){
        x = 0;
        y = 100;
    } else if(item.classList.contains("show_top")){
        x = 0;
        y = -100;
    } else {
        x = 100;
        y = 0;
    }

    gsap.fromTo(item, 
        {autoAlpha: 0, x: x, y: y}, 
        {autoAlpha: 1, x: 0, y: 0, duration: 2, overwrite: "auto", ease: "expo"}
    );
  }


});
