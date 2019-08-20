jQuery(document).ready(function () {
  var footnotelinks = $('.footnoteRef');

  footnotelinks.each(function () {
    var $ref = $(this);
    var targetId = $ref.attr('href');

    new Tooltip($ref, {
      placement: 'bottom',
      title: $(targetId).html(),
      html: true,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
    });
  });
});
