$('.carousel').carousel ({
  interval: 2000
})

function menuNav() {
    $('.menu-pc').toggleClass('menu-pc-hide');
}

$('.burgers').click(function() {
  $('.snacks a').removeClass('active-menu');
  $('#snack').css({
    'display': 'none'
  });

  $('.beverages a').removeClass('active-menu');
  $('#beverage').css({
    'display': 'none'
  });

  $('.burgers a').addClass('active-menu');
  $('#burger').css({
    'display': 'block'
  });

  event.preventDefault();
});

$('.snacks').click(function() {
  $('.burgers a').removeClass('active-menu');
  $('#burger').css({
    'display': 'none'
  });

  $('.beverages a').removeClass('active-menu');
  $('#beverage').css({
    'display': 'none'
  });

  $('.snacks a').addClass('active-menu');
  $('#snack').css({
    'display': 'block'
  });

  event.preventDefault();
});


$('.beverages').click(function() {
  $('.burgers a').removeClass('active-menu');
  $('#burger').css({
    'display': 'none'
  });

  $('.snacks a').removeClass('active-menu');
  $('#snack').css({
    'display': 'none'
  });

  $('.beverages a').addClass('active-menu');
  $('#beverage').css({
    'display': 'block'
  });

  event.preventDefault();
});

$('.back-top').click(function () {
  $('html').animate({scrollTop: 0}, 3000);
});

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav .container .row .col-lg-9 .menu-pc ul li');

window.addEventListener('scroll', ()=> {
  let current = '';

  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  })
  navLi.forEach(li => {
    li.classList.remove('active-nav');
    if (li.classList.contains(current)) {
      li.classList.add('active-nav')
    }
  })
})