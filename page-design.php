<?php
/**
 * The main template file
 */
$blocks = get_field("blocks");
get_header(); ?>

	<div class="site-content">

		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ): the_post(); ?>

				<article class="ea-c-design-blocks" <?php post_class(); ?>>
					<?php if ($blocks): ?>
						<?php foreach ($blocks as $index => $block): ?>

								<div class="ea-l-column ea-l-span-6-sm ea-c-design-block ea-js-design-block" data-background-color="<?php echo $block['background_color']; ?>" data-text-color="<?php echo $block['text_color']; ?>">
									<a class="ea-l-span-6" href="<?php echo get_permalink($block['work']); ?>">
										<?php echo get_the_post_thumbnail( $block['work'], 'large' ); ?>
									</a>

									<div class="overlay ea-l-span-6 ea-u-mt-1" style="color:<?php echo $block['text_color']; ?>">
										<span class="ea-l-span-3 ea-u-ml-1">Brand Design</span>
										<span class="ea-l-span-3">View Project</span>
									</div>

								</div>


						<?php endforeach; ?>
					<?php endif; ?>
				</article>

			<?php endwhile; ?>
		<?php endif; ?>


	</div>

<?php get_footer();
