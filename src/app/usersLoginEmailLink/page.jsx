"use client";
import React from "react";
// import Navbar from "../navbar/navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
// import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

import { auth, colRef } from "../firebase/firebase";
// import { addDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useRouter();
  const [field, setField] = useState({
    name: "",
    email: "",
  });
  const [err, setErr] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  const sendSingnInLink = () => {
    if (!field.name || !field.email) {
      setErr("All field must be filled");
      return;
    }
    setErr("");
    sendSignInLinkToEmail(auth, field.email, {
      url: "http://localhost:3000", // Update with your website URL
      handleCodeInApp: true,
    })
      .then(() => {
        localStorage.setItem("emailForSignIn", field.email);
        alert("Sign in Link sent successfully! Check your email.");
        console.log(email);
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  // const handleSubmit = (e) => {
  //   if (!field.name || !field.email || !field.password) {
  //     setErr("All field must be filled");
  //     return;
  //   }

  //   if (field.password.length < 6) {
  //     setErr("Password should be at least 6 characters");
  //     return;
  //   }
  //   setErr("");
  //   // setIsFilled(true);
  //   //doc

  //   createUserWithEmailAndPassword(auth, field.email, field.password)
  //     .then(async (userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       addDoc(colRef, {
  //         userName: field.name,
  //         email: field.email,
  //         password: field.password,
  //       });
  //       console.log(user);
  //       alert("Sign Up successfull !");
  //       await updateProfile(user, {
  //         displayName: field.name,
  //       });
  //       navigate.push("/usersLogin");

  //       // ...
  //     })
  //     .catch((error) => {
  //       setErr(error.message);
  //       // ..
  //     });
  //   //doc a
  // };

  const onGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate.push("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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

  // const onLinkedInSignIn = () => {
  //   const linkedinProvider = new LinkedInAuthProvider();
  //   signInWithPopup(auth, linkedinProvider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorCode, errorMessage);
  //     });
  // };

  return (
    <>
      {/* <Navbar /> */}
      <section className="vh-90 mt-4">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form className=" border p-4 rounded-2">
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                    onClick={onFacebookSignIn}
                  >
                    {/* <i className="fab fa-facebook-f"></i> */}
                    <FontAwesomeIcon icon={faFacebookF} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                    onClick={onGoogleSignIn}
                  >
                    {/* <i className="fab fa-google"></i> */}
                    <FontAwesomeIcon icon={faGoogle} />
                  </button>

                  {/* <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                    onClick={onLinkedInSignIn}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </button> */}

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                    onClick={onGitHubSignIn}
                  >
                    {/* <i className="fab fa-github"></i> */}
                    <FontAwesomeIcon icon={faGithub} />
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => navigate.push("/usersMobileLogin")}
                    // disabled={isFilled}
                    // style={{
                    //   paddingLeft: "2.5rem",
                    //   paddingRight: "2.5rem",
                    //   fontSize: "20px",
                    // }}
                  >
                    Sign Up with Mobile Number
                  </button>
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                <hr />

                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control form-control-lg"
                    placeholder="Enter your Name"
                    onChange={(e) => {
                      setField((prev) => ({ ...prev, name: e.target.value }));
                      setErr("");
                    }}
                  />
                </div>

                <div className="form-outline mb-2">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={(e) => {
                      setField((prev) => ({ ...prev, email: e.target.value }));
                      setErr("");
                    }}
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

                <div className="text-center text-lg-start mt-2 pt-2">
                  <p style={{ color: "red", fontSize: "12px" }}>{err}</p>
                  <div className="buttuns d-flex column-gap-2">
                    <button
                      type="button"
                      className="btn btn-primary "
                      onClick={sendSingnInLink}
                      // disabled={isFilled}
                      // style={{
                      //   paddingLeft: "2.5rem",
                      //   paddingRight: "2.5rem",
                      //   // cursor: "not-allowed",
                      // }}
                    >
                      Send Sign-in Link
                    </button>
                    {/* <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => navigate("/mobile")}
                      // disabled={isFilled}
                      // style={{
                      //   paddingLeft: "2.5rem",
                      //   paddingRight: "2.5rem",
                      //   fontSize: "20px",
                      // }}
                    >
                      Sign Up with Mobile Number
                    </button> */}
                  </div>

                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <Link href="/usersLogin" className="link-danger">
                      sign In
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

export default SignUp;



















// import { useEffect, useState } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyAnYatkilEnQlRbpjNidMwbZZ9e0s-kc2Q",
//   authDomain: "bookmart-f5d3b.firebaseapp.com",
//   projectId: "bookmart-f5d3b",
//   storageBucket: "bookmart-f5d3b.appspot.com",
//   messagingSenderId: "200970634484",
//   appId: "1:200970634484:web:b78a9d0d37baabf3b48aa1",
//   measurementId: "G-2FCSL8K0N1"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const Home = () => {
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');

//   const sendOTP = () => {
//     sendSignInLinkToEmail(auth, email, {
//       url: 'http://localhost:3000', // Update with your website URL
//       handleCodeInApp: true,
//     })
//     .then(() => {
//       localStorage.setItem('emailForSignIn', email);
//       alert('Sign in Link sent successfully! Check your email.');
//       console.log(email)
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   };

//   const confirmOTP = () => {
//     signInWithEmailLink(auth, email, window.location.href)
//       .then(() => {
//         alert('Sign in successful!');
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     // Handle email verification on page load
//     if (isSignInWithEmailLink(auth, window.location.href)) {
//       let email = localStorage.getItem('emailForSignIn');
//       if (!email) {
//         email = window.prompt('Please provide your email for confirmation');
//       }

//       signInWithEmailLink(auth, email, window.location.href)
//         .then(() => {
//           // User signed in successfully
//           alert('Sign in successful!');
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Email OTP Authentication</h1>

//       <label>Email:</label>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       <br />

//       <label>OTP:</label>
//       <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
//       <br />

//       <button onClick={sendOTP}>Send OTP</button>
//       <button onClick={confirmOTP}>Sign In</button>
//     </div>
//   );
// };

// export default Home;

//new one above is best
