import React from "react";

export default function AboutUs() {
    // Information about the organization
    const aboutUsInfo = "Welcome to our organization! We are a team of passionate individuals dedicated to making a positive impact on our community. Our mission is to [insert mission statement here].";
  
    return (
      <div>
        <h1>About Us</h1>
        <p>{aboutUsInfo}</p>
      </div>
    );
  }