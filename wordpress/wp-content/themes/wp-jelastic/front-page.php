<?php /* Template Name: Home Page */ get_header(); ?>

  <div class="container">

    <h1 class="site--title">Full-Featured PaaS on Maxihost Infrastructure in Brazil</h1>

    <article>
      <div class="main-slider">
        <img src="<?php echo get_template_directory_uri(); ?>/img/slider-1.jpg" alt="">
      </div><!-- /.main-slider -->

      <div class="content-container">
        <p>Get a dedicated Jelastic PaaS installed as Private Cloud on top of Maxihost infrastructure to simplify environments provisioning, applications deployment, scaling and management, and as a result accelerate time to market and improve efficiency of personnel and cloud resource utilization. Choose a bundle you require and request the installation.</p>
      </div><!-- /.content-container -->

      <div class="price">
        <h2 class="price--title">Turnkey PaaS on Dedicated Servers</h2>
        <div class="price--table">

          <div class="price--table_item">
            <h6 class="table-item--title">basic</h6>
            <div class="table-item--price">
              $460
              <span>per server / month</span>
            </div><!-- /.table-item--price -->
            <div class="table-item--descr">
              <h6>Maxihost Managed Servers</h6>
              <ul>
                <li>Intel E3-1231v3</li>
                <li>4 Cores, 3.4 GHz</li>
                <li>32GB RAM</li>
                <li>500GB SSD Disks</li>
                <li>10TB Transfer</li>
              </ul>
            </div><!-- /.table-item--descr -->
          </div><!-- /.price--table_item -->

          <div class="price--table_item">
            <h6 class="table-item--title">advanced</h6>
            <div class="table-item--price">
              $540
              <span>per server / month</span>
            </div><!-- /.table-item--price -->
            <div class="table-item--descr">
              <h6>Maxihost Managed Servers</h6>
              <ul>
                <li>Intel E5-2620v3</li>
                <li>6 Cores, 2.4 GHz</li>
                <li>32GB RAM</li>
                <li>2 x 500GB SSD Disks</li>
                <li>10TB Transfer</li>
              </ul>
            </div><!-- /.table-item--descr -->
          </div><!-- /.price--table_item -->

          <div class="price--table_item">
            <h6 class="table-item--title">premium</h6>
            <div class="table-item--price">
              $864
              <span>per server / month</span>
            </div><!-- /.table-item--price -->
            <div class="table-item--descr">
              <h6>Maxihost Managed Servers</h6>
              <ul>
                <li>Intel Dual E5-2620v3</li>
                <li>12 Cores, 2.4 GHz</li>
                <li>64GB RAM</li>
                <li>2 x 1TB SSD Disks</li>
                <li>10TB Transfer</li>
              </ul>
            </div><!-- /.table-item--descr -->
          </div><!-- /.price--table_item -->

        </div><!-- /.price--table -->
      </div><!-- /.price -->

    </article>

    <aside class="sidebar" role="complementary">
      <div class="widget widget--getyourappliance">
        <span class="widget--title">Get Your Appliance</span>
        <form action="">
          <input type="text" placeholder="Name*">
          <input type="email" placeholder="Email*">
          <input type="text" placeholder="Company*">
          <span class="form-select">
            <select name="" id="">
              <option disabled="disabled" selected="selected" value="">Type</option>
              <option>$460 server/month</option>
              <option>$540 server/month</option>
              <option>$864 server/month</option>
            </select>
          </span>
          <label>
            <input type="checkbox" class="checkbox1"> I read and agree to <a href="#">Jelastic Terms of Use</a>
          </label>
          <label>
            <input type="checkbox" class="checkbox2"> I confirm being of legal age, allow using my personal data and agree to <a href="#">Privacy Policy</a>
          </label>
          <button class="disabled">Get Started</button>
        </form>
      </div><!-- widget -->
    </aside><!-- /sidebar -->

  </div><!-- /.container -->

<?php get_footer(); ?>
