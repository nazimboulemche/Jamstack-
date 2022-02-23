import "../App.css";
import marketing from "../img/marketing-img.svg";

function Info() {
  return (
      <div className="AllInfos">
    <div className="AllInfo">
      <div>
        <div>
          <h1 className="titrethree">Best Digital Marketing Solution</h1>
          <p className="titretwo">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            <br />
            nonummy nibh euismod Lorem ipsum Lorem ipsum dolor sit amet, <br />
            hendrerit mel, es vidit eu lorem animal iracundia. Ius te altaltera
            essent <br />
            incorrupte.
          </p>
        </div>
        <div className="ff">
          <div className="cc">
            <img className="check" src={require("../img/check.png")} />
            <p>Hendrerit omittantur mel,es vidit eu lorem animal.</p>
          </div>
          <div className="cc">
            <img className="check" src={require("../img/check.png")} />
            <p>The best marketing company to boost your web</p>
          </div>
          <div className="cc">
            <img className="check" src={require("../img/check.png")} />
            <p>The Secrets to Successful About Hexan</p>
          </div>
        </div>
      </div>
    </div>
    <div >
    <img className="MarkImg" src={marketing} />
  </div>
  </div>
  );
}

export default Info;
