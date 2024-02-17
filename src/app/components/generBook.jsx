// components/DisplayBook.js
"use client"
import React, { useState, useEffect, useRef } from "react";
import { booksApi } from "../booksApi/booksApi";
import Link from "next/link";
``
import './generB.css'
import cardsData from "../contactUs/utils";


const GenerBook = () => {

  const genres = [
    { id: 1, genres: 'Dairy' },
    { id: 3, genres: 'Pet' },
    { id: 4, genres: 'Fiber' },
    { id: 6, genres: 'Brush Clearing' },
    { id: 7, genres: 'Dual Purpose' },
    { id: 2, genres: 'Meat' },
    // Add more genres as needed
  ];
  const booksData = booksApi.slice(0, 20);
  const [items, setItems] = useState([]);
  const scrollContainerRef = useRef(null);
  const scrollStep = 50; // Adjust this value for smooth scrolling speed
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
          behavior: 'smooth',
        });
      } else if (targetScroll > maxScroll) {
        // If scrolling to the right beyond the end, reset to the start
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // Otherwise, perform the normal smooth scroll
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
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
    <section className="mt-5 generComp">
      <h5 className="my-4" style={{fontSize:'32px',fontFamily:'serif',fontWeight:'bolder'}}>Browse by Genere</h5>
      <div className="position-relative ">
        <div
          ref={scrollContainerRef}
          className="d-flex overflow-x-hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            whiteSpace: "nowrap",
          }}
        >
          {cardsData.slice(0,6).map((item, index) => (
            <div key={index} className="">
              <div className="d-flex flex-column align-items-center justify-content-center ps-2 ms-5">
                {/* Image of the book */}
                <img
                  src={item.img}
                  alt="book"
                  width={140}
                  height={140}
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    // marginRight: "40px",
                    borderRadius: "5px",
                    backgroundColor:"#040440",
                    borderRadius:'50%',
                    // padding:'15px'
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />

                <div className="mt-4">
                  <h6
                    className="font-semibold "
                    style={{
                      maxWidth: "300px",
                      color: "black",
                      fontFamily: "fantasy",
                      fontSize:'14px'
                    }}
                  >
                    {item.genres}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollBooks(-scrollStep)}
          style={{
            backgroundColor: "black",
            height: "30px",
            borderRadius: "50%",
            width: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border:'none',
            bottom:'50px'
          }}
          className="position-absolute start-0 text-white px-2 py-2 rounded-full"
        >
          &larr;
        </button>

        <button
          onClick={() => scrollBooks(scrollStep)}
          style={{
            backgroundColor: "black",
            height: "30px",
            borderRadius: "50%",
            width: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border:'none',
            bottom:'50px'
          }}
          className="position-absolute end-0  text-white px-2 py-2 rounded-full"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default GenerBook;