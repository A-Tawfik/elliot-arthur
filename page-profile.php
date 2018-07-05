<?php
/**
 * The profile page template file
 */

$col1 = get_field("column_1");
$col2 = get_field("column_2");
$col3 = get_field("column_3");

get_header(); ?>

	<div class="site-content">

		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ): the_post(); ?>

				<article class="border-top" <?php post_class(); ?>>

					<div class="ea-l-column ea-l-offset-3-md ea-l-span-6-md">
						<?php the_content(); ?>
					</div>

				</article>

			<?php endwhile; ?>
		<?php endif; ?>

				<article class="border-top" >
					<div class="ea-l-column ea-l-span-6-sm ea-l-offset-3-md ea-l-span-3-md">
						<?php if ($col1): ?>
							<h2 class="ea-c-profile-section-title ea-u-caps"><?php echo $col1['title']; ?></h2>
							<div class="ea-c-profile-section-content">
								<?php foreach ($col1['content'] as $index => $row): ?>
									<div><?php echo wpautop($row['text'], false); ?></div>
								<?php endforeach; ?>
							</div>
						<?php endif; ?>
					</div>
					<div class="ea-l-column ea-l-span-6-sm ea-l-span-3-md">
						<?php if ($col2): ?>
							<h2 class="ea-c-profile-section-title ea-u-caps"><?php echo $col2['title']; ?></h2>
							<div class="ea-c-profile-section-content">
								<?php foreach ($col2['content'] as $index => $row): ?>
									<div><?php echo wpautop($row['text'], false); ?></div>
								<?php endforeach; ?>
							</div>
						<?php endif; ?>
					</div>
					<div class="ea-l-column ea-l-span-6-sm ea-l-span-3-md">
						<?php if ($col3): ?>
							<h2 class="ea-c-profile-section-title ea-u-caps"><?php echo $col3['title']; ?></h2>
							<div class="ea-c-profile-section-content">
								<?php foreach ($col3['content'] as $index => $row): ?>
									<div><?php echo wpautop($row['text'], false); ?></div>
								<?php endforeach; ?>
							</div>
						<?php endif; ?>
					</div>
				</article>

	</div>

<?php get_footer();
