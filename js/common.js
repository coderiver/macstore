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
                var prev_nav = $(this).find('.js-cycle-prev');
                var next_nav = $(this).find('.js-cycle-next');
                slider_1.cycle({
                    prev: prev_nav,
                    next: next_nav
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

    function init_gallery() {
        if ($(".js-gallery").length > 0) {

            $(".js-gallery").each(function(){
                var slider_1 = $(this).find('.js-cycle-1');
                var slider_2 = $(this).find('.js-cycle-2');
                var prev_nav = $(this).find('.js-cycle-prev');
                var next_nav = $(this).find('.js-cycle-next');
                slider_1.cycle({
                    prev: prev_nav,
                    next: next_nav
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
    init_gallery();

    function select_list() {
        $(".js-select").click(function(){
            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
                $(this).find(".select__list").hide();
            }
            else {
                $(".js-select").removeClass("is-active");
                $(this).addClass("is-active");
                $(".select__list").hide();
                $(this).find(".select__list").slideDown("fast");
            }
        });
        $(".js-select .select__list li").click(function(){
            var text = $(this).text();
            var id = $(this).attr("data-id");
            $(this).parent().parent().find("input").val(id);
            $(this).parent().parent().find(".select__text").text(text);
        });
    }
    select_list();

    function accordion() {
        $(".js-accord-key").click(function(){
            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
                $(this).parent().find(".js-accord-list").slideUp("fast");
            }
            else {
                $(".js-accord-key").removeClass("is-active");
                $(this).addClass("is-active");
                $(".js-accord-list").slideUp("fast");
                $(this).parent().find(".js-accord-list").slideDown("fast");
            }
        });
    }
    accordion();
    
    function tabs() {
        $(".js-tab-link").first().addClass("is-active");
        $(".js-tab-cont1").show();
        $(".js-tab-link").click(function(){
            if ($(this).hasClass("is-active")) {

            }
            else {
                $(".js-tab-link").removeClass("is-active");
                $(this).addClass("is-active");
                var index = $(this).attr("data-tab");
                $(".js-tab-cont").hide();
                $("."+index).show();
            }
        });
    }
    tabs();

}); 