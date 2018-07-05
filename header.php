<?php
/**
 * The template for displaying the header.
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<script type="text/javascript" src="//fast.fonts.net/jsapi/806c7e1a-6158-4b9d-87b7-cda280af792e.js"></script>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

	<div id="page" class="ea-l-container">

		<header id="masthead" class="site-header" role="banner">
			<nav id="site-navigation" class="main-navigation" role="navigation">
				<!-- <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1> -->
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
			</nav><!-- #site-navigation -->
		</header><!-- #masthead -->
