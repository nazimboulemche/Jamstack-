import "../App.css";

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
          <h1 className="TextOne">Make Business with us & become beautiful</h1>
          <p className="TextTwo">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/>
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an <br/>
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="Button">GET STARTED</button>
        </div>
        <div>
            <img  className="Image" src={require("../img/banner.png")} alt={ "banner"}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
