import "../App.css";
import seo from "../img/seo.svg";
import technology from "../img/technology.svg";
import cloud from "../img/cloud.svg"
import support from "../img/support.svg"

function Services() {
  return (
    <div className="TextImgTwo">
      <div>
        <h1 className="titreone"> Services</h1>
        <p className="titretwo">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod Lorem ipsum
        </p>
      </div>
      <div className="All">
        <div className="first">
          <img className="seo" src={seo} alt={"icons"}/>
          <h3 className="txt">Market Research</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="first">
          <img className="technology" src={technology} alt={"icons"}/>
          <h3 className="txt">Latest Technology</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="first">
          <img className="cloud" src={cloud} alt={"icons"}/>
          <h3 className="txt">Data Processing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
        <div className="first">
          <img className="support" src={support} alt={"icons"}/>
          <h3 className="txt">Customer Support</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
