$(function () { //문서 로드 후 1번만 실행


  //gnb 스크롤

  $(window).scroll(function () {
    curr = $(window).scrollTop();
    target = $('.header').offset().top;
    if (curr >= 74) {
      $('.header .logo,.header').addClass('fix')
    } else {
      $('.header .logo,.header').removeClass('fix')
    }
  })



  $('header .gnb').hover(function () {
    $('.header').addClass('hover')
  }, function () {
    $('.header').removeClass('hover')
  })






  $('.gnb .nav-item').click(function (e) {

    if ($(this).find('.sub-list').length > 0) {
      e.preventDefault();

      if ($(this).find('.sub-list').hasClass('active')) {
        $('.sub-list').removeClass('active');
      } else {
        $('.sub-list').removeClass('active');
        $(this).find('.sub-list').addClass('active');
      }


    }

  })



  // 메인슬라이드
  const mainSlide = new Swiper(".main-slide", {
    loop: true,
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 43,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".fraction",
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return `<span class="curr">${current}</span>
          <i class="bar"></i>
          <span class="total">${total}</span>`;
      }
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  $('.main-slide .autoplay').click(function () {
    if ($(this).hasClass('on')) {
      mainSlide.autoplay.start();
      $(this).attr('aria-label', '자동재생정지')
    } else {
      mainSlide.autoplay.stop();
      $(this).attr('aria-label', '자동재생적용')
    }
    $(this).toggleClass('on')
  });




  const marquee1 = gsap.to('.marquee1 .marquee-group', {
    duration: 10,
    xPercent: -100,
    repeat: -1,
    ease: 'none'
  })
  const marquee2 = gsap.to('.marquee2 .marquee-group', {
    duration: 10,
    xPercent: 100,
    repeat: -1,
    ease: 'none'
  })

  $('.marquee1').hover(function () {
    gsap.to(marquee1, {
      timeScale: 0.2,
      duration: 1
    });
  }, function () {
    gsap.to(marquee1, {
      timeScale: 1,
      duration: 1
    });
  })




  $('.marquee2').hover(function () {
    gsap.to(marquee2, {
      timeScale: 0.2,
      duration: 1
    });
  }, function () {
    gsap.to(marquee2, {
      timeScale: 1,
      duration: 1
    });
  })



});

$(window).on('load', function () {

  $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
      // columnWidth: 100,
      gutter: 120
    }
  });


  $('.inner3 .gnb .nav-item').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active').siblings('.sub-area').slideToggle()
  })


  $('.inner3 .btn-related').click(function (e) {
    e.preventDefault();

    // Toggle .active 클래스
    $(this).toggleClass('active');

    // .related-area의 display 속성 변경
    var $relatedArea = $(this).siblings('.related-area');
    if ($(this).hasClass('active')) {
      $relatedArea.show();
    } else {
      $relatedArea.hide();
    }

    // 다른 클릭 이벤트의 .active 클래스 비활성화
    $('.inner3 .gnb .nav-item').removeClass('active');
    $('.inner3 .gnb .nav-item').siblings('.sub-area').slideUp();
  });





})