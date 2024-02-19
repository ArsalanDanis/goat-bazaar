// RazorpayPayment.js
"use client"
import React from 'react';
import Razorpay from 'react-razorpay';

const RazorpayPayment = ({ totalAmount }) => {
  const options = {
    key_id: 'YOUR_RAZORPAY_KEY_ID',
    amount: totalAmount * 100, // Amount in paise
    name: 'Your Company Name',
    description: 'Payment for books',
    image: '/img1.jpg',
    handler: (response) => {
      // Handle the success callback here
      console.log(response);
    },
    prefill: {
      name: 'Customer Name',
      email: 'customer@example.com',
      contact: '1234567890',
    },
    notes: {
      address: 'Customer Address',
    },
    theme: {
      color: '#3399cc',
    },
  };

  return <Razorpay {...options}>Pay ₹{totalAmount}</Razorpay>;
};

export default RazorpayPayment;
