import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

let imageStyle = {
    backgroundImage:
        'url("https://github.com/DK-Kim4312/images/blob/main/background_chess_bgm.png?raw=true")',
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
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