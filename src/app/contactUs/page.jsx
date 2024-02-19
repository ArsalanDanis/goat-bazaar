"use client"
import React from 'react';
import Image from 'next/image';
import cardsData from './utils';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <>
      <div className=" z-depth-1 my-5 px-0"  style={{ margin: "0px 80px" }}>

        <section className="my-md-5" style={{
          backgroundImage:"url('/contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        //   filter: "brightness(70%)"
        
        }}>
          <div className="rgba-black-strong rounded p-5">
            
            <form className="mx-md-5  " action="">
              <div className="row">
                
                <div className="col-md-5 fw-bold offset-md-1 mt-md-4 mb-4 text-white">
                  <h5 className=" fw-bold">Address</h5>
                  <br />
                  <p className="mb-0">Gorakhnath</p>
                  <p className="mb-0">Gorakhpur, 273015</p>
                  <p className="mb-4 pb-2">Uttar Pradesh</p>
                  <h5 className="font-weight-bold">Phone</h5>
                  <p className="mb-4 pb-2">+91-8808213333</p>
                  <h5 className="font-weight-bold">Email</h5>
                  <p>farhandanish1992@gmail.com</p>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card rounded-2">
                  <h3 className="text-center font-weight-bold text-black mt-3 " style={{fontFamily:'serif'}}>Send Us A Message</h3>
                    <div className="card-body mt-2  px-4">
                      <div className="md-form md-outline mt-0">
                        <label htmlFor="name " className=' border w-100 p-2 border-bottom-0 fs-6'>NAME *</label>
                        <input type="text" placeholder='Enter Your Name' id="name" className="form-control border rounded-0 "/>
                      </div>
                      <div className="md-form md-outline my-2">
                        <label htmlFor="email" className=' border w-100 p-2 border-bottom-0 fs-6'>EMAIL ADDRESS *</label>
                        <input type="text" placeholder='Email' id="email" className="form-control rounded-0"/>
                      </div>
                      <div className="md-form md-outline ">
                        <label htmlFor="message" className=' border w-100 p-2 border-bottom-0 fs-6'>YOUR MESSAGE *</label>
                        <textarea id="message" placeholder='Message' className="md-textarea form-control rounded-0" rows="4"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary btn-md btn-block ml-0 my-3">Submit inquiry</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

      </div>
      
    </>
  );
};

export default ContactUs;


