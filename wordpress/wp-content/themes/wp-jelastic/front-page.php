<?php /* Template Name: Home Page */ get_header(); ?>

  <div class="container">

    <h1 class="site--title">Full-Featured PaaS on Maxihost Infrastructure in Brazil</h1>

    <?php if (have_posts()): while (have_posts()) : the_post(); ?>
      <article>

        <?php  $image = get_field('image'); if( !empty($image) ): ?>
          <div class="main-slider">
            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
          </div><!-- /.main-slider -->
        <?php endif; ?>

        <div class="content-container">
          <?php the_content(); ?>
        </div><!-- /.content-container -->

        <div class="price">
          <h2 class="price--title"><?php the_field('pricing_title'); ?></h2>

          <?php if( have_rows('pricing_variants') ): ?>
            <div class="price--table">
              <?php while( have_rows('pricing_variants') ): the_row(); ?>

                <div class="price--table_item">
                  <h6 class="table-item--title"><?php the_sub_field('tiltle'); ?></h6>
                  <div class="table-item--price" data-cost="<?php the_sub_field('cost'); ?>">
                    $<?php the_sub_field('cost'); ?>
                    <span>per server / month</span>
                  </div><!-- /.table-item--price -->
                  <div class="table-item--descr">
                    <h6>Maxihost Managed Servers</h6>
                    <?php if( have_rows('configs') ): ?>
                      <ul>
                        <?php  while( have_rows('configs') ): the_row(); ?>
                        <li><?php the_sub_field('option'); ?></li>
                      <?php endwhile; ?>
                      </ul>
                    <?php endif; //if( get_sub_field('configs') ): ?>
                  </div><!-- /.table-item--descr -->
                </div><!-- /.price--table_item -->

              <?php endwhile; // while( has_sub_field('to-do_lists') ): ?>
            </div><!-- /.price--table -->
          <?php endif; // if( get_field('to-do_lists') ): ?>

        </div><!-- /.price -->

      </article>
    <?php endwhile; endif; ?>

    <aside class="sidebar" role="complementary">
      <div class="widget widget--getyourappliance">
        <span class="widget--title">Get Your Appliance</span>
        <?php echo do_shortcode('[gravityform id="1" title="false" description="false"]'); ?>
      </div><!-- widget -->
    </aside><!-- /sidebar -->

  </div><!-- /.container -->

<?php get_footer(); ?>
