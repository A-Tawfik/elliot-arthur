/**
 * Every piece of UI that requires javascript should have its own
 * javascript file. Use this file as a template for structuring
 * all JS source files.
 *
 * {Document Title}
 * {Description}
 */

( function( window, $ ) {
	'use strict';
	var document = window.document;

    var designBackground = {

        init: function() {

            $('.ea-js-design-block')
							.mouseenter(function(e){
								$('body').css('background-color', this.dataset.backgroundColor);
								$("body").get(0).style.setProperty("--text-color", this.dataset.textColor);
							})
							.mouseleave(function(){
								$('body').css('background-color', "#FFF");
								$("body").get(0).style.setProperty("--text-color", "#000");
							});

        }

    };

    $(document).ready(function(){
			if ($('.ea-js-design-block').length) {
				designBackground.init();
			}
    });

} )( this, jQuery );
