import "./Card.css";
import param from "./param.jpeg";
function Card() {
    return (
      <div className="Headcardcss">
        <div className="content">
        <div className="hbox"></div>
          <div className="imgbox"><img className="img" src={param}
          alt=""></img></div>
          <div className="Name">Paramjeet</div>
          <ul class="social-icons">
            <li><a href="#"><i class="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/paramjeet-singh-05b4271a0/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
  
export default Card;