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

    var objectName = {

        init: function() {
            // Do something...
        }

    };

    $(document).ready(function(){
        objectName.init();
    });

} )( this, jQuery );

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbi1iYWNrZ3JvdW5kLmpzIiwiZXhhbXBsZS5qcyIsIm1lZGlhLWdyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFdmVyeSBwaWVjZSBvZiBVSSB0aGF0IHJlcXVpcmVzIGphdmFzY3JpcHQgc2hvdWxkIGhhdmUgaXRzIG93blxuICogamF2YXNjcmlwdCBmaWxlLiBVc2UgdGhpcyBmaWxlIGFzIGEgdGVtcGxhdGUgZm9yIHN0cnVjdHVyaW5nXG4gKiBhbGwgSlMgc291cmNlIGZpbGVzLlxuICpcbiAqIHtEb2N1bWVudCBUaXRsZX1cbiAqIHtEZXNjcmlwdGlvbn1cbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csICQgKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4gICAgdmFyIGRlc2lnbkJhY2tncm91bmQgPSB7XG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICQoJy5lYS1qcy1kZXNpZ24tYmxvY2snKVxuXHRcdFx0XHRcdFx0XHQubW91c2VlbnRlcihmdW5jdGlvbihlKXtcblx0XHRcdFx0XHRcdFx0XHQkKCdib2R5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5kYXRhc2V0LmJhY2tncm91bmRDb2xvcik7XG5cdFx0XHRcdFx0XHRcdFx0JChcImJvZHlcIikuZ2V0KDApLnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXh0LWNvbG9yXCIsIHRoaXMuZGF0YXNldC50ZXh0Q29sb3IpO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQubW91c2VsZWF2ZShmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHRcdCQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBcIiNGRkZcIik7XG5cdFx0XHRcdFx0XHRcdFx0JChcImJvZHlcIikuZ2V0KDApLnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXh0LWNvbG9yXCIsIFwiIzAwMFwiKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoJCgnLmVhLWpzLWRlc2lnbi1ibG9jaycpLmxlbmd0aCkge1xuXHRcdFx0XHRkZXNpZ25CYWNrZ3JvdW5kLmluaXQoKTtcblx0XHRcdH1cbiAgICB9KTtcblxufSApKCB0aGlzLCBqUXVlcnkgKTtcbiIsIi8qKlxuICogRXZlcnkgcGllY2Ugb2YgVUkgdGhhdCByZXF1aXJlcyBqYXZhc2NyaXB0IHNob3VsZCBoYXZlIGl0cyBvd25cbiAqIGphdmFzY3JpcHQgZmlsZS4gVXNlIHRoaXMgZmlsZSBhcyBhIHRlbXBsYXRlIGZvciBzdHJ1Y3R1cmluZ1xuICogYWxsIEpTIHNvdXJjZSBmaWxlcy5cbiAqXG4gKiB7RG9jdW1lbnQgVGl0bGV9XG4gKiB7RGVzY3JpcHRpb259XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCAkICkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuICAgIHZhciBvYmplY3ROYW1lID0ge1xuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nLi4uXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICBvYmplY3ROYW1lLmluaXQoKTtcbiAgICB9KTtcblxufSApKCB0aGlzLCBqUXVlcnkgKTtcbiIsIi8qKlxuICogRXZlcnkgcGllY2Ugb2YgVUkgdGhhdCByZXF1aXJlcyBqYXZhc2NyaXB0IHNob3VsZCBoYXZlIGl0cyBvd25cbiAqIGphdmFzY3JpcHQgZmlsZS4gVXNlIHRoaXMgZmlsZSBhcyBhIHRlbXBsYXRlIGZvciBzdHJ1Y3R1cmluZ1xuICogYWxsIEpTIHNvdXJjZSBmaWxlcy5cbiAqXG4gKiB7RG9jdW1lbnQgVGl0bGV9XG4gKiB7RGVzY3JpcHRpb259XG4gKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCAkICkge1xuXHQndXNlIHN0cmljdCc7XG5cdHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuICAgIHZhciBzaG93R3JpZCA9IHtcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIubWVkaWEtc2l6ZVwiKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0XHQkKFwiI3BhZ2VcIikudG9nZ2xlQ2xhc3MoXCJlYS1sLXZpc3VhbC1ncmlkXCIpO1xuXHRcdFx0XHRcdFx0fSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCQoXCIubWVkaWEtc2l6ZVwiKS5sZW5ndGgpIHtcblx0XHRcdFx0c2hvd0dyaWQuaW5pdCgpO1xuXHRcdFx0fVxuXG5cblxuICAgIH0pO1xuXG59ICkoIHRoaXMsIGpRdWVyeSApO1xuIl19
