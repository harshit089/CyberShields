import "./EAB.css";
import React, { useState } from 'react';
import eabimage1 from "./osint.png"
import eabimage2 from "./eab.png"
import eabimage3 from "./comingsoon.webp"
import Explore_blog_button from "../blogs/BlogsWindow"

function EAB() {
    const eabimageArray=[eabimage1,eabimage3,eabimage1];
    const [eabindex,Seteabindex]=useState(0);
  return (
    <div className="EAB-container">
        {/* <div className="EAB-nav-align"> */}
            <div className="EAB-nav">

                <div className={`EAB-button-line${eabindex===0?"-open":""}`}>
                    <button className="EAB-button" onClick={()=>Seteabindex(0)}>Events</button>
                </div>
                <div className={`EAB-button-line${eabindex===1?"-open":""}`}>
                    <button className="EAB-button" onClick={()=>Seteabindex(1)}>Achievements</button>
                </div>
                {/* <div className={`EAB-button-line${eabindex===2?"-open":""}`}>
                    <button className="EAB-button" onClick={()=>Seteabindex(2)}>Blogs</button>
                </div> */}

            </div>
        {/* </div> */}

        <div className="EAB-box-div">
        <div className="EAB-box">
            <img className="eabimage" src={eabimageArray[eabindex]} alt=""></img>
        </div>
        </div>
        <Explore_blog_button/>
    </div>
  );
}
export default EAB;
