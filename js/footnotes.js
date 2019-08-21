jQuery(document).ready(function () {
  var footnotelinks = $('.footnoteRef');
  footnotelinks.each(function () {
    var $ref = $(this);
    var targetId = $ref.attr('href');

    tippy(this, {
      content: '',
      animation: 'fade',
      theme: 'custom',
      distance: 3,
      maxWidth: 400,
      interactive: true,
      interactiveBorder: 10,
      placement: 'bottom',
      ignoreAttributes: true,
      arrow: false,
      zIndex: 0,
      onShow: function (instance) {
        if (instance.popperChildren.content.textContent === '') {
          var rawContent = $(targetId).html();
          var cropIndex = rawContent.indexOf('<a href="#fn');
          instance.setContent(rawContent.substring(0, cropIndex));
        }
      },
    });
  });
});
