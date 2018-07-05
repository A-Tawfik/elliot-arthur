/*! WP Starter - v1.0.0
 * http://github.com/ObjectiveSubject/ea-wp-starter
 * Copyright (c) 2018; * Licensed GPLv2+ */

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtCbG9ja3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXZlcnkgcGllY2Ugb2YgVUkgdGhhdCByZXF1aXJlcyBqYXZhc2NyaXB0IHNob3VsZCBoYXZlIGl0cyBvd25cbiAqIGphdmFzY3JpcHQgZmlsZS4gVXNlIHRoaXMgZmlsZSBhcyBhIHRlbXBsYXRlIGZvciBzdHJ1Y3R1cmluZ1xuICogYWxsIEpTIHNvdXJjZSBmaWxlcy5cbiAqXG4gKiB7RG9jdW1lbnQgVGl0bGV9XG4gKiB7RGVzY3JpcHRpb259XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCAkICkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuICAgIHZhciB3b3JrQmxvY2tzID0ge1xuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCgnW2RhdGEtbmFtZSo9XCJ3b3JrX2Jsb2NrXCJdIC5hY2Ytcm93JykuZWFjaChmdW5jdGlvbihpbmRleCwgcm93KXtcblx0XHRcdFx0XHRcdFx0aWYgKCEkKHRoaXMpLmhhc0NsYXNzKFwiYWNmLWNsb25lXCIpKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmNzcyggXCJncmlkLWNvbHVtbi1lbmRcIiwgXCJzcGFuIFwiICsgJCh0aGlzKS5maW5kKCcuZWEtanMtYmxvY2tzLWNvbHVtbnMgaW5wdXQnKS52YWwoKSApO1xuXG5cblxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblxuXG5cdFx0XHRcdFx0XHQkKCdbZGF0YS1uYW1lKj1cIndvcmtfYmxvY2tcIl0gdGJvZHknKS5vbihcImNoYW5nZVwiLCAnLmVhLWpzLWJsb2Nrcy1jb2x1bW5zIGlucHV0JywgZnVuY3Rpb24oZSl7XG5cblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KFwiLmFjZi1yb3dcIikuY3NzKFwiZ3JpZC1jb2x1bW4tZW5kXCIsIFwic3BhbiBcIiArIHRoaXMudmFsdWUpXG5cdFx0XHRcdFx0XHR9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblx0XHRcdGlmICgkKCdbZGF0YS1uYW1lKj1cIndvcmtfYmxvY2tcIl0gdGJvZHknKS5sZW5ndGgpIHtcblx0XHRcdFx0d29ya0Jsb2Nrcy5pbml0KCk7XG5cdFx0XHR9XG4gICAgfSk7XG5cbn0gKSggdGhpcywgalF1ZXJ5ICk7XG4iXX0=
