<?php
namespace EA_WP\PostTypes;

/**
 * Set up post types
 *
 * @return void
 */
function setup() {
	$n = function ( $function ) {
		return __NAMESPACE__ . "\\$function";
	};

	// NOTE: Uncomment to activate post type
	add_action( 'init', $n( 'register_work' ) );

}

/**
 * Register the 'my_post_type' post type
 *
 * See https://github.com/johnbillion/extended-cpts for more information
 * on registering post types with the extended-cpts library.
 */
function register_work() {
	register_extended_post_type( 'work', array(
		'menu_icon' 		=> 'dashicons-art',
		'supports' 			=> array( 'title', 'editor', 'excerpt', 'thumbnail' ),
	) );
}
