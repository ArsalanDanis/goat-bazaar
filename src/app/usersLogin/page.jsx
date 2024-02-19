"use client"

import React from "react";
// import Navbar from "../navbar/navbar";
// import { Link, useNavigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faGoogle,faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

 const SignIn = () => {
  const navigate = useRouter();
  const [field, setField] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const [isFilled, setIsFilled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!field.email || !field.password) {
      setErr("All fields must be filled");
      return;
    }

    setErr("");
    // setIsFilled(true);

    console.log(auth, field.email, field.password, "for testing");

    //doc s

    // const auth = getAuth();
    signInWithEmailAndPassword(auth, field.email, field.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Login Successful!");
        navigate.push("/");
        // ...
      })
      .catch((error) => {
        setErr(error.message);
      });
  };
  //doc e

  //   signInWithEmailAndPassword(auth, field.email, field.password)
  //     .then(async(userCredential) => {
  //       // Signed in
  //       const user =await userCredential.user;
  //       console.log(user);
  //       navigate("/");
  //       // ...
  //     })
  //     .catch((error) => {
  //       setErr(error.message);
  //     });

  //   console.log(field);
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
      setErr(error.message);
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
              <form className="border p-4 rounded-2">
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
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

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                    onClick={onGitHubSignIn}
                  >
                    {/* <i className="fab fa-github "></i> */}
                    <FontAwesomeIcon icon={faGithub} />
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                <hr className=" mt-0" />
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={(e) =>{
                      setField((prev) => ({ ...prev, email: e.target.value }));
                    setErr("")}
                    }
                  />
                </div>

                <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={(e) => {
                      setField((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }));
                      setErr("")
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

                <div className="text-center text-lg-start mt-4 pt-2">
                  <p style={{ color: "red", fontSize: "12px" }}>{err}</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={handleSubmit}
                    // disabled={isFilled}
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

export default SignIn;