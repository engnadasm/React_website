import React, { Component } from 'react';
import './info.css';

class Info extends Component {
  render() {
    return (
<section id="what-we-do" style={{backgroundColor : '#008080'}}>
		<div class="container-fluid">
			<h2 class="section-title mb-2 h1">About_US</h2>
			<div class="row">
				<div class="col">
					<div class="card">
						<div class="card-block block-1">
							<h3 class="card-title">Our Telephone numbers</h3>
							<p class="card-text">+0201205166278 || +01030404084</p>
						</div>
					</div>
				</div>

				<div class="col">
					<div class="card">
						<div class="card-block block-2">
							<h3 class="card-title">Our Adress</h3>
							<p class="card-text">the right location i don't now ^_^.</p>
						</div>
					</div>
				</div>

			</div>
			<div class="row">
				<div class="col">
					<div class="card">
						<div class="card-block block-4">
							<h3 class="card-title">The Time of Working</h3>
							<p class="card-text">All days execpt sunday.</p>
              <p class="card-text">from 11:00 am to 11:00 pm.</p>
              <p class="card-text"> &emsp; </p>

						</div>
					</div>
				</div>
				<div class="col">
					<div class="card">
						<div class="card-block block-5">
							<h3 class="card-title">Our Pages in Social media</h3>

              <div class="social-box">
    <div class="container">
     	<div class="row">
              <div class="col-lg-4 col-xs-12  text-center">
             					<div class="box">
             					    <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
             						<div class="box-title">
             							<h5>Twitter</h5>
             						</div>
             						<div class="box-btn">
             						    <a href="#">Learn More</a>
             						</div>
             					 </div>
             				</div>

             				 <div class="col-lg-4 col-xs-12 text-center">
             					<div class="box">
                      <i class="fa fa-facebook fa-3x" aria-hidden="true"></i>
             						<div class="box-title">
             							<h5>Facebook</h5>
             						</div>
             						<div class="box-btn">
             						    <a href="#">Learn More</a>
             						</div>
             					 </div>
             				</div>

                    </div>
    </div>
</div>
    						</div>
					</div>
				</div>

			</div>
		</div>
	</section>

    );
  }
}

export default Info;
