import React, { useState } from 'react';
import emailjs from 'emailjs-com';
export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("luis", "template_z0LhD5N4", e.target,  "user_8WRbem2ZSkLDfz6dSKZNA")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label className="label">Name</label>
      <input className="input" type="text" name="user_name" />
      <label className="label">Email</label>
      <input className="input" type="email" name="user_email" />
      <label className="label">Phone Number</label>
      <input className="input" type="tel" name="user_phone"></input>
      <label className="label">Company</label>
      <input className="input" type="text" name="user_company"></input>
      <label className="label">Message</label>
      <textarea className="inputText" name="message" />
      <input className="submit" type="submit" value="Send" />
    </form>
  );
}
