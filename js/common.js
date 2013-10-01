$(document).ready(function() {
    if ($('.scroll-pane').length > 0) {
        $('.scroll-pane').jScrollPane({
            autoReinitialise: true
        });
    }
    // $('#cycle-1').cycle();
    // $('#cycle-2').cycle();
    function init_cycle() {
        if ($(".js-slider").length > 0) {

            $(".js-slider").each(function(){
                var slider_1 = $(this).find('.js-cycle-1');
                var slider_2 = $(this).find('.js-cycle-2');

                slider_1.cycle({
                    prev: ".js-cycle-prev",
                    next: ".js-cycle-next"
                });
                slider_2.cycle();

                var slideshows = $(this).find('.js-cycle').on('cycle-next cycle-prev', function(e, opts) {
                    // advance the other slideshow
                    slideshows.not(this).cycle('goto', opts.currSlide);
                });

                slider_2.find(".cycle-slide").click(function(){
                    var index = slider_2.data('cycle.API').getSlideIndex(this);
                    slideshows.cycle('goto', index);
                });
            });
        }
    }
    init_cycle();
    

    
    
}); 