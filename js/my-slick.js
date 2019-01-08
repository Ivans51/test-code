$(document).ready(() => {
  $('.index-box-slick').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToScroll: 1,
  });
  $('.lectura-slick').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
  });
  $('.blog-box').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
  });
});