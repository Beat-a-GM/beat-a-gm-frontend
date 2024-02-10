import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';


let imageStyle = {
    backgroundImage:
        `url(/background_chess_bgm.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center", 
    color: "white",
};
function Home() {
    return (
        <div style={imageStyle}>
            <div className="home" >
                <Link to="/play">
                    <button className="futuristic-button" >START TRAINING</button>
                    
                </Link>
            </div>
        </div>
    );
}

export default Home;