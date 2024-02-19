"use client";

import React from "react";
import "./comic.css";
import { useState } from "react";

const Comics = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div>
      <div
        className="productDetails container my-5 rounded-2"
        style={{ backgroundColor: "#f3ffd5" }}
      >
        <div className="row">
          <div className=" col-md p-4 d-flex justify-content-center">
            <div className="image-box">
              <img src="img1.jpg" alt="" width={300} height={320} />
              <div className="bookself d-flex justify-content-center">
                <div className="content">
                  <p className=" my-2 ms-4">
                    <span>Add to Bookshelf</span>
                  </p>
                  <button type="button" className="btn btn-dark">
                    READ AN EXCERPT
                  </button>{" "}
                  <br />
                  <button type="button" className="btn btn-link  ms-4">
                    Look Inside
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md p-4">
            <h2 style={{ fontFamily: "fantasy" }}>Fox Snair</h2>
            <p
              className=" mt-2"
              style={{ fontSize: "12px", fontFamily: "serif" }}
            >
              <b>THE WINNING MONEY MINDSET THAT WILL CHANGE YOUR LIFE</b>
            </p>
            <h3 style={{ fontSize: "15px" }}>
              By{" "}
              <span>
                <b>Vivian Tu</b>
              </span>
            </h3>
            <p>
              <span className=" my-3 bg-black text-white d-inline-block px-3">
                Best Seller
              </span>
            </p>
            <p>
              Category :{" "}
              <b>
                <a
                  style={{ fontSize: "13px" }}
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Personal Finance
                </a>{" "}
                |{" "}
                <a
                  style={{ fontSize: "13px" }}
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wellness
                </a>
              </b>
            </p>
            <div
              className=" cart-box mt-4 p-4 rounded-2"
              style={{ backgroundColor: "#ffe5e5" }}
            >
              <div className=" addToCart mb-2 ">
                <div className="">
                  <h6>Hardcover $29.00</h6>
                  <p className="isbn">jan 10,2024 | ISBN 978012547896 </p>
                </div>
                <div className="">
                  <button type="button" className="btn btn-primary">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <p className=" my-1">Buy from Other Retailers:</p>
              <div className="retailers d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-outline-dark">
                  Amazon
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Barnes & Noble
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Books A Million
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Bookshop.org
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Hudson Booksellers
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Powells
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Target
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Walmart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutBooks container">
        <div className="row">
          <div className="aboutBooks_left col-lg-8">
            <hr />
            <h6 className=" mb-3">
              <b> ABOUT ALWAYS REMEMBER</b>
            </h6>
            <h6 style={{ fontFamily: "cursive" }}>
              Lady Jennifer Arden and Ben Ellis know that a match between them
              is out of the question. Yet their hearts yearn for the impossible.
              Discover a new heartwarming story from New York Times bestselling
              author and beloved “queen of Regency romance” Mary Balogh.
            </h6>
            <p className=" mt-3 opacity-75">
              Left unable to walk by a childhood illness, Lady Jennifer, sister
              of the Duke of Wilby, has grown up to make a happy place for
              herself in society. Outgoing and cheerful, she has many friends
              and enjoys the pleasures of high society—even if she cannot dance
              at balls or stroll in Hyde Park. She is blessed with a large,
              loving, and protective family. But she secretly dreams of marriage
              and children, and of walking—and dancing.
            </p>
            <div id="demo" className="collapse">
              <p className=" my-2 opacity-75">
                When Ben Ellis comes across Lady Jennifer as she struggles to
                walk with the aid of primitive crutches, he instantly
                understands her yearning. He is a fixer. It is often said of him
                that he never saw a practical problem he did not have to solve.{" "}
                <br />
                <br /> He wants to help her discover independence and
                motion—driving a carriage, swimming, even walking a different
                way. But he must be careful. He is the bastard son of the late
                Earl of Stratton. <br />
                <br /> Though he was raised with the earl’s family, he knows he
                does not really belong in the world of the ton. Jennifer is
                shocked—and intrigued—by Ben’s ideas, and both families are
                alarmed by the growing friendship and perhaps more that they
                sense developing between the two. A duke’s sister certainly
                cannot marry the bastard son of an earl. Except sometimes, love
                can find a way.{" "}
              </p>
            </div>
            <div className=" mt-3 d-flex justify-content-center">
              <button
                type="button"
                className="btn border border-black"
                data-bs-toggle="collapse"
                data-bs-target="#demo"
                onClick={toggleCollapse}
              >
                {isCollapsed ? "SEE MORE" : "SEE LESS"}
              </button>
            </div>
          </div>
          <div className="aboutBooks_right col-lg-4">
            <hr />
            <h6 className=" mb-3">
              {" "}
              <b>ALSO IN A RAVENSWOOD NOVEL</b>
            </h6>
            <div className="novels-images d-flex gap-2">
              <img
                src="img5.jpg"
                className="shadowImg"
                alt=""
                height={230}
                width={180}
              />
              <img
                src="img7.jpg"
                className="shadowImg"
                alt=""
                height={230}
                width={180}
              />
            </div>
            <button type="button" className=" mt-3 btn btn-link text-black">
              See All
            </button>
          </div>
        </div>
      </div>
      <div className="balogh container">
        <div className="row">
          <div className=" col-lg-8">
            <hr />
            <h6 className=" mb-3">
              <b>ALSO BY MARY BALOGH</b>
            </h6>
            <div className="blog-images d-flex gap-4">
              <img
                className="shadowImg"
                src="img5.jpg"
                alt=""
                width={160}
                height={220}
              />
              <img
                className="shadowImg "
                src="img3.jpg"
                alt=""
                width={160}
                height={220}
              />
              <img
                className="shadowImg"
                src="img7.jpg"
                alt=""
                width={160}
                height={220}
              />
              <img
                className="shadowImg"
                src="img8.jpg"
                alt=""
                width={160}
                height={220}
              />
            </div>
          </div>
          <div className=" col-lg-4">
            <hr />
            <h6 className=" mb-3">
              {" "}
              <b>ABOUT MARY BALOGH</b>
            </h6>
            <p style={{ fontFamily: "sans-serif", opacity: "0.7" }}>
              <strong>Mary Balogh</strong> grew up in Wales and now lives with
              her husband, Robert, in Saskatchewan, Canada. She has written more
              than one hundred historical novels and novellas, more than forty
              of which have been New York Times bestsellers. They include the
              Bedwyn saga, the Simply quartet, the Huxtable quintet, the
              seven-part Survivors’series, and the Westcott series. She has
              written more than one hundred historical novels.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <section className="container d-flex justify-content-center mt-5">
        <div className="texts">
          <h5 className=" my-3 text-center">
           <b><i>Get news about Children’s books, authors, and more</i></b>
          </h5>
          <div className=" d-flex justify-content-center">
            <input
              type="text"
              name=""
              id=""
              style={{ maxWidth:'500px', border:'none', borderTopLeftRadius:'8px',borderBottomLeftRadius:'8px',textIndent:'10px'}}
              placeholder="Enter your email Address"
            />
            <button type="button" className="btn btn-dark" style={{borderTopLeftRadius:'0',borderBottomLeftRadius:'0'}}>
              SIGN UP
            </button>
          </div>
          <p className="my-4" style={{ maxWidth:'900px',fontFamily:'fantasy',opacity:'0.6'}}>By clicking Sign Up, I acknowledge that I have read and agree to Penguin Random Houses Privacy Policy and Terms of Use and understand that Penguin Random House collects certain categories of personal information for the purposes listed in that policy, discloses, sells, or shares certain personal information and retains personal information in accordance with the policy. You can opt-out of the sale or sharing of personal information anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Comics;
