import React from "react";
import './aboutus.css';

export default function AboutUs() {
    const aboutUsInfo = "Welcome to our Project! We are the Mad Hackers of 2023. We are a group of students from the University of Wisconsin-Madison with a common goal to make chess players' lives better by providing the REVOLUTIONARY positional puzzle powered by Stockfish 16.";

    return (
        <div className="about-us-container">
            <h1>About Us</h1>
            <p>{aboutUsInfo}</p>
            <div className="developer-images">
                <img className="image-placeholder" alt = "Dev1Image" height = "200px" src="/Vincent_BAGM.png"
            ></img>
                <img className="image-placeholder" alt = "Dev2Image" height = "200px" src="/DK_BAGM.png"
            ></img>
               <img className="image-placeholder" alt = "Dev3Image" height = "200px" src="/Gavin_BAGM.png"
            ></img>
            </div>
            <div className="developer-images">
                <div>Vincent Cimino</div>
                <div>Dongku(DK) Kim</div>
                <div>Gavin Wang</div>
            </div>
        </div>
    );
}
