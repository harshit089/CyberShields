import "./Activities.css";

import Card1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import Card3 from "./Card/Card3";
import Card4 from "./Card/Card4";
import Card5 from "./Card/Card5";

function Activities() {
  return (
    <div className="Activities-container">
        <div className="Activities-head">Activities</div>
        
{/* <div> */}
    <div className="upper-align">
    <div className="upper-row">
          <Card1/>
          <Card2/>
          <Card3/>
    </div>
    </div>
    <div className="low-align">
      <div className="lower-row">
          <Card4/>
          <Card5/>
      </div>
    </div>
        
{/* </div> */}

    </div>
  );
}
export default Activities;