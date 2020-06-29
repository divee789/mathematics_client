import React from "react";
import Footer from "../Footer";
import "./index.scss";

const Staff = () => (
  <section className="footer_cont">
    <section className="contact_section">
      <h1>Have Questions In Mind ?</h1>
      <p>
        We are available to answer all your enquiries, please drop your email
        below and we will contact you within 24 hours.
      </p>
      <div>
        <input type="email" />
        <button>SEND</button>
      </div>
    </section>
    <Footer />
  </section>
);

export default Staff;
