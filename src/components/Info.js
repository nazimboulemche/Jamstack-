import "../App.css";
import marketing from "../img/marketing-img.svg";
import json from "../json/site.json"

function Info() {
  return (
      <div className="AllInfos">
    <div className="AllInfo">
      <div>
        <div>
          <h1 className="titrethree">{json.info.title}</h1>
          <p className="titretwo">
          {json.info.description}
          </p>
        </div>
        <div className="ff">
          <div className="cc">
            <img className="check" src={require("../img/check.png")} alt={"check"} />
            <p>{json.info.textone}</p>
          </div>
          <div className="cc">
            <img className="check" src={require("../img/check.png")} alt={"check"}/>
            <p>{json.info.texttwo}</p>
          </div>
          <div className="cc">
            <img className="check" src={require("../img/check.png")} alt={"check"}/>
            <p>{json.info.textthree}</p>
          </div>
        </div>
      </div>
    </div>
    <div >
    <img className="MarkImg" src={marketing} alt={"marketing"}/>
  </div>
  </div>
  );
}

export default Info;
