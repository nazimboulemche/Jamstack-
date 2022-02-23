import "../App.css";
import json from "../json/site.json"

function Contact() {
    function encode(data) {
        return Object.keys(data)
          .map(
            (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
      
      const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": event.target.getAttribute("name"),
            // eslint-disable-next-line no-restricted-globals
            ...name,
          }),
        })
          .catch((error) => alert(error));
      };
 

  return (
    <div>
      <div className="TextImgTwo">
        <h1 className="titreone">{json.contact.title}</h1>
        <p className="titretwo">
        {json.contact.description}
        </p>
      </div>
      <div className="TextArea">
          <form name="contact" method="post" onSubmit={handleSubmit} netlify >
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
