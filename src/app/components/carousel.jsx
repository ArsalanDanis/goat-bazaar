import React from "react";
import Image from "next/image";
import './carousel.css'

const Crousel = () => {
  return (
    <div className="carouselComp">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active bg-dark"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=" bg-black"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=" bg-dark"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            className=" bg-dark"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
            className=" bg-dark"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ borderRadius:'10px'  }}
              src="/front.jpg"
              className="d-block w-100 carouselImg"
              alt="..."
            />
            {/* <div className="carousel-caption d-none d-md-block text-black">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item" >
            <img
              style={{ borderRadius:'10px' }}
              src="/goat4.jpg"
              className="d-block w-100 carouselImg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-black">
              {/* <h5>second slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
      
          <div className="carousel-item">
            <img
              style={{ borderRadius:'10px'  }}
              src="/goat5.jpg"
              className="d-block w-100 carouselImg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-black">
              {/* <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ borderRadius:'10px'  }}
              src="/goat3.jpg"
              className="d-block w-100 carouselImg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-black">
              {/* <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ borderRadius:'10px'  }}
              src="/goat1.jpg"
              className="d-block w-100 carouselImg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-black">
              {/* <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p> */}
            </div>
          </div>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Crousel;
