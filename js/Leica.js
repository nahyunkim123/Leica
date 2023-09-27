
$(window).scroll(function(){
  if($(document).scrollTop() > 0) {
      $('.header').addClass('scrolled');
  } else {
      $('.header').removeClass('scrolled');
  }
});

    $('.slick-autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4800,
      dots: true,
      appendDots: $('.slider-dots-box'),
	    dotsClass: 'slider-dots',
    });

  // dots
  $('.slick-autoplay').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slider-dots-box button').html('');
  }).trigger('beforeChange');
  
  // On before slide change
  $('.slick-autoplay').on('afterChange', function(event, slick, currentSlide){
    $('.slider-dots-box button').html('');
     $('.slider-dots-box .slick-active button')
       .html(`<svg class="progress-svg" width="40" height="40">
      <g transform="translate(20,20)">
        <circle class="circle-go" r="19" cx="0" cy="0"></circle>
      </g>
      </svg>`);
  }).trigger('afterChange');
  
    
// 하이라이트

    $('.highlight .high-wrap .slick').slick({
      
      centerMode: true,
      centerPadding: '80px',
      slidesToShow: 3,
      arrows : true,
      speed : 1000,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      if (condition) {
        
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

//  story

    (function($) {
      $.fn.cascadeSlider = function(opt) {
        var $this = this,
          itemClass = opt.itemClass || 'cascade-slider_item',
          arrowClass = opt.arrowClass || 'cascade-slider_arrow',
          $item = $this.find('.' + itemClass),
          $arrow = $this.find('.' + arrowClass),
          itemCount = $item.length;
    
        var defaultIndex = 0;
    
        changeIndex(defaultIndex);
    
        $arrow.on('click', function() {
          var action = $(this).data('action'),
            nowIndex = $item.index($this.find('.now'));
    
          if(action == 'next') {
            if(nowIndex == itemCount - 1) {
              changeIndex(0);
            } else {
              changeIndex(nowIndex + 1);
            }
          } else if (action == 'prev') {
            if(nowIndex == 0) {
              changeIndex(itemCount - 1);
            } else {
              changeIndex(nowIndex - 1);
            }
          }
    
          $('.cascade-slider_dot').removeClass('cur');
          //$('.cascade-slider_dot').next().addClass('cur');
        });
        
        // add data attributes
        for (var i = 0; i < itemCount; i++) {
          $('.cascade-slider_item').each(function(i) {
            $(this).attr('data-slide-number', [i]);
          });
        }
        
        // dots


        $('.cascade-slider_dot').bind('click', function(){

          var index = $(this).index();
    
          $('.cascade-slider_item').removeClass('now prev next');
          var slide = $('.cascade-slider_slides').find('[data-slide-number=' + index + ']');
          slide.prev().addClass('next');
          slide.addClass('now');
          slide.next().addClass('prev');
    
          if(slide.next().length == 0) {
            $('.cascade-slider_item:first-child').addClass('prev');
          }
    
          if(slide.prev().length == 0) {
            $('.cascade-slider_item:last-child').addClass('prev');
          }
        });
    
        function changeIndex(nowIndex) {
          // clern all class
          $this.find('.now').removeClass('now');
          $this.find('.next').removeClass('next');
          $this.find('.prev').removeClass('prev');
          if(nowIndex == itemCount -1){
            $item.eq(0).addClass('next');
          }
          if(nowIndex == 0) {
            $item.eq(itemCount -1).addClass('prev');
          }
    
          $item.each(function(index) {
            if(index == nowIndex) {
              $item.eq(index).addClass('now');
            }
            if(index == nowIndex + 1 ) {
              $item.eq(index).addClass('prev');
            }
            if(index == nowIndex - 1 ) {
              $item.eq(index).addClass('next');
            }
          });
        }
      };
    })(jQuery);
    
    $('#cascade-slider').cascadeSlider({
      itemClass: 'cascade-slider_item',
      arrowClass: 'cascade-slider_arrow'
    });



    
// blog
    $('.blog .blog-wrap .slick').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      arrow: true,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });


function email_check( email ) {    
      var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      return (email != '' && email != 'undefined' && regex.test(email)); 
  }
  
  $("input[type=email]").blur(function(){
    var email = $(this).val();
    if( email == '' || email == 'undefined') return;
    if(! email_check(email) ) {
      $(".result-email").text(' Email address is not valid.');
      $(this).focus();
      return false;
    }else {
    $(".result-email").text('');
    document.querySelector("#error_mail::after").style.display = "block";
    }
  });


  document.addEventListener("scroll",function(){
    let pos = window.scrollY
    console.log(pos);

    if(pos = 4551){

    }
  })


// Top btn 

var scrollToTopBtn = document.querySelector(".top-btn")
var rootElement = document.documentElement
const $btn = document.querySelector ('.news .top-btn2')

function handleScroll() {

  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.08) {
    
    scrollToTopBtn.classList.add("showBtn")
  } else {
    
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
$btn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

const $aside = document.querySelector ('.top-btn')

document.addEventListener("scroll",function(){
  let pos = window.scrollY;
 
  console.log(pos);
  if(pos >= 5447){

          $aside.classList.add("on")
          $btn.classList.add("on")
          
  }else{
       
         $aside.classList.remove("on")
         $btn.classList.remove("on")
      }
  }
)