jQuery(document).ready(function ($) {
// When the user scrolls the page
  window.onscroll = function () {
    initProgressBar();
  };

  function initProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
  }
});
