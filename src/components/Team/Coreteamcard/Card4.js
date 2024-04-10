import "./Card.css";
import rohan from "./rohan.png";

function Card() {
  return (
    <div className="Corecardcss">
      <div className="ccontent">
        <div className="cbox"></div>
        <div className="imgbox">
          <img className="img" src={rohan} alt=""></img>
        </div>
        <div className="Name">Harshit</div>
        <ul class="social-icons">
          <li>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
