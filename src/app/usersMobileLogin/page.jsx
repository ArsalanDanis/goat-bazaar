"use client"

import React from "react";
// import Navbar from "../navbar/navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";



import { auth } from "../firebase/firebase";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

 const MobileAuth = () => {
  const navigate = useRouter();
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmObj, setConfirmObj] = useState(null);
  const [err, setErr] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  const getOTP = async(e) => {
    e.preventDefault();
    setErr("");
    if (number == "" || number == undefined) {
      return setErr("Please Enter a valid Phone Number!");
    }
    try {
      const response = await setUpRecaptcha(number);
      setConfirmObj(response);
      console.log(response, number, "OOP");
    } catch (error) {
      setErr(error.message);
    }
  };

  console.log(confirmObj,"=====!!!")
  const setUpRecaptcha = (number) => {
    const recapthaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    );
    // console.log(recapthaVerifier, "========");
    recapthaVerifier.render();
    return signInWithPhoneNumber(auth, number, recapthaVerifier);
  };

  console.log(typeof otp,otp,"OTP");

  const handleSubmit = async () => {
    console.log(otp);
    if (otp == "" || otp == null) return;
    try {
      setErr("");
      console.log(typeof otp,otp,"OTP");
      await confirmObj.confirm(otp);
      alert("Login Successfull!")
      navigate.push("/");
    } catch (error) {
      setErr(error.message);
    }
  };

  const onGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate.push("/");
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      
      });
  };

  
  const onFacebookSignIn = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const onGitHubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };


  return (
    <>
      {/* <Navbar /> */}
      <section className="vh-90 mt-4">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form className=" border p-4 rounded-2">
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                    onClick={onGoogleSignIn}
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                 <hr className=" mt-0" />
                <div className="form-outline">
                  <label className="form-label" htmlFor="email">
                    Mobile Number
                  </label>
                  <PhoneInput
                    id="phoneNumber"
                    placeholder="Enter a valid mobile number"
                    className="form-control form-control-lg"
                    value={number}
                    onChange={(e) => setNumber(e)}
                    // style={{ border:'none'}}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-1"
                  style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
                  onClick={getOTP}
                  // disabled={isFilled}
                >
                  Send OTP
                </button>
                <div id="recaptcha-container" className=" mt-2"></div>

                <div className="form-outline mt-2 mb-3">
                  <label className="form-label" htmlFor="password">
                    Otp
                  </label>
                  <input
                    type="text"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Enter otp"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <p style={{ color: "red", fontSize: "12px" }}>{err}</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleSubmit}
                    disabled={isFilled}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Dont have an account?{" "}
                    <Link href="/usersSignUp" className="link-danger">
                      Create a new account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      
      </section>
    </>
  );
};

export default MobileAuth;
