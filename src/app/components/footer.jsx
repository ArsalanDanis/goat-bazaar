import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import './footer.css'

export const Footer = () => {
  const imagesGf = ["gf1.jpg","gf2.jpg","gf3.jpg","gf4.jpg","gf5.webp","gf6.webp"]
  return (
    <div>
      <div className=" mt-5 footerComp">
        <hr />
        <h2 className=" text-center fw-bold" style={{ fontFamily: "none" }}>
          Our Farms
        </h2>
        <div
          className="text-center text-white"
          style={{ backgroundCcolor: "#caced1" }}
        >
          <div className="py-4">
            <section className="">
              <div className="row">
                {imagesGf.map((img,index)=>
                <div key={index} className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src={img}
                      className="w-100"
                      height={120}
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                )}
                
              </div>
            </section>
          </div>
        </div>
        <footer
          className="text-white text-center text-lg-start mt-5"
          style={{ backgroundColor: "#00002c" }}
        >
          <div className=" p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className=" mb-4">About company</h5>

                <p  style={{maxWidth:'350px'}}>
                GoatBazaar is an online platform dedicated to providing convenient access to high-quality goats. Founded in 2023, we have been revolutionizing the way people buy and sell goats online.
                </p>

                <p className=" mt-1" style={{maxWidth:'350px'}}>
                At GoatBazaar, our mission is to connect goat enthusiasts with healthy and ethically raised goats.
                </p>

                <div className="mt-4">
                  <a type="button" className="btn btn-floating m-2 btn-light">
                    <FaFacebook />
                  </a>

                  <a type="button" className="btn btn-floating m-2 btn-light">
                    <FaInstagram />
                  </a>

                  <a type="button" className="btn btn-floating m-2 btn-light">
                    <FaTwitter />
                  </a>

                  <a type="button" className="btn btn-floating m-2 btn-light">
                    <FaGoogle />
                  </a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 ms-5 pb-1">Address</h5>

                {/* <div className="form-outline form-white mb-4">
                  <input
                  style={{maxWidth:'250px'}}
                    type="text"
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Search</label>
                </div> */}

                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="ms-2">Gorakhpur, Uttar Pradesh</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="ms-2">farhandanish1992@gmail.com</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="ms-2">+91-8808213333</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="ms-2">pin-273015</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Opening hours</h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-center py-3">
            © 2023 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
              GoatBazaar
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
