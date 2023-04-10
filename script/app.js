$(document).ready(function() {
    $('.mainmenu').mouseover(function() {
      $('.submenu, .submenu_bg').stop(true).show().slideDown(1000);
    })
    .mouseout(function() {
      $('.submenu, .submenu_bg').stop(true).slideUp(500, function() {
        $(this).hide();
      });
    });
    
    $('.slide').slick({
      slide: 'li',
      slidesToShow : 1,
      slidesToScroll : 1,
      fade : true,
      arrows: true,
      dots: true,
      infinite: true,
      autoplay : true,
      autospeed: 500,
      pauseOnHover : true,
      prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
      nextArrow : "<button type='button' class='slick-next'>Next</button>",
    });

    $('.biz_nav li').click(function() {
      $('.biz_nav li').click(function() {
      var index = $(this).index();
      $('.biz_img a').eq(index).show().siblings().hide();
      $(this).addClass('on').siblings().removeClass('on');
      });
    });
    
    $('.nation_selection li').click(function() {
      var index = $(this).index();
      $('.nations_spot li').hide().eq(index).stop(true).fadeIn();
    });

    $('.products_slide').slick({
      slide: 'li',
      slidesToShow : 1,
      slidesToScroll : 1,
      dots: true,
      arrows: true,
      prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
      nextArrow : "<button type='button' class='slick-next'>Next</button>",
    });
  
    let num = 0;
    $(".slick-next").on('click', function() {
      num++;
      if(num > 6) {num = 0;}
      $("#section_products .products_slide").css({
        backgroundImage: 'url(images/circle'+ num +'.png)'
      })
    })
    
    $(".slick-prev").on('click', function() {
      num--;
      if(num < 0) {num = 5;}
      $("#section_products .products_slide").css({
        backgroundImage: 'url(images/circle'+ num +'.png)'
      })
    })
 
    $('.news_slide').slick({
      slide: 'li',
      slidesToShow : 3,
      slidesToScroll : 1,
      dots: true,
      infinite: true,
      autoplay : true,
      autospeed: 1000,
    });
  });
