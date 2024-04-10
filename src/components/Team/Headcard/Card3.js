import "./Card.css";
import rohan from "./download.jpeg";
function Card() {
    return (
      <div className="Headcardcss">
        <div className="content">
        <div className="hbox"></div>
          <div className="imgbox"><img className="img" src={rohan}
          alt=""></img></div>
          <div className="Name">Diya</div>
          <ul class="social-icons">
            <li><a href="#"><i class="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/diya-agrawal-145076250/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
  
export default Card;