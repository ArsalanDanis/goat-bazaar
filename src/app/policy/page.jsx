"use client"
import React from 'react';

const PolicyComponent = () => {
  
  const policySections = [
    {
      title: 'Purchase Policy',
      content: 'Outline the process for purchasing goats from our website. Include information about available payment methods and any accepted currencies. Specify any age or legal requirements for purchasing goats.',
    },
    {
      title: 'Shipping Policy',
      content: 'Detail our shipping process, including the methods, timelines, and costs associated with delivering goats to customers. Provide information about shipping locations and any restrictions on where goats can be shipped.',
    },
    {
      title: 'Return Policy',
      content: 'Explain our policy regarding returns and exchanges of goats. Include any conditions for returning goats, such as time limits, condition requirements, or restocking fees. Clarify who is responsible for covering return shipping costs.',
    },
    {
      title: 'Health Guarantee',
      content: 'Provide information about any health guarantees or warranties offered with purchased goats. Explain the process for addressing health-related concerns or issues with purchased goats. Include any requirements for ing health-related claims or concerns.',
    },
    {
      title: 'Privacy Policy',
      content: 'Describe how we collect, use, and protect customer information. Detail any third parties with whom we may share customer information, such as shipping carriers or payment processors. Explain how customers can access or request changes to their personal information.',
    },
    {
      title: 'Terms of Service',
      content: 'Set forth the terms and conditions that govern the use of our website and the purchase of goats. Include information about intellectual property rights, prohibited uses, and limitations of liability.',
    },
    {
      title: 'Contact Information',
      content: 'Provide contact details for customers to reach out with questions, concerns, or feedback. Specify our preferred method of communication, whether it\'s email, phone, or a contact form on our website.',
    },
    {
      title: 'Disclaimer',
      content: 'Include a disclaimer stating that the information provided on our website is for general informational purposes only and is not intended as professional advice.',
    },
  ];

  return (
    <div className="py-5 px-5 bg-light" style={{ margin: "0 80px" }}>
      <h2 className="text-center mb-4 fw-bolder fs-1">Our Policy</h2>
      {policySections.map((section, index) => (
        <div className="row" key={index}>
          <div className="col">
            <h4 className=' fa-magic my-2 ms-3'>{section.title} :-</h4>
            <p className=' ms-5 my-2'>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolicyComponent;

