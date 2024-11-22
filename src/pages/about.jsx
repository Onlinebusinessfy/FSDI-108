import "./styles/about.css"
import { useState } from "react";

function About(){
    const [visibleEmail, setVisibleEmail]=useState(false);

    function showEmail(){
        setVisibleEmail(true);
    }
    return(
        <div className="about">
            <h3>About Us</h3>
            <div className="box">
                <h2>Samuel Dominguez</h2>
                {visibleEmail ? <h5>Samuel.Dominguez@sdgku.edu</h5> : <label>Click the button to see my Email.</label>}
                <br/>
                {
                    !visibleEmail
                        ? <button onClick={showEmail} className="btn btn-outline-dark btn-distance">Show Email</button>:null
                }
            </div>
        </div>
    );
}

export default About;