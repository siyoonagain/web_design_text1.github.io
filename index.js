$(document).ready(function () {
  $(".gnb").mouseover(function () {
    $(this).addClass("active");
  });
  $(".gnb").mouseout(function () {
    $(this).removeClass("active");
  });
  $(".gnb li").mouseover(function () {
    $(this).addClass("active");
  });
  $(".gnb li").mouseout(function () {
    $(this).removeClass("active");
  });
  $(".gnb li li").mouseover(function () {
    $(this).addClass("active");
  });
  $(".gnb li li").mouseout(function () {
    $(this).removeClass("active");
  });

  $(".title span:first-of-type a").click(function (e) {
    e.preventDefault();
    $(".title span:last-of-type").removeClass("active");
    $(".title span:first-of-type").addClass("active");
    $(".gallery").removeClass("active");
    $(".info").addClass("active");
  });
  $(".title span:last-of-type a").click(function (e) {
    e.preventDefault();
    $(".title span:first-of-type").removeClass("active");
    $(".title span:last-of-type").addClass("active");
    $(".info").removeClass("active");
    $(".gallery").addClass("active");
  });
  $(".info > p a").click(function (e) {
    e.preventDefault();
    $(".pop").addClass("active");
  });
  $(".close").click(function (e) {
    e.preventDefault();
    $(".pop").removeClass("active");
  });
  $(".pop span:first-of-type a").click(function (e) {
    e.preventDefault();
  });
  $(".gallery a").click(function (e) {
    e.preventDefault();
  });

  let count = 0;
  function slide() {
    if (count < 2) {
      count++;
      $(".slides").css("transform", "translateY(" + count * -100 + "%)");
    } else if ((count = 2)) {
      count = -1;
    }
  }
  setInterval(slide, 2000);
});
