import React, { Component } from 'react';

export class Template extends Component {
  static displayName = Template.name;

  render () {
      return (<div>
              <section id="galleries">
                  <div class="gallery">
                      <header class="special">
                          <h2>What's New</h2>
                      </header>
                      <div class="content">
                          <div class="media">
                          <a href="../images/fulls/01.jpg"><img src="../images/thumbs/05.jpg" alt="" title="This right here is a caption." /></a>
                          </div>
                          <div class="media">
                          <a href="../images/fulls/05.jpg"><img src="https://images.wallpaperscraft.com/image/night_city_buildings_bridge_150805_168x300.jpg" alt="" title="This right here is a caption." /></a>
                          </div>
                          <div class="media">
                          <a href="images/fulls/09.jpg"><img src="https://images.wallpaperscraft.com/image/glacier_rocks_stones_150809_168x300.jpg" alt="" title="This right here is a caption." /></a>
                          </div>
                          <div class="media">
                          <a href="images/fulls/02.jpg"><img src="https://images.wallpaperscraft.com/image/branches_leaves_sun_150819_168x300.jpg" alt="" title="This right here is a caption." /></a>
                          </div>
                          <div class="media">
                          <a href="images/fulls/06.jpg"><img src="https://images.wallpaperscraft.com/image/boat_water_aerial_view_150817_168x300.jpg" alt="" title="This right here is a caption." /></a>
                          </div>
                          <div class="media">
                          <a href="images/fulls/10.jpg"><img src="https://images.wallpaperscraft.com/image/jump_legs_spray_150812_168x300.jpg" alt="" title="This right here is a caption." /></a>
                          </div>
                          <div class="media">
                          <a href="images/fulls/03.jpg"><img src="https://images.wallpaperscraft.com/image/mountains_dark_night_150783_168x300.jpg" alt="" title="This right here is a caption." /></a>
                          </div>
                          <div class="media">
                          <a href="images/fulls/07.jpg"><img src="https://images.wallpaperscraft.com/image/night_dark_starry_sky_150781_168x300.jpg" alt="" title="This right here is a caption." /></a>
                          </div>
                      </div>
                      <footer>
                          <a href="gallery.html" class="button big">Full Gallery</a>
                      </footer>
                  </div>
          </section>  
          <section id="contact">

              <div class="social column">
                  <h3>About Me</h3>
                  <p>Mus sed interdum nunc dictum rutrum scelerisque erat a parturient condimentum potenti dapibus vestibulum condimentum per tristique porta. Torquent a ut consectetur a vel ullamcorper a commodo a mattis ipsum class quam sed eros vestibulum quisque a eu nulla scelerisque a elementum vestibulum.</p>
                  <p>Aliquet dolor ultricies sem rhoncus dolor ullamcorper pharetra dis condimentum ullamcorper rutrum vehicula id nisi vel aptent orci litora hendrerit penatibus erat ad sit. In a semper velit eleifend a viverra adipiscing a phasellus urna praesent parturient integer ultrices montes parturient suscipit posuere quis aenean. Parturient euismod ultricies commodo arcu elementum suspendisse id dictumst at ut vestibulum conubia quisque a himenaeos dictum proin dis purus integer mollis parturient eros scelerisque dis libero parturient magnis.</p>
                  <h3>Follow Me</h3>
                  <ul class="icons">
                      <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                      <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                      <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
                  </ul>
              </div>


              <div class="column">
                  <h3>Get in Touch</h3>
                  <form action="#" method="post">
                      <div class="field half first">
                          <label for="name">Name</label>
                         
					  </div>
                      <div class="field half">
                          <label for="email">Email</label>
                         
					  </div>
                      <div class="field">
                              <label for="message">Message</label>
                              <textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
                      </div>
                          <ul class="actions">
                              <li></li>
					      </ul> 
				  </form>
              </div>

          </section>
      </div>
                     
    );
  }
}
