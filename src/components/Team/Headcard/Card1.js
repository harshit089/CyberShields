import "./Card.css";
import harshit from "./harshit.jpeg";

function Card() {
  return (
    <div className="Headcardcss">
      <div className="content">
        <div className="hbox"></div>
        <div className="imgbox">
          <img className="img" src={harshit} alt=""></img>
        </div>
        <div className="Name">Harshit</div>
        <ul class="social-icons">
          <li>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/harshit002/" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
