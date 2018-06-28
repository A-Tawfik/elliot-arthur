<?php

/**
 * Functions and definitions
 */

// Useful global constants
define( 'EA_WP_VERSION',      '0.1.0' );
define( 'EA_WP_URL',          get_stylesheet_directory_uri() );
define( 'EA_WP_TEMPLATE_URL', get_template_directory_uri() );
//define( 'EA_WP_PATH',         get_template_directory() . '/' );
define( 'EA_WP_PATH',         dirname( __FILE__ ) . '/' );
define( 'EA_WP_INC',          EA_WP_PATH . 'includes/' );
define( 'EA_WP_ASSETS',       EA_WP_TEMPLATE_URL . '/assets/' );

// Include compartmentalized functions
require_once EA_WP_INC . 'core.php';

require_once EA_WP_INC . 'cmb2.addons.php';
require_once EA_WP_INC . 'comments.php';
require_once EA_WP_INC . 'metaboxes.php';
require_once EA_WP_INC . 'post-types.php';
require_once EA_WP_INC . 'shortcodes.php';
require_once EA_WP_INC . 'taxonomies.php';
require_once EA_WP_INC . 'template-tags.php';

// Include lib classes
include( EA_WP_INC . 'libraries/extended-cpts.php' );
include( EA_WP_INC . 'libraries/extended-taxos.php' );
include( EA_WP_INC . 'libraries/cmb2/init.php' );
include( EA_WP_INC . 'libraries/cmb2-attached-posts/cmb2-attached-posts-field.php' );
include( EA_WP_INC . 'libraries/cmb2-post-search-field/cmb2_post_search_field.php' );

// Run the setup functions
EA_WP\Core\setup();
EA_WP\Comments\setup();
EA_WP\Shortcodes\setup();
EA_WP\PostTypes\setup();
EA_WP\Taxonomies\setup();
