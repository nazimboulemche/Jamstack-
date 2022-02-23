import "../App.css";

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
        <h1 className="titreone">Contact</h1>
        <p className="titretwo">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod Lorem ipsum
        </p>
      </div>
      <div className="TextArea">
          <form name="contact" method="post" onSubmit={handleSubmit} netlify >
             <input type="hidden" name="form-name" value="contact"/>
             <input className="TextInput" type="email" name="message" placeholder="  MAIL"/>
             <button className="Submit" type="submit">SUBMIT</button> 
          </form>
        
      </div>
      <div className="logotwo">
          <img src={require("../img/logo.png")} alt ={"logo"} />
        </div>
        <p className="copyright">© all Rights Reserved by Hexan</p>
    </div>
  );
}

export default Contact;
