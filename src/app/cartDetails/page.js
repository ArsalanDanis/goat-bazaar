"use client";

import RazorpayPayment from "../components/RazorpayPayment";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBookfromCart } from "../redux/cartSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./cart.css";

const CartDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartData = useSelector((data) => data.cartsData.carts);
  const [quantities, setQuantities] = useState(Array(cartData.length).fill(1));
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state for login status

  // Function to update quantity for a specific item
  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  // Function to calculate total amount
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cartData.forEach((book, index) => {
      totalAmount += book.price * quantities[index];
    });
    return totalAmount;
  };

  const handlePaymentClick = () => {
    if (isLoggedIn) {
      // If logged in, proceed with Razorpay payment
      // You can also check if the total amount is greater than 0 before proceeding
      // to prevent unnecessary Razorpay requests for empty carts.
      // For simplicity, this example always allows payment.
      // Adjust the conditions based on your requirements.
      // Example:
      // if (isLoggedIn && calculateTotalAmount() > 0) {
      //   // Proceed with Razorpay payment
      //   // ...
      // }
    } else {
      // If not logged in, show alert and redirect to login page
      alert("Please Login first to proceed with payment");
      router.push("/usersSignUp");
    }
  };

  return (
    <>
      {cartData.length != 0 ? (
        <div>
          {" "}
          <div className="table-responsive cartComp container mt-4">
            <h1
              className="text-center font-bold m-4"
              style={{ fontFamily: "fantasy" }}
            >
              Carts Details
            </h1>
            <table className="table table-bordered table-striped ">
              <thead className=" col-lg">
                <tr>
                  <th>Items</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th style={{ Width: "150px" }}>Quantity</th>
                  <th>Total Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((book, index) => (
                  <tr key={book.id}>
                    <td>
                      <div className="d-flex flex-column">
                        <div className="d-flex flex-shrink-0">
                          <div className="ml-2">{`${index + 1}`}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img
                        className="rounded"
                        src={book.img}
                        alt="book"
                        width={75}
                        height={75}
                      />
                    </td>
                    <td>{book.title}</td>
                    <td>{`₹${book.price}`}</td>
                    <td>
                      <input
                        className=" w-25"
                        type="number"
                        value={quantities[index]}
                        onChange={(e) =>
                          handleQuantityChange(
                            index,
                            parseInt(e.target.value, 10)
                          )
                        }
                        min="1"
                      />
                    </td>
                    <td>{`₹${book.price * quantities[index]}`}</td>
                    <td>
                      <button
                        onClick={() =>
                          dispatch(removeBookfromCart({ _id: book._id }))
                        }
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center p-3">
            <p className="h4 font-weight-bold">
              Total Amount: ₹{calculateTotalAmount()}
            </p>
            {isLoggedIn ? (
              <RazorpayPayment totalAmount={calculateTotalAmount()} />
            ) : (
              <button
                className="btn btn-primary mt-3 w-50 pt-2 pb-2"
                onClick={handlePaymentClick}
                style={{ width: "200px" }}
              >
                Proceed to Payment
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className=" d-flex justify-content-center align-items-center">
          <Link href="/">
            <button
              className="btn btn-primary mt-3 pt-2 pb-2"
              style={{ maxWidth: "350px" }}
            >
              Your cart is currently empty. Please add items to proceed.
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartDetails;
