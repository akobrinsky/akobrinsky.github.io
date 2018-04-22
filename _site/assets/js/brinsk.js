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
