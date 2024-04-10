import "./Card.css";
import saun from "./saun.jpg";

function Card() {
  return (
    <div className="Corecardcss">
      <div className="ccontent">
        <div className="cbox"></div>
        <div className="imgbox">
          <img className="img" src={saun} alt=""></img>
        </div>
        <div className="Name">Saundarya</div>
        <ul class="social-icons">
          <li>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/saundaryakeshari/" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
