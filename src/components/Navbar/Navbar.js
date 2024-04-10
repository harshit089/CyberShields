// import React from 'react';
// import "./Navbar.css";
// import logo from './logo.png';

// function Navbar() {
//   const handleScroll = (event, targetId) => {
//     event.preventDefault();
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop,
//         behavior: "smooth"
//       });
//     }
//   };

//   return (
//       <div className="containnav">
//         <div className='left-items-container'>
//             <a className="home-logo-anchor" href="#home" onClick={(e) => handleScroll(e, "home")}>
//               <img className="home-logo" src={logo}></img>
//             </a>

//             <div className="home-text"> Infosec IITG</div>  
//         </div>  

//         <div className="right-items-container">
//           <a href="#home" className="rightitem" onClick={(e) => handleScroll(e, "home")}>Home</a>
//           <a href="#gallery" className="rightitem" onClick={(e) => handleScroll(e, "gallery")}>Gallery</a>
//           <a href="#activities" className="rightitem" onClick={(e) => handleScroll(e, "activities")}>Activities</a>
//           <a href="#eab" className="rightitem" onClick={(e) => handleScroll(e, "eab")}>EAB</a>
//           <a href="#team" className="rightitem" onClick={(e) => handleScroll(e, "team")}>Team</a>
//         </div>

//         <img className="mogo" src={logo}></img>
//       </div>
//   );
// }

// export default Navbar;







// import React, { useState } from 'react';
// import "./Navbar.css";
// import logo from './logo.png';
// import Slideswipe from './slideswipe'; // Import the side-wise nav bar component

// function Navbar() {

//   const [showSideNav, setShowSideNav] = useState(false); // State for controlling side-wise nav bar visibility

//   const handleToggleSideNav = () => {
//     setShowSideNav(!showSideNav); // Toggle side-wise nav bar visibility
//   };

//   const handleScroll = (event, targetId) => {
//     event.preventDefault();
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop,
//         behavior: "smooth"
//       });
//     }
//   };

//   return (
//     <div className="containnav">
//       <div className='left-items-container'>
//         <a className="home-logo-anchor" href="#home" onClick={(e) => handleScroll(e, "home")}>
//           <img className="home-logo" src={logo} alt="Logo"></img>
//         </a>

//         <div className="home-text"> Infosec IITG</div>
//       </div>

//       <div className="right-items-container">
//         <a href="#home" className="rightitem" onClick={(e) => handleScroll(e, "home")}>Home</a>
//         <a href="#gallery" className="rightitem" onClick={(e) => handleScroll(e, "gallery")}>Gallery</a>
//         <a href="#activities" className="rightitem" onClick={(e) => handleScroll(e, "activities")}>Activities</a>
//         <a href="#eab" className="rightitem" onClick={(e) => handleScroll(e, "eab")}>EAB</a>
//         <a href="#team" className="rightitem" onClick={(e) => handleScroll(e, "team")}>Team</a>
//       </div>

//       {/* Button to toggle side-wise nav bar */}
//       <img className="mogo" src={logo} alt="Mogo" onClick={handleToggleSideNav}></img>

//       {/* Conditionally render side-wise nav bar */}
//       {showSideNav && <Slideswipe />}
//     </div>
//   );
// }

// export default Navbar;






import React, { useState } from 'react';
import "./Navbar.css";
import "./slideswipe.css";
import logo from './logo.svg';
import hamburg from './hamburg.png'
import slide_close from './slide_close.png'

function Navbar() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="containnav">
      <div className='left-items-container'>
        <a className="home-logo-anchor" href="#home" onClick={(e) => handleScroll(e, "home")}>
          <img className="home-logo" src={logo} alt="Logo"></img>
        </a>
        <div className="home-text"> Infosec IITG</div>  
      </div>  

      <div className="right-items-container">
        <a href="#home" className="rightitem" onClick={(e) => handleScroll(e, "home")}>Home</a>
        <a href="#gallery" className="rightitem" onClick={(e) => handleScroll(e, "gallery")}>Gallery</a>
        <a href="#activities" className="rightitem" onClick={(e) => handleScroll(e, "activities")}>Activities</a>
        <a href="#eab" className="rightitem" onClick={(e) => handleScroll(e, "eab")}>EAB</a>
        <a href="#team" className="rightitem" onClick={(e) => handleScroll(e, "team")}>Team</a>
      </div>

      <img className="hamburg" src={hamburg} onClick={toggleSideNav} alt=""></img>

      {/* Side-wise navigation bar */}
      <div className={`slideswipe-container ${isSideNavOpen ? 'open' : ''}`}>
      <img className="slide-close" src={slide_close} onClick={toggleSideNav} alt=""></img>
      <div className='slide-link-container'>
      <a href="#home" className="slide-link" onClick={(e) => { handleScroll(e, "home"); toggleSideNav(); }}>Home</a>
        <a href="#gallery" className="slide-link" onClick={(e) => { handleScroll(e, "gallery"); toggleSideNav(); }}>Gallery</a>
        <a href="#activities" className="slide-link" onClick={(e) => { handleScroll(e, "activities"); toggleSideNav(); }}>Activities</a>
        <a href="#eab" className="slide-link" onClick={(e) => { handleScroll(e, "eab"); toggleSideNav(); }}>EAB</a>
        <a href="#team" className="slide-link" onClick={(e) => { handleScroll(e, "team"); toggleSideNav(); }}>Team</a>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
