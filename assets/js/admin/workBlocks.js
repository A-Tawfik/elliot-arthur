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

    var workBlocks = {

        init: function() {
						$('[data-name*="work_block"] .acf-row').each(function(index, row){
							if (!$(this).hasClass("acf-clone")) {

								$(this).css( "grid-column-end", "span " + $(this).find('.ea-js-blocks-columns input').val() );



							}
						});


						$('[data-name*="work_block"] tbody').on("change", '.ea-js-blocks-columns input', function(e){

							$(this).closest(".acf-row").css("grid-column-end", "span " + this.value)
						});

        }

    };

    $(document).ready(function(){
			if ($('[data-name*="work_block"] tbody').length) {
				workBlocks.init();
			}
    });

} )( this, jQuery );
