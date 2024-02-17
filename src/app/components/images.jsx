"use client";
import React from "react";
import './images.css'

const ImagesContainer = () => {
  return (
    <div>
      <div className=" pt-4">
        <section className="imgSec">
          <div className="d-flex flex-wrap justify-content-center align-items-center" style={{gap:'21px'}}>
            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="/g4.jpeg"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  ></div>
                </a>
              </div>
            </div>
            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="g2.jpeg"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "#FBFBFB" }}
                  ></div>
                </a>
              </div>
            </div>
            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="/g5.webp"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "#FBFBFB" }}
                  ></div>
                </a>
              </div>
            </div>

            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="/g6.webp"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "#FBFBFB" }}
                  ></div>
                </a>
              </div>
            </div>
            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="/g3.jpeg"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "#FBFBFB" }}
                  ></div>
                </a>
              </div>
            </div>
            <div className=" mb-4 mb-md-0">
              <div
                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                data-ripple-color="light"
              >
                <img
                  src="/g8.jpeg"
                  className="imageImg"
                  // width={180}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    height: "250px",
                    borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "#FBFBFB" }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImagesContainer;
