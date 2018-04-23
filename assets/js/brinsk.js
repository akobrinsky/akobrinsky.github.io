(function($) {
  $().ready(function() {
    $('.gala').magnificPopup({
          gallery: {
          enabled: true
        },
      delegate: 'a',
      type: 'image'
        });
      });

  $().ready(function() {
// Default options
var options = {
   animationDuration: 0.5, // in seconds
   filter: 'all', // Initial filter
   callbacks: { 
      onFilteringStart: function() { },
      onFilteringEnd: function() { },
      onShufflingStart: function() { },
      onShufflingEnd: function() { },
      onSortingStart: function() { },
      onSortingEnd: function() { }
   },
   controlsSelector: '', // Selector for custom controls
   delay: 0, // Transition delay in ms
   delayMode: 'progressive', // 'progressive' or 'alternate'
   easing: 'ease-out',
   filterOutCss: { // Filtering out animation
      opacity: 0,
      transform: 'scale(0.5)'
   },
   filterInCss: { // Filtering in animation
      opacity: 1,
      transform: 'scale(1)'
   },
   layout: 'packed', // See layouts
   multifilterLogicalOperator: 'or',
   selector: '.filtr-container',
   setupControls: true // Should be false if controlsSelector is set 
} 
// You can override any of these options and then call...
var filterizd = $('.filtr-container').filterizr(options);
// If you have already instantiated your Filterizr then call...
filterizd.filterizr('setOptions', options);
});

  $().ready(function() {
    var transEffect = Barba.BaseTransition.extend({
      start: function(){
        this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
      },
      fadeInNewcontent: function(nc) {
        nc.hide();
        var _this = this;
        $(this.oldContainer).fadeOut(750).promise().done(() => {
          nc.css('visibility','visible');
          nc.scrollTop();
          nc.fadeIn(250, function(){
            _this.done();
          })
        });
      }
    });

    Barba.Pjax.getTransition = function() {
      return transEffect;
    }
    Barba.Pjax.start();
  });

})(jQuery); // End of use strict
