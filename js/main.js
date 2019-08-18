jQuery(document).ready(function ($) {

  ///////////////////// Auto-hiding Navigation Bar /////////////////////

  var mainHeader = $('.header'),
    headerHeight = mainHeader.height();

  //set scrolling variables
  var scrolling = false,
    previousTop = 0,
    currentTop = 0,
    scrollDelta = 10,
    scrollOffset = 150;

  mainHeader.on('click', '.nav-trigger', function (event) {
    // open primary navigation on mobile
    event.preventDefault();
    mainHeader.toggleClass('nav-open');
  });

  $(window).on('scroll', function () {
    if (!scrolling) {
      scrolling = true;
      (!window.requestAnimationFrame)
        ? setTimeout(autoHideHeader, 250)
        : requestAnimationFrame(autoHideHeader);
    }
  });

  $(window).on('resize', function () {
    headerHeight = mainHeader.height();
  });

  function autoHideHeader() {
    var currentTop = $(window).scrollTop();
    checkSimpleNavigation(currentTop);
    previousTop = currentTop;
    scrolling = false;
  }

  function checkSimpleNavigation(currentTop) {
    //there's no secondary nav or secondary nav is below primary nav
    if (previousTop - currentTop > scrollDelta) {
      //if scrolling up...
      mainHeader.removeClass('is-hidden');
    } else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
      //if scrolling down...
      mainHeader.addClass('is-hidden');
    }
  }

  //////////////////////////////////////////////////////////////////////

  window.addEventListener('hashchange', function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  });

  // pass tag name for filter from a single post
  $('.post-tags .tag').on('click', function () {
    var tag = '.' + $(this).text();
    sessionStorage.setItem('passedFromSingle', tag);
  });

});

window.addEventListener('hashchange', function () {
  window.scrollTo(window.scrollX, window.scrollY - 100);
});
