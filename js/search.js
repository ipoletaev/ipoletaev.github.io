jQuery(document).ready(function($){

  /////////////////////// Gallery main page logic //////////////////////

  $('.gallery ul').mixItUp({
      controls: {
        enable: false
      },
      callbacks: {
        onMixStart: function(){
          $('.fail-message').fadeOut(200);
        },
        onMixFail: function(){
            $('.fail-message').fadeIn(200);
        }
      }
  });

  //search filtering
  var inputText;
  var $matching = $();

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
  })();

  $(".search input[type='search']").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText = $(".search input[type='search']").val().toLowerCase();
        // Check to see if input field is empty
        if ((inputText.length) > 0) {
            $('.mix').each(function() {
              var $this = $(this);
            
              // add item to be filtered out if input text matches items inside the title   
              if($this.attr('class').toLowerCase().match(inputText)) {
                  $matching = $matching.add(this);
              } else {
                  // removes any previously matched item
                  $matching = $matching.not(this);
              }
            });
            $('.gallery ul').mixItUp('filter', $matching);
        } else {
            // resets the filter to show all item if input is empty
            $('.gallery ul').mixItUp('filter', 'all');
        }
      }, 200 );
  });

  // var tags = document.getElementsByClassName('tag');
  // for (var i = 0; i < tags.length; i++) {
  //   var text = tags[i].innerText.toLowerCase();

  //   tags[i].onclick = function() {
         
  //       var text = this.text.replace(/\s/g, '');
  //       console.log(text);

  //       var $matcher = $();
  //       $('.mix').each(function() {
  //         var $this = $(this);
        
  //         // add item to be filtered out if input text matches items inside the title   
  //         if($this.attr('class').toLowerCase().match(text)) {
  //             $matcher = $matcher.add(this);
  //         } else {
  //             // removes any previously matched item
  //             $matcher = $matcher.not(this);
  //         }
  //       });
       
  //       $('.gallery ul').mixItUp('filter', $matcher);
  //   }

  // }

  //////////////////////////////////////////////////////////////////////
});
