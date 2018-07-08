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
						<?php foreach ($blocks as $index => $block):
							$post = $block['work'];
							$design_type = get_field("design_type", $post->ID);

							?>
								<div class="ea-l-column ea-l-span-6-sm ea-c-design-block ea-js-design-block" data-background-color="<?php echo $block['background_color']; ?>" data-text-color="<?php echo $block['text_color']; ?>">
									<?php if ($block['has_page']): ?>
										<a class="ea-l-span-6" href="<?php echo get_permalink($block['work']); ?>">
											<?php echo get_the_post_thumbnail( $block['work'], 'large' ); ?>
										</a>
									<?php else: ?>
										<span class="ea-l-span-6">
											<?php echo get_the_post_thumbnail( $block['work'], 'large' ); ?>
										</span>
									<?php endif; ?>

									<div class="overlay ea-l-span-6 ea-u-mt-1" style="color:<?php echo $block['text_color']; ?>">
										<span class="ea-l-span-3 ea-u-ml-1"><?php echo $design_type; ?></span>
										<span class="ea-l-span-3"><?php echo $block['has_page']? "View Project" : "Coming Soon" ; ?></span>
									</div>

								</div>


						<?php endforeach; ?>
					<?php endif; ?>
				</article>

			<?php endwhile; ?>
		<?php endif; ?>


	</div>

<?php get_footer();
