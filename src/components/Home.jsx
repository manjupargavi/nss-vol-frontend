import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiTwitter, BiFacebook, BiLinkedin, BiInstagram } from 'react-icons/bi';
import './Style.css';


function MyComponent() {
    return (
      <div>
        
  
        <section id="about" className="about section-padding">
        <div class="container">
            <div class="row">
           
                <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div class="about-text">
                          <h2>NOT ME BUT YOU</h2>
                          <p>NSS is a government program designed to inculcate the idea of welfare in students.Our sole aim is to motivate students to indulge in nation building activities through various events and projects, which are aimed towards the benefit of the people in and around KEC Perundurai.</p>
                          <a href="#" class="btn btn-block login-account">Get involved</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="about-img">
                        <img src="https://seeklogo.com/images/N/nair-service-scheme-logo-FA829FD6C9-seeklogo.com.png" alt="" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
        </section>
  
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
          <img src="https://1.bp.blogspot.com/-6CuFDmF99AM/WyknbOQgW8I/AAAAAAAABdE/1VWxzJgRlEUkKr42wwqAIEawz8F9NhjiQCLcBGAs/s640/Mr.Praveen%2BAU%2BBEST%2BAward%2Bpic.JPG" class="d-block w-100" alt="..."/>
            <div class="carousel-caption">
              <h5>KEC-NSS ACHEIVEMENTS</h5>
                              
                              <p><a href="#" class="btn btn-block login-account mt-3">View more</a></p>
            </div>
          </div>
          <div class="carousel-item">
          <img src="https://4.bp.blogspot.com/-M56WsrlRm9s/Wv_mkQxA5ZI/AAAAAAAABcg/g-uVqZqMHy8RN5EeatBlgimjgkXDzsRwACLcBGAs/s640/NSS%2BBEST%2BTEAM%2B2017-2018.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption">
              <h5>BEST NSS VOLUNTEERS</h5>
                              
                              <p><a href="#" class="btn btn-block login-account mt-3">View more</a></p>
            </div>
          </div>
          <div class="carousel-item">
          <img src="https://www.vidyavision.com/CollegeUploads/Photos/2016-13-12-12-26-26_kongu3.jpg" class="d-block w-100" alt="..."/>
               
                <div class="carousel-caption">
                 
                                  <p><a href="#" class="btn btn-block login-account mt-3">View more</a></p>
                </div>
              </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        </div>
  
        <section className="services section-padding" id="services">
          {<div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="section-header text-center pb-5">
                          <h2>Our Initiatives</h2>
                          
                      </div>
                  </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-12 col-lg-4">
                    <div class="card text-white text-center bg-dark pb-2">
                        <div class="card-body">
                            <i class="fa-solid fa-hand-holding-hand"></i>
                            <h3 class="card-title">Santhwanam</h3>
                            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p>
                            <button class="btn  btn-block login-account text-light">Read More</button>
                        </div>
                    </div>
                </div>
                  <div class="col-12 col-md-12 col-lg-4">
                      <div class="card text-white text-center bg-dark pb-2">
                          <div class="card-body">
                            <i class="fa-solid fa-droplet"></i>
                              <h3 class="card-title">Blood donation</h3>
                              <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p>
                              <button class="btn btn-block login-account text-light">Read More</button>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-12 col-lg-4">
                      <div class="card text-white text-center bg-dark pb-2">
                          <div class="card-body">
                            <i class="fa-solid fa-seedling"></i>
                              <h3 class="card-title">Farm</h3>
                              <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eligendi modi temporibus alias iste. Accusantium?</p>
                              <button class="btn btn-block login-account text-light">Read More</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>}
        </section>
  
        <section className="team section-padding" id="team">
          { <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-header text-center pb-5">
                        <h2>NSS STAFF COORDINATORS</h2>
                        
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="" alt="" class="img-fluid rounded-circle"/>
                        <h3 class="card-title py-2">Dr.A.Manimaran</h3>
                        <p class="card-text">
                            Department of Mathematics,
                            Kongu Engineering College,
                            Perundurai - 638 060.  </p>
                           <p> Contact no : 9965398712</p>
                        

                        <p class="socials">
                            <i class="bi bi-twitter text-dark mx-1"></i>
                        <i class="bi bi-facebook text-dark mx-1"></i>
                        <i class="bi bi-linkedin text-dark mx-1"></i>
                        <i class="bi bi-instagram text-dark mx-1"></i>
                        </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="img/team-2.jpg" alt="" class="img-fluid rounded-circle"/>
                        <h3 class="card-title py-2">Mr.S.Praveen</h3>
                        <p class="card-text">
                            Department of Mechatronics Engineering,
                            Kongu Engineering College,
                            Perundurai - 630 060.</p>
                            <p>Contact No : 9500575414</p>
                        <p class="socials">
                            <i class="bi bi-twitter text-dark mx-1"></i>
                        <i class="bi bi-facebook text-dark mx-1"></i>
                        <i class="bi bi-linkedin text-dark mx-1"></i>
                        <i class="bi bi-instagram text-dark mx-1"></i>
                        </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="img/team-3.jpg" alt="" class="img-fluid rounded-circle"/>
                        <h3 class="card-title py-2">Dr.R.Devipriya</h3>
                        <p class="card-text">Department of Information Technology,
                            Kongu Engineering College,
                            Perundurai - 638 060.</p>
                          <p>  Contact No : 9842792282</p>
                        <p class="socials">
                            <i class="bi bi-twitter text-dark mx-1"></i>
                        <i class="bi bi-facebook text-dark mx-1"></i>
                        <i class="bi bi-linkedin text-dark mx-1"></i>
                        <i class="bi bi-instagram text-dark mx-1"></i>
                        </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <img src="img/team-4.jpg" alt="" class="img-fluid rounded-circle"/>
                        <h3 class="card-title py-2">Dr.Chitradevipriya</h3>
                        <p class="card-text">Department of Electrical and Electronics,
                            Kongu Engineering College,
                            Perundurai - 638 060.</p>
                        <p> Contact No : 9842792282</p>
                        <p class="socials">
                            <i class="bi bi-twitter text-dark mx-1"></i>
                        <i class="bi bi-facebook text-dark mx-1"></i>
                        <i class="bi bi-linkedin text-dark mx-1"></i>
                        <i class="bi bi-instagram text-dark mx-1"></i>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>}
        </section>
  
        <section id="contact" className="contact section-padding">
          {<div class="container mt-5 mb-5">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-header text-center pb-5">
                        <h2>Contact Us</h2>
                       
                    </div>
                </div>
            </div>
			<div class="row m-0">
				<div class="col-md-12 p-0 pt-4 pb-4">
					<form action="#" class="bg-light p-4 m-auto">
						<div class="row">
							<div class="col-md-12">
								<div class="mb-3">
									<input class="form-control" placeholder="Name" required="" type="text"/>
								</div>
							</div>
							<div class="col-md-12">
								<div class="mb-3">
									<input class="form-control" placeholder="Email" required="" type="email"/>
								</div>
							</div>
                            <div class="col-md-12">
								<div class="mb-3">
									<input class="form-control" placeholder="Department" required="" type="text"/>
								</div>
							</div>
							<div class="col-md-12">
								<div class="mb-3">
									<textarea class="form-control" placeholder="Message" required="" rows="3"></textarea>
								</div>
							</div><button class="btn btn-block login-account mt-3" type="button">Send</button>
						</div>
					</form>
				</div>
			</div>
		</div>}
        </section>

        <footer class="bg-dark p-2 text-center">
          <div class="container">
              <p class="text-white">All Right Reserved By NSS-KEC</p>
          </div>
      </footer>
      </div>
    );
  }
  
  export default MyComponent;
  