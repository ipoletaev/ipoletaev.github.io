jQuery(document).ready(function ($) {
  /////////////////////// Gallery main page logic //////////////////////
  var $mixitupContainer = $('.gallery-list');
  var $failContainer = $('.fail-message');
  var mixer = mixitup($mixitupContainer, {
    controls: {
      enable: false,
    },
    animation: {
      animateResizeTargets: true,
      effects: 'fade scale stagger(50ms)', // Set a 'stagger' effect for the loading animation
    },
    load: {
      filter: 'none', // Ensure all targets start from hidden (i.e. display: none;)
    },
    callbacks: {
      onMixStart: function () {
        $('.footer').hide();
        $failContainer.fadeOut(200);
      },
      onMixEnd: function (state) {
        if (state.totalMatching === 0) {
          $failContainer.fadeIn(200);
        }
        $('.footer').fadeIn(200);
      },
      onMixFail: function () {
        $failContainer.fadeIn(200);
      },
    },
  });

  // trigger filter by tag
  $('.tags button').on('click', function (e) {
    e.preventDefault();
    var tag = $(this).text();
    mixer.filter('.' + tag, false).then(function () {
      var body = $('html, body');
      body.stop().animate({ scrollTop: 0 }, 600, 'swing');
    });
  });

  // Add a class to the container to remove 'visibility: hidden;' from targets. This
  // prevents any flickr of content before the page's JavaScript has loaded.
  $mixitupContainer.addClass('mixitup-ready');
  var passedFromSingle = sessionStorage.getItem('passedFromSingle');
  var filter = passedFromSingle ? passedFromSingle : 'all';

  // Initial load
  mixer.filter(filter)
    .then(function () {
      $('.footer').show();
      if (sessionStorage.length) {
        sessionStorage.clear();
      }
      // Remove the stagger effect for any subsequent operations
      mixer.configure({
        animation: {
          effects: 'fade scale',
        },
      });
    });

  //search filtering
  var inputText;
  var $matching = $();

  var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  // prevent search form from submitting and default browser reload
  $('.search form').submit(function (event) {
    event.preventDefault();
  });

  var $searchInput = $('.search .search-input');

  $searchInput.keyup(function () {
    // Delay function invoked to make sure user stopped typing
    delay(function () {
      inputText = $searchInput.val().toLowerCase();
      // Check to see if input field is empty
      if ((inputText.length) > 0) {
        $('.mix').each(function () {
          var $this = $(this);

          // add item to be filtered out if input text matches items inside the title
          if ($this.attr('class').toLowerCase().match(inputText)) {
            $matching = $matching.add(this);
          } else {
            // removes any previously matched item
            $matching = $matching.not(this);
          }
        });
        mixer.filter($matching);
      } else {
        // resets the filter to show all item if input is empty
        mixer.show();
      }
    }, 200);
  });
});
