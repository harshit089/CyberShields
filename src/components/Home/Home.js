import "./Home.css";
import logo from "./logo.svg";
// import arrow from "./arrow.png";

function Home() {
  return (
    // <div className="container">
    //     <div className="content">
    //     <img className="biglogo" src = {logo}></img>
    //         <div className="main">Cybershields</div>
    //         <div className='main'>Hacking for Good at IITG!</div>
    //         <div className="bline">Join InfosecIITG team , your gateway to hacking</div>
    //         <button class="github-button">GitHub <img className="gitarrow" src = {arrow}></img></button>
    //         <button class="discord-button">Discord </button>  
    //   </div>
    // </div>
    <div className="Home-container">
<div className="Home-design">
    <div className="Logo-div"><img className="biglogo" src = {logo} alt=""></img></div>
      <div className="main-title-container">
      <div className="main-title">Cybershields</div>
      <div className='main-title'>Hacking for Good at IITG!</div>
      </div>

      <div className="bline">Join InfosecIITG team , your gateway to hacking</div>

      <div className="Home-button">
      <button class="github-button">GitHub 
      {/* <img className="gitarrow" src = {arrow}></img> */}
      </button>
      <button class="discord-button">Discord </button>
      </div>
</div>
    </div>
  );
}
export default Home;
