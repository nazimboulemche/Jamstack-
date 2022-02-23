import "../App.css";
import seo from "../img/seo.svg";
import technology from "../img/technology.svg";
import cloud from "../img/cloud.svg"
import support from "../img/support.svg"
import json from "../json/site.json"


function Services() {
  return (
    <div className="TextImgTwo">
      <div>
        <h1 className="titreone">{json.services.title}</h1>
        <p className="titretwo">
        {json.services.subtitle}
        </p>
      </div>
      <div className="All">
        <div className="first">
          <img className="seo" src={seo} alt={"icons"}/>
          <h3 className="txt">{json.first.title}</h3>
          <p>{json.first.subtitle}</p>
        </div>
        <div className="first">
          <img className="technology" src={technology} alt={"icons"}/>
          <h3 className="txt">{json.second.title}</h3>
          <p>{json.second.subtitle}</p>
        </div>
        <div className="first">
          <img className="cloud" src={cloud} alt={"icons"}/>
          <h3 className="txt">{json.third.title}</h3>
          <p>{json.third.subtitle}</p>
        </div>
        <div className="first">
          <img className="support" src={support} alt={"icons"}/>
          <h3 className="txt">{json.fourth.title}</h3>
          <p>{json.fourth.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
