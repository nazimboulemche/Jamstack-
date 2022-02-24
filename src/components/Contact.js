import "../App.css";
import json from "../json/site.json"

function Contact() {
    

  return (
    <div className="AllContact GlobalSection">
      <div className="TextImgTwo">
        <h1 className="titreone">{json.contact.title}</h1>
        <p className="titretwo">
        {json.contact.description}
        </p>
      </div>
      <div className="TextArea">
          <form name="contact" method="post" netlify >
             <input type="hidden" name="form-name" value="contact"/>
             <input className="TextInput" type="email" name="message" placeholder="  MAIL"/>
             <button className="Submit" type="submit">{json.contact.boutton}</button> 
          </form>
        
      </div>
      <div className="logotwo">
          <img src={require("../img/logo.png")} alt ={"logo"} />
        </div>
        <p className="copyright">{json.contact.text}</p>
    </div>
  );
}

export default Contact;
