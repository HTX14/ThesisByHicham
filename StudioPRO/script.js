jQuery(function($) {
  var pop = $('.map-popup');
  pop.click(function(e) {
    e.stopPropagation();
  });
  
  $('a.marker').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).next('.map-popup').toggleClass('open');
    $(this).parent().siblings().children('.map-popup').removeClass('open');
  });
  
  $(document).click(function() {
    pop.removeClass('open');
  });
  
  pop.each(function() {
    var w = $(window).outerWidth(),
        edge = Math.round( ($(this).offset().left) + ($(this).outerWidth()) );
    if( w < edge ) {
      $(this).addClass('edge');
    }
  });
});


const selectHotspot = (e) => {
  const clickedHotspot = e.target.parentElement;
  const container = clickedHotspot.parentElement;
  
  // only include hotspots within same image to allow one open hotspot per image; change "container" to "document" to allow only one open hotspot for entire page:
  const hotspots = container.querySelectorAll(".lg-hotspot"); 
  hotspots.forEach(hotspot => {
    if (hotspot === clickedHotspot) {
      hotspot.classList.toggle("lg-hotspot--selected");
    } else {
      hotspot.classList.remove("lg-hotspot--selected");
    }
  });
}

(() => {
  const buttons = document.querySelectorAll(".lg-hotspot__button");
  buttons.forEach(button => {
    button.addEventListener("click", selectHotspot);
  });
})();