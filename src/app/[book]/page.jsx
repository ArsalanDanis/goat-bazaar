"use client";

import "./productD.css";
import { useEffect, useState } from "react";
import { booksApi } from "../booksApi/booksApi";
import { useDispatch } from "react-redux";
import { addBookToCart } from "@/app/redux/cartSlice";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DisplayBook from "../components/books";
// import ProductDetails from "../components/productDetails";
import cardsData from "../contactUs/utils";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const ItemDetails = ({ params }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const booksData = cardsData;
  const dispatch = useDispatch();
  const router = useRouter();
  const routesId = params.book;
  console.log("ID :-", routesId);
  // const [item, setItem] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyBdhHkp48YL4q1JCV3Xs1iSkgRnaQqwFY8"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setItem(data.items || []))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // if (!item) {
  //   return <p>Loading...</p>;
  // }

  // const filteredItems = item.filter((data) => data.id == routesId);
  // const selectedItem = filteredItems.length > 0 ? filteredItems[0] : null;

  // ... rest of the component code
  const urlToShare = 'https://65815fdf4f9e7f0ba4fa8dc1--peaceful-tartufo-24b12e.netlify.app';

  // Function to handle sharing on different platforms
  const handleShare = (platform) => {
    switch (platform) {
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(urlToShare)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}`);
        break;
      case 'instagram':
        window.open(`https://www.instagram.com/?url=${encodeURIComponent(urlToShare)}`);
        break;
      case 'gmail':
        window.open(`mailto:?body=${encodeURIComponent(urlToShare)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(urlToShare)}`);
        break;
      default:
        break;
    }
  };

  const handleAddToCart = (selectedItem) => {
    dispatch(addBookToCart(selectedItem));
    toast.success("goat added successfully!");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  if (!booksData) {
    return <p>Loading...</p>;
  }

  const filteredItems = booksData.filter((data) => data.id == routesId);
  const selectedItem = filteredItems.length > 0 ? filteredItems[0] : null;

  return (
    <>
      <div className=" productDetComp">
        <div className="">
          <div className="">
            {" "}
            {selectedItem ? (
              <div>
                <div
                  className="productDetails bg-light container my-5 rounded-2"
                  // style={{ backgroundColor: "#f3ffd5" }}
                  
                >
                  <div className="row">
                    <div className=" col-md p-4 d-flex justify-content-center">
                      <div className="image-box">
                        <img
                          src={selectedItem.img}
                          alt={selectedItem.title}
                          width={400}
                          height={450}
                        />
                        {/* <div className="bookself d-flex justify-content-center">
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
                        </div> */}
                      </div>
                    </div>
                    <div className=" col-md p-4">
                      <h2 style={{ fontFamily: "fantasy" }}>
                        {selectedItem.title}{" "}
                      </h2>
                      <p
                        className=" mt-2"
                        style={{ fontSize: "15px", fontFamily: "circulor" }}
                      >
                        <b>
                          {selectedItem.description}
                        </b>
                      </p>
                      <h3 style={{ fontSize: "15px" }}>
                        {/* By{" "}
                        <span>
                          <b>Vivian Tu</b>
                        </span> */}
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
                            style={{ fontSize: "13px",color:"blue" }}
                            // href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {selectedItem.category}
                          </a>{" "}
                          |{" "}
                          <a
                            style={{ fontSize: "13px",color:"blue" }}
                            // href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Animals
                          </a>
                        </b>
                      </p>
                      <div
                        className=" cart-box mt-4 py-4 px-2 rounded-2"
                        // style={{ backgroundColor: 'ligh'}}
                      >
                        <div className=" addToCart mb-2 ">
                          <div className="">
                            <h6>
                             
                              <span
                                className=" me-3 text-primary fw-bold"
                                style={{ fontSize: "20px" }}
                              >
                                {selectedItem.discountedPrice}
                              </span>
                              <span className=" text-decoration-line-through">{selectedItem.price}{" "}</span>
                            </h6>
                            <p className="isbn">
                              jan 10,2024 | ISGN 978012547896{" "}
                            </p>
                          </div>
                          <div className="">
                            <button
                              onClick={() => handleAddToCart(selectedItem)}
                              type="button"
                              className="btn btn-primary"
                            >
                              ADD TO CART
                            </button>
                          </div>
                        </div>
                        <p className="mt-4 mb-2">Share with Others:</p>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-outline-dark" onClick={() => handleShare('whatsapp')}>
          <FaWhatsapp className=" mb-1" /> WhatsApp
        </button>
        <button type="button" className="btn btn-outline-dark" onClick={() => handleShare('facebook')}>
          <FaFacebook className=" mb-1" /> Facebook
        </button>
        <button type="button" className="btn btn-outline-dark" onClick={() => handleShare('twitter')}>
          <FaTwitter className=" mb-1" /> Twitter
        </button>
        <button type="button" className="btn btn-outline-dark" onClick={() => handleShare('instagram')}>
          <FaInstagram className=" mb-1" /> Instagram
        </button>
        <button type="button" className="btn btn-outline-dark" onClick={() => handleShare('gmail')}>
          <FaEnvelope className=" mb-1" /> Gmail
        </button>
        <button type="button" className="btn btn-outline-dark" onClick={() => handleShare('linkedin')}>
          <FaLinkedin className=" mb-1" /> LinkedIn
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
                        <b> About {selectedItem.title}</b>
                      </h6>
                      <h6 style={{ fontFamily: "cursive" }}>
                        {selectedItem.description}
                      </h6>
                      <p className=" mt-3 opacity-75">
                       {selectedItem.details}
                      </p>
                      <div id="demo" className="collapse">
                        <p className=" my-2 opacity-75">
                          {selectedItem.extraDetails}
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
                        <b>ALSO IN A DEMAND</b>
                      </h6>
                      <div className="novels-images d-flex gap-2">
                        <img
                          src="nr1.jpg"
                          className="shadowImg"
                          alt=""
                          height={230}
                          width={180}
                        />
                        <img
                          src="nr2.jpg"
                          className="shadowImg"
                          alt=""
                          height={230}
                          width={180}
                        />
                      </div>
                      <button
                        type="button"
                        className=" mt-3 btn btn-link text-black"
                      >
                        See All
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="balogh container">
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
                        <strong>Mary Balogh</strong> grew up in Wales and now
                        lives with her husband, Robert, in Saskatchewan, Canada.
                        She has written more than one hundred historical novels
                        and novellas, more than forty of which have been New
                        York Times bestsellers. They include the Bedwyn saga,
                        the Simply quartet, the Huxtable quintet, the seven-part
                        Survivors’series, and the Westcott series. She has
                        written more than one hundred historical novels.
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <hr /> */}
                {/* <section className="container d-flex justify-content-center mt-5">
                  <div className="texts">
                    <h5 className=" my-3 text-center">
                      <b>
                        <i>
                          Get news about Children’s books, authors, and more
                        </i>
                      </b>
                    </h5>
                    <div className=" d-flex justify-content-center">
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          maxWidth: "500px",
                          border: "none",
                          borderTopLeftRadius: "8px",
                          borderBottomLeftRadius: "8px",
                          textIndent: "10px",
                        }}
                        placeholder="Enter your email Address"
                      />
                      <button
                        type="button"
                        className="btn btn-dark"
                        style={{
                          borderTopLeftRadius: "0",
                          borderBottomLeftRadius: "0",
                        }}
                      >
                        SIGN UP
                      </button>
                    </div>
                    <p
                      className=" my-4"
                      style={{
                        maxWidth: "900px",
                        fontFamily: "fantasy",
                        opacity: "0.6",
                      }}
                    >
                      By clicking "Sign Up", I acknowledge that I have read and
                      agree to Penguin Random House's Privacy Policy and Terms
                      of Use and understand that Penguin Random House collects
                      certain categories of personal information for the
                      purposes listed in that policy, discloses, sells, or
                      shares certain personal information and retains personal
                      information in accordance with the policy. You can opt-out
                      of the sale or sharing of personal information anytime.
                    </p>
                  </div>
                </section> */}
              </div>
            ) : (
              <p className=" ms-5">Item not found</p>
            )}
          </div>
        </div>
      </div>
      <div>
        <ToastContainer />
        <section>
          <hr />
          <h6 className=" my-2" style={{ textAlign: "center" }}>
            <b>YOU MAY ALSO LIKE</b>
          </h6>
          <DisplayBook />
        </section>
        <section className=" mt-5">
          <hr />
          <h6 className=" my-2" style={{ textAlign: "center" }}>
            <b>INSPIRED BY YOUR BROWSING</b>
          </h6>
          <DisplayBook />
        </section>
      </div>
    </>
  );
};

export default ItemDetails;

// "use client";

// // import { useEffect, useState } from "react";
// import { booksApi } from "../booksApi/booksApi";
// import { useDispatch } from "react-redux";
// import { addBookToCart } from "@/app/redux/cartSlice";
// import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ProductDetails from "../components/productDetails";

// const ItemDetails = ({ params }) => {
//   const booksData = booksApi.slice(0, 20);
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const routesId = params.book;
//   console.log("ID :-", routesId);
//   // const [item, setItem] = useState([]);

//   // useEffect(() => {
//   //   fetch(
//   //     "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyBdhHkp48YL4q1JCV3Xs1iSkgRnaQqwFY8"
//   //   )
//   //     .then((response) => response.json())
//   //     .then((data) => setItem(data.items || []))
//   //     .catch((error) => console.error("Error fetching data:", error));
//   // }, []);

//   // if (!item) {
//   //   return <p>Loading...</p>;
//   // }

//   // const filteredItems = item.filter((data) => data.id == routesId);
//   // const selectedItem = filteredItems.length > 0 ? filteredItems[0] : null;

//   // ... rest of the component code

//   const handleAddToCart = (selectedItem) => {
//     dispatch(addBookToCart(selectedItem));
//     toast.success('Book added successfully!');
//     setTimeout(()=>{
//       router.push("/");
//     },2000)
//   };

//   if (!booksData) {
//     return <p>Loading...</p>;
//   }

//   const filteredItems = booksData.filter((data) => data.id == routesId);
//   const selectedItem = filteredItems.length > 0 ? filteredItems[0] : null;

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8 ">
//           {" "}
//           {/* Increase width */}
//           {selectedItem ? (
//             <div className="card shadow p-3 mb-5 bg-white rounded ">
//               <img
//                 src={`/img${routesId}.jpg`}
//                 alt={selectedItem.title}
//                 className="card-img-top img-fluid rounded"
//                 style={{ maxHeight: "450px" , objectFit: "fit" }}
//               />

//               <div className="card-body text-center">
//                 <h2
//                   className="card-title"
//                   style={{
//                     fontSize: "2rem",
//                     color: "#007bff",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   {selectedItem.title}
//                 </h2>
//                 <p
//                   className="card-text"
//                   style={{ fontSize: "1.2rem", color: "#28a745" }}
//                 >
//                   Author: {selectedItem.author}
//                 </p>
//                 <p
//                   className="card-text text-center"
//                   style={{ fontSize: "1rem" }}
//                 >
//                   <i>Description: {selectedItem.description}</i>
//                 </p>
//                 <p
//                   className="card-text text-muted"
//                   style={{ fontSize: "1rem" }}
//                 >
//                   Price: ₹{selectedItem.price}
//                 </p>
//                 <button
//                   onClick={() => handleAddToCart(selectedItem)}
//                   className="btn btn-primary w-50"
//                   style={{ fontSize: "1rem" }}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <p>Item not found</p>
//           )}
//         </div>
//       </div>
//       <ToastContainer />
//       <ProductDetails />

//     </div>
//   );
// };

// export default ItemDetails;
