<?php
/**
 * General page template
 */
$blocks = get_field('work_block');
$agency = get_field('agency');
$team = get_field("design_team");
get_header(); ?>

	<div class="site-content">

		<?php while ( have_posts() ) : the_post(); ?>

			<article class="border-top" <?php post_class(); ?>>
				<div class="ea-l-column ea-l-span-3-sm">
					<h1 class="entry-title"><?php the_title(); ?></h1>
					<h2 class="ea-u-caps">Agency</h2>
					<div><?php echo $agency; ?></div>
					<h2 class="ea-u-caps">Design Team</h2>
					<div><?php foreach ($team as $key => $designer): ?>
							<?php echo $designer['name']; ?><br>
					<?php endforeach; ?></div>

				</div>
				<div class="ea-l-column ea-l-span-9-sm ea-l-span-6-md">
					<?php the_content(); ?>
				</div>

			</article>


			<article class="ea-c-work-blocks">

				<?php foreach ($blocks as $index => $block): ?>
					<div class="ea-c-work-block ea-l-column ea-l-span-<?php echo $block['columns']; ?>-md">
							<?php if ($block['type'] == 'image'): ?>
								<img src="<?php echo $block['image']; ?>" alt="<?php the_title(); ?>">
							<?php else: ?>
								<?php echo wpautop($block['text']); ?>
							<?php endif; ?>
					</div>
				<?php endforeach; ?>

			</article>

		<?php endwhile; ?>
	</div>

<?php get_footer(); ?>
