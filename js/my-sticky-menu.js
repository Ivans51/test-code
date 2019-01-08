const header = document.getElementById("myHeader")
const main = $('#main')
const stickyStyle = $('.index-box-menu')
const stickyLogoStyle = $('.index-box-menu .index-logo')
const sticky = header.offsetTop

window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky")
    if (window.matchMedia("(max-width: 700px)").matches) {
      stickyStyle.css('padding', '0')
      stickyLogoStyle.css('height', '30px')
    } else {
      main.css('padding-top', '120px')
    }
  } else {
    header.classList.remove("sticky")
    main.css('padding-top', '0')
  }
};

$('.index-box-menu .box-nav-menu > a').click(function () {
  $('.index-box-menu .box-nav-menu > a').removeClass('menu-text-selected')
  $(this).addClass('menu-text-selected')
});