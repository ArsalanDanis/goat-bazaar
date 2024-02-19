"use client"
import React from "react";
import styles from './Team.module.css';
const AboutAuthor = () => {
  return (
    <>
      <section class="py-3 py-md-5">
        <div class="container">
          <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6 col-xl-5">
              <img
                class="img-fluid rounded"
                loading="lazy"
                src="/gf2.jpg"
                alt="About 1"
              />
            </div>
            <div class="col-12 col-lg-6 col-xl-7">
              <div class="row justify-content-xl-center">
                <div class="col-12 col-xl-11">
                  <h2 class="mb-3">Who Are We?</h2>
                  <p class="lead fs-4 text-secondary mb-3">
                    Welcome to <span style={{ color: "gold" }}>GoatBazaar</span>
                    ! We are an online platform dedicated to providing
                    convenient access to high-quality goats. <br /> Our mission
                    is to connect goat enthusiasts with healthy and ethically
                    raised goats. <br /> Founded in 2023, we have been
                    revolutionizing the way people buy and sell goats online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-3 py-md-5">
        <div class="container">
          <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6 col-xl-7">
              <div class="row justify-content-xl-center">
                <div class="col-12 col-xl-11">
                  <h2 class="mb-3">Our Specializations!</h2>
                  <p class="lead fs-4 text-secondary mb-3">
                    <span style={{ color: "gold" }}>GoatBazaar</span>
                    specializes in facilitating the online sale of goats,
                    offering a wide selection ranging from dairy goats to meat
                    breeds. <br /> With GoatBazaar, customers can easily browse,
                    purchase, and even arrange delivery of their selected goats.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 col-xl-5">
              <img
                class="img-fluid rounded"
                loading="lazy"
                src="/gf3.jpg"
                alt="About 1"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="py-3 py-md-5">
        <div class="container">
          <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6 col-xl-5">
              <img
                class="img-fluid rounded"
                loading="lazy"
                src="/gf4.jpg"
                alt="About 1"
              />
            </div>
            <div class="col-12 col-lg-6 col-xl-7">
              <div class="row justify-content-xl-center">
                <div class="col-12 col-xl-11">
                  <h2 class="mb-3">Our Commitments?</h2>
                  <p class="lead fs-4 text-secondary mb-3">
                    Our <span style={{ color: "gold" }}>team </span>
                     of experts ensures that all goats listed on our
                    platform meet our strict standards for health and quality.{" "}
                    <br />
                    We are committed to providing a seamless and transparent
                    experience for both buyers and sellers. Thank you for
                    choosing GoatBazaar!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
  <div class="container overflow-hidden bsb-author-1">
    <div class="row justify-content-center gy-4 gy-md-0">
      <div class="col-12 col-md-3 col-xl-2 d-flex align-items-center justify-content-between column-gap-4 ">
        <img class="img-fluid rounded-circle author-avatar" style={{height:"168px",width:"250px"}} loading="lazy" src="/founder.png" alt="Elio Evander"/>
      </div>
      <div class="col-12 col-md-8 col-lg-6 col-xl-5 d-flex align-items-center justify-content-center">
        <div class="text-center text-md-start author-content">
          <h2 class="fs-2 mb-2" style={{fontFamily:"none"}}>Farhan Danish</h2>
          <p class="text-secondary " style={{fontSize:"15px"}}>founder & ceo</p>
          <p class="mb-3 fs-6 mt-2 " style={{fontFamily:"none"}}>As ceo of GoatBazaar, Farhan leads with a visionary mindset, constantly seeking innovative ways to improve the online goat market. His leadership has propelled GoatBazaar to become a trusted destination for goat enthusiasts worldwide.</p>
          <p class="mb-0">
            {/* <a href="#!" class="link-dark text-decoration-none">
              View More Items
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>
            </a> */}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<div className={`py-5 ${styles.team4}`}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-7 text-center">
            <h3 className="mb-3">Experienced & Professional Team</h3>
            <h6 className="subtitle">You can rely on our amazing features list and also our customer services will be a great experience for you without a doubt and in no time</h6>
          </div>
        </div>
        <div className="row justify-content-center">
          {/* Replace the following four divs with a loop over your team members */}
          <div className="col-lg-3 mb-4">
            <div className="row">
              <div className="col-md-12">
                <img src="/asf1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
              </div>
              <div className="col-md-12 text-center">
                <div className="pt-2">
                  <h5 className="mt-4 fw-bolder mb-0" style={{fontSize:"24px",fontFamily:"none"}}>Asif Husain</h5>
                  <h6 className="subtitle mb-3 mt-2">co-founder / coach</h6>
                  <p>You can rely on our amazing features list and also our customer services will be a great experience.</p>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="row">
              <div className="col-md-12">
                <img src="/kd2.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
              </div>
              <div className="col-md-12 text-center">
                <div className="pt-2">
                  <h5 className="mt-4 font-weight-medium mb-0" style={{fontSize:"24px",fontFamily:"none"}}>Kamran Danish</h5>
                  <h6 className="subtitle mb-3 mt-2">Property Specialist</h6>
                  <p>You can rely on our amazing features list and also our customer services will be a great experience.</p>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="row">
              <div className="col-md-12">
                <img src="/afr.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
              </div>
              <div className="col-md-12 text-center">
                <div className="pt-2">
                  <h5 className="mt-4 font-weight-medium mb-0" style={{fontSize:"24px",fontFamily:"none"}}>Afroz Ahmad</h5>
                  <h6 className="subtitle mb-3 mt-2">Team leader</h6>
                  <p>You can rely on our amazing features list and also our customer services will be a great experience.</p>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 mb-4">
            <div className="row">
              <div className="col-md-12">
                <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
              </div>
              <div className="col-md-12 text-center">
                <div className="pt-2">
                  <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                  <h6 className="subtitle mb-3">Property Specialist</h6>
                  <p>You can rely on our amazing features list and also our customer services will be a great experience.</p>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><i className="icon-social-behance"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          {/* Repeat this div for each team member */}
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutAuthor;
