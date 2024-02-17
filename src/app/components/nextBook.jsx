"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import cardsData from "../contactUs/utils";

const NextBook = () => {
  const [count, setCount] = useState(1);
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    setCount(buttonId)
  };
  const cartData = useSelector((data) => data.cartsData.carts);
  const imagesNr = [
    "nr1.jpg",
    "nr2.jpg",
    "nr3.webp",
    "nr4.jpg",
    "nr5.jpg",
    "nr6.jpg",
    "nr7.jpg",
    "nr8.jpg",
  ];
  const imagesUpc=["upc1.jpg","upc8.jpg","upc2.jpg","upc4.jpg","upc5.jpg","upc3.jpg","upc6.jpg","upc7.jpg"]
  return (
    <div>
      <div className="next-book container mt-4">
        <hr />
        <h2 className=" text-center fw-bold" style={{ fontFamily: "none" }}>
          Careers And Opportunities
        </h2>
        <div className="next-btns my-3 d-flex justify-content-center align-items-center column-gap-3">
        <button
        type="button"
        onClick={() => handleButtonClick(1)}
        className={`btn btn-outline-secondary ${activeButton === 1 ? 'active' : ''}`}
      >
        NEW RELEASES
      </button>
      <button
        type="button"
        onClick={() => handleButtonClick(2)}
        className={`btn btn-outline-secondary ${activeButton === 2 ? 'active' : ''}`}
      >
        COMING SOON
      </button>
      <button
        type="button"
        onClick={() => handleButtonClick(3)}
        className={`btn btn-outline-secondary ${activeButton === 3 ? 'active' : ''}`}
      >
        BEST SELLERS
      </button>
          {/* <button
            type="button"
            onClick={() => setCount(4)}
            className="btn btn-outline-secondary"
          >
            PARTNERS
          </button> */}
        </div>
        <div>
          {count == 1 && (
            <div className="images-next d-flex justify-content-center align-items-center flex-wrap my-5 gap-3">
              {imagesNr.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="image"
                  width={250}
                  height={210}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    // borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              ))}
            </div>
          )}
        </div>
        <div>
          {count == 2 &&  (
            <div className="images-next d-flex justify-content-center align-items-center flex-wrap my-5 gap-3">
              {imagesUpc.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="image"
                  width={250}
                  height={210}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    // borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              ))}
            </div>
          )}
        </div>
        <div>
          {count == 3 && (
            <div className="images-next d-flex justify-content-center align-items-center flex-wrap my-5 gap-3">
              {cardsData.slice(0,8).map((img, index) => (
                <img
                  key={index}
                  src={img.img}
                  alt="image"
                  width={250}
                  height={210}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    // borderRadius: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              ))}
            </div>
          )}
        </div>
        {/* <div>
          {count == 4 && (
            <div className="images-next d-flex justify-content-center align-items-center flex-wrap my-5 gap-1">
              <img src="/img13.jpg" alt="image" width={150} height={200} />
              <img src="/img4.jpg" alt="image" width={150} height={200} />
              <img src="/img11.jpg" alt="image" width={150} height={200} />
              <img src="/img18.jpg" alt="image" width={150} height={200} />
              <img src="/img17.jpg" alt="image" width={150} height={200} />
              <img src="/img16.jpg" alt="image" width={150} height={200} />
              <img src="/img15.jpg" alt="image" width={150} height={200} />
              <img src="/img20.jpg" alt="image" width={150} height={200} />
              <img src="/img19.jpg" alt="image" width={150} height={200} />
              <img src="/img14.jpg" alt="image" width={150} height={200} />
              <img src="/img8.jpg" alt="image" width={150} height={200} />
              <img src="/img7.jpg" alt="image" width={150} height={200} />
              <img src="/img3.jpg" alt="image" width={150} height={200} />
              <img src="/img9.jpg" alt="image" width={150} height={200} />
            </div>
          )}
        </div> */}

        {/* <div className=" d-flex justify-content-center">
          <button type="button" className="btn btn-dark my-4 py-2 px-4">
            DISCOVER NEW RELEASES
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default NextBook;
