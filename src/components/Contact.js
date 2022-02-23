import "../App.css";

function Contact() {
  return (
    <div>
      <div className="TextImgTwo">
        <h1 className="titreone">Contact</h1>
        <p className="titretwo">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod Lorem ipsum
        </p>
      </div>
      <div className="TextArea">
        <input className="TextInput" type="textarea" placeholder="  MAIL" />
        <button className="Submit">SUBMIT</button>
      </div>
      <div className="logotwo">
          <img src={require("../img/logo.png")} />
        </div>
        <p className="copyright">© all Rights Reserved by Hexan</p>
    </div>
  );
}

export default Contact;
