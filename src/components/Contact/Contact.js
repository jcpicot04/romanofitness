import React from "react";

const Contact = () => {
  require("./Contact.css");

  return (
    <div className="contact-form">
      <h1 id="header-form">CONTACTO</h1>

      <form id="form" className="topBefore" action="https://formsubmit.co/a9a24952ac49b7f3104cbe28d97f993f" method="POST">
        <input type="hidden" name="_captcha" value="false"/>
        <input type="hidden" name="_subject" value="Nuevo correo desde la web!"/>
        <input type="hidden" name="_template" value="table"/>
        <input type="hidden" name="_next" value={window.location.href+'?mail'}></input>
        <input id="email" type="email" name="email" placeholder="E-MAIL" required/>
        <textarea id="message" type="text" name="message" placeholder="MENSAJE" required></textarea>
        <input id="submit" type="submit" value="ENVIAR!" />
      </form>
    </div>
  );
};

export default Contact;
