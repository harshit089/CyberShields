import "./Team.css";
import Headcard1 from "./Headcard/Card1";
import Headcard2 from "./Headcard/Card2";
import Headcard3 from "./Headcard/Card3";

import CTcard1 from "./Coreteamcard/Card1";
import CTcard2 from "./Coreteamcard/Card2";
import CTcard3 from "./Coreteamcard/Card3";
import CTcard4 from "./Coreteamcard/Card4";

function Team() {
  return (
    <div className="Team-container">
        <div className="Team-heading">Team</div>
        <div className="Heads-title">Heads</div>
        <div className="Head-card-align">
            <div className="Head-card">
                <Headcard1/>
                <Headcard2/>
                <Headcard3/>
            </div>
        </div>
        <div className="CoreTeam-title">CoreTeam</div>
        <div className="Core-Team">
              <CTcard1/>
              <CTcard2/>
              <CTcard3/>
              <CTcard4/>
        </div>
    </div>
  );
}

export default Team;