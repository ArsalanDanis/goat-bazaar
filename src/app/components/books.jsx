"use client"
import React, { useState, useEffect, useRef } from "react";
import { booksApi } from "../booksApi/booksApi";
import Link from "next/link";
import Image from "next/image";
import "./books.css";
import cardsData from "../contactUs/utils";
import { FaRegHeart } from "react-icons/fa";

const DisplayBook = ({category}) => {
  const [cardStates, setCardStates] = useState(cardsData.map(() => false));

  const handleClick = (index) => {
    setCardStates((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const booksData = booksApi.slice(0, 20);
  const [items, setItems] = useState([]);
  const scrollContainerRef = useRef(null);
  const scrollStep = 200; // Adjust this value for smooth scrolling speed
  const autoPlayInterval = 3000; // Adjust this value for auto play interval in milliseconds

  const scrollBooks = (scrollAmount) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const targetScroll = currentScroll + scrollAmount;

      if (targetScroll < 0) {
        // If scrolling to the left beyond the start, reset to the end
        container.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });
      } else if (targetScroll > maxScroll) {
        // If scrolling to the right beyond the end, reset to the start
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Otherwise, perform the normal smooth scroll
        container.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    let autoPlayTimer;

    const startAutoPlay = () => {
      autoPlayTimer = setInterval(() => {
        scrollBooks(200); // Auto play right-scroll, adjust the value as needed
      }, autoPlayInterval);
    };

    const stopAutoPlay = () => {
      clearInterval(autoPlayTimer);
    };

    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("mouseenter", stopAutoPlay);
      container.addEventListener("mouseleave", startAutoPlay);
      startAutoPlay(); // Start auto play when component mounts
    }

    return () => {
      // Cleanup event listeners and auto play timer
      if (container) {
        container.removeEventListener("mouseenter", stopAutoPlay);
        container.removeEventListener("mouseleave", startAutoPlay);
      }
      stopAutoPlay();
    };
  }, [autoPlayInterval]);

  return (
    <section className="mt-5 bookComp position-relative">
      <h5
        className=" my-4"
        style={{ fontSize: "32px", fontFamily: "serif", fontWeight: "bolder" }}
      >
      {category}
      </h5>
      <div
        className=" "
        ref={scrollContainerRef}
        style={{ overflowX: "hidden" }}
      >
        <div
          className="d-flex column-gap-5 "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            whiteSpace: "nowrap",
            width: `${cardsData.length * 220}px`,
          }}
        >
          {cardsData.map((item, index) => (
            <div
              key={index}
              className="card border-0"
              style={{ width: "210px" }}
            >
              <Link  href={`/${item.id}`} className=" text-decoration-none ">
                <div className="cardImage position-relative">
                  <Image
                    src={`/${item.img}`}
                    alt="hydro"
                    className=" rounded-2"
                    width={210}
                    height={130}
                    loading="lazy"
                  />
                  <div className="cardOverLay">
                    <span
                      className=" bg-black opacity-75 text-white p-2 rounded-4 position-absolute"
                      style={{ fontSize: "8px", top: "10px", left: "10px" }}
                    >
                      {item.price}
                    </span>
                  </div>
                </div>
                <div className="about p-2">
                  <h4
                    className="text-bold text-normal text-black fw-bold text-truncate "
                    style={{ fontSize: "12px" }}
                  >
                    {item.title}
                  </h4>
                  <div
                    className="para"
                    style={{
                      width: "200px",
                      height: "90px",
                      overflow: "hidden",
                    }}
                  >
                    <p
                      className="mt-2 overflow-hidden text-black text-truncate"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        fontSize: "10px",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 5,
                        textWrap: "wrap",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="ps-2 descript mt-1 d-flex justify-content-between align-items-center column-gap-1">
                <div className=" d-flex align-items-center">
                  {/* <Jazzicon diameter={13} /> */}
                  {/* <span className=" ms-1" style={{ fontSize: "10px" }}>
                    {item.creator}
                  </span> */}
                </div>
              </div>
              <div className=" d-flex align-items-center ms-1 ">
                <svg
                  onClick={() => handleClick(index)}  // Pass index to handleClick
                  style={{ cursor: "pointer", width: "24px", height: "24px" }}
                  fill={cardStates[index] ? "red" : "none"}
                  viewBox="0 0 24 24"
                  stroke={cardStates[index] ? 'none' : 'currentColor'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full mt-2"
                >
                  <path
                    d="M12 21.23l-1.06-1.06C5.39 15.47 2 12.39 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.89-3.39 6.97-8.94 11.67L12 21.23z"
                    style={{ transform: cardStates[index] ? "scale(1.1)" : "scale(1)" }}
                  />
                </svg>

                <Link
                  href={`/${item.id}`}
                  style={{ backgroundColor: "#192142" }}
                  className="mt-2 ms-2 text-center  text-white bg-gray-500 hover:bg-gray-700 font-bold py-1 px-3 rounded-2 text-decoration-none"
                >
                  Check details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollBooks(-scrollStep)}
          style={{
            backgroundColor: "#c3c3c3",
            height: "40px",
            borderRadius: "50%",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="position-absolute top-50 bg-dark start-0 text-white px-2 py-2 rounded-full"
        >
          &larr;
        </button>

        <button
          onClick={() => scrollBooks(scrollStep)}
          style={{
            backgroundColor: "#c3c3c3",
            height: "40px",
            borderRadius: "50%",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="position-absolute top-50 end-0 bg-dark text-white px-2 py-2 rounded-full"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default DisplayBook;


