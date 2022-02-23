import "../App.css";
import json from "../json/site.json"

function Header() {
  return (
    <div>
      <div className="Logo">
        <div className="logo">
          <img src={require("../img/logo.png")} alt={"logo" } />
        </div>
      </div>
      <div className="TextImg">
        <div className="FullText">
          <h1 className="TextOne">{json.header.title}</h1>
          <p className="TextTwo">
          {json.header.description}
          </p>
          <button className="Button">{json.header.button}</button>
        </div>
        <div>
            <img  className="Image" src={require("../img/banner.png")} alt={ "banner"}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
