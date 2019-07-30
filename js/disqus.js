var disqus_shortname = 'iepoletaev';
(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = 'https://iepoletaev.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

(function () {
  var s = document.createElement('script'); s.async = true;
  s.src = 'https://iepoletaev.disqus.com/count.js';
  (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());

jQuery(document).ready(function() {
  jQuery("").inlineDisqussions({
    identifier: 'disqussion',
    displayCount: true,
    highlighted: false,
    position: 'right',
    background: 'white',
    maxWidth: 500,
  });
});
