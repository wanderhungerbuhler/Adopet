$(document).ready(function () {
    $('.list-menu li a').click(function (e) {
      $('.list-menu li a.active').removeClass('active');
      $(this).addClass('active');
    });
  });