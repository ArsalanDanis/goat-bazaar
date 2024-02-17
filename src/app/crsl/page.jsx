
"use client";
import React, { useState, useEffect, useRef } from "react";
import { booksApi } from "../booksApi/booksApi";
import Link from "next/link";
``;
const PopularAuthor = () => {
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
    <section className="mt-5" style={{ margin: "0px 80px" }}>
      <h5
        className="my-4"
        style={{ fontSize: "32px", fontFamily: "serif", fontWeight: "bolder" }}
      >
        Popular Authors
      </h5>
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
          {booksData.map((book, index) => (
            <div key={index} className="">
              <div className="d-flex flex-column ps-1 align-items-center">
                {/* Image of the book */}
                <div
                  style={{
                    transition: "transform 0.3s ease-in-out",
                    marginRight: "20px",
                    borderRadius: "5px",
                    backgroundColor: "navy",
                    borderRadius: "15px",
                    padding: "15px",
                    width: "230px",
                    height: "120px",
                  }}
                >
                  <div className="mt-4">
                    <h2
                      className="font-semibold ms-3"
                      style={{
                        maxWidth: "300px",
                        color: "white",
                        fontFamily: "fantasy",
                        fontSize: "20px",
                      }}
                    >
                      {book.author}
                    </h2>
                  </div>
                  <h2
                      className=" ms-3 my-1"
                      style={{
                        maxWidth: "300px",
                        color: "white",
                        fontFamily: "serief",
                        fontSize: "14px",
                        opacity:'0.8'
                      }}
                    >
                      {book.work}
                    </h2>
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
            border: "none",
            bottom: "50px",
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
            border: "none",
            bottom: "50px",
          }}
          className="position-absolute end-0  text-white px-2 py-2 rounded-full"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
};

export default PopularAuthor;
