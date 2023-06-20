function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

function scroll_cb() {
  var scroll = $(window).scrollTop();
  var addClassOnScroll = function () {
    var windowTop = $(window).scrollTop();
    $("section[id]").each(function (index, elem) {
      var offsetTop = $(elem).offset().top;
      var outerHeight = $(this).outerHeight(true);

      if (windowTop > offsetTop - 50 && windowTop < offsetTop + outerHeight) {
        var elemId = $(elem).attr("id");
        $(".progress ul li a.current").removeClass("current");
        $(".progress ul li a[href='#" + elemId + "']").addClass("current");
      }
    });
  };
  addClassOnScroll();
}

$(document).ready(function () {
   window.addEventListener("scroll", throttle(scroll_cb, 100));
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var doc = $(document).height();
    var win = $(window).height();
    var value =
      (scroll / (doc - win)) *
      90; /* this value will varie in function of your page height*/
    $("ul .sideline").css("height", value + "%");
  });
  $("a.clickable").click(function () {
    $("a.current").removeClass("current");
    $(this).addClass("current");
  });
});