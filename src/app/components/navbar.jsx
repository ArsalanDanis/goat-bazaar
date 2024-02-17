"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import './navbar.css'

const Navbar = () => {
  const { toggleMode, isDarkMode } = useTheme();
  console.log("Toggle", toggleMode);
  const cartLength = useSelector((item) => item.cartsData.carts.length);
  const usersData = useSelector((user) => user.usersData.users);
  const loginsData = useSelector((state) => state.loginsData.logedInUsers);
  const lastLoggedInUserName =
    usersData.length > 0 ? usersData[usersData.length - 1].name : null;

  const modeToggle = {
    display: 'inline-flex',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    border: "none",
    padding: "5px",
    marginRight:'15px',
    color: "#333",
    cursor: "pointer",
    borderRadius: "50%",
  };

  return (
    <div className=" navbarComp"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "10",
        backdropFilter: "blur(30px)",
        backgroundColor: "rgba(0, 0, 44, 0.7)",
      }}
    >
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background:
            "linear-gradient(to bottom, #000 30%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image
              src="/g4.jpeg"
              width={35}
              height={35}
              alt="logo"
              style={{ borderRadius: "50%" }}
            />{" "}
            <span className=" text-white">
              {" "}
              <span style={{ color: "#f7db49" }}>
                <b>Goat</b>
              </span>
              Bazaar
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{backgroundColor:'aliceblue'}}
          >
            <span className="navbar-toggler-icon " style={{color:'white',width:"20px",height:'20px'}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/contactUs">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/policy">
                  Policy
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="text-white nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            {/* <div style={modeToggle} onClick={toggleMode}>
              {isDarkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
            </div> */}
            <form
              className="d-flex "
              role="search"
              style={{ columnGap: "20px" }}
            >
              <input
                className="form-control formInpt me-2"
                style={{ width: "200px" }}
                type="search"
                placeholder="Search goats"
                aria-label="Search"
              />
              <Link className=" text-white" type="submit" href="/cartDetails">
                <FaShoppingCart
                  size={25}
                  color="white"
                  style={{ marginTop: "8px", marginRight: "10px" }}
                />
                {cartLength != 0 && (
                  <span
                    style={{
                      backgroundColor: "red",
                      borderRadius: "50%",
                      height: "20px",
                      width: "20px",
                      display: "inline-flex",
                      position: "relative",
                      right: "27px",
                      bottom: "7px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {cartLength}
                  </span>
                )}
              </Link>
            </form>
            <Link href="/usersSignUp">
              {usersData.length > 0 && loginsData.length != 0 ? (
                <img
                  src={usersData[usersData.length - 1].userImage}
                  alt="userImage"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <FaUser size={20} color="white" />
              )}
              {/* */}
            </Link>
            <Link className="text-white text-decoration-none" href="/userLogin">
              {/* {loginsData.length != 0
                ? usersData[usersData.length - 1].name
                : null} */}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
