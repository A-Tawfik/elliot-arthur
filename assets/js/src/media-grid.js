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

    var showGrid = {

        init: function() {
            $(".media-size").click(function(){
							$("#page").toggleClass("ea-l-visual-grid");
						});
        }

    };

    $(document).ready(function(){
			if ($(".media-size").length) {
				showGrid.init();
			}



    });

} )( this, jQuery );
