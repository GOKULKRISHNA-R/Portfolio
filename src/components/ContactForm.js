import "./button.css";
import a from "./../assets/projects/1.png"
import b from "./../assets/projects/2.png"
import c from "./../assets/projects/3.png"
import emailjs from '@emailjs/browser'
import React, { useRef, useState } from 'react';


export default function ContactForm() {
  const form = useRef();
  const [showLoader, setShowLoader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    
    setShowLoader(true);
    emailjs.sendForm('service_e0z01qk', 'template_tnpos86', form.current, '-Xuyjy5CV_ZrcZUIX')
    .then((result) => {
      console.log(result.text);
      setTimeout(() => setShowLoader(false), 1000) ;
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className=" h-1/2 md:w-1/2 flex flex-col justify-between" ref={form} onSubmit={sendEmail}>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">          @
        </div>
        <input name="user_name" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Your Name" />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </div>
        <input name="user_email" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="xxx@mail.com" />
      </div>

      <textarea name="message" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Message"></textarea>

      <button className="w-48 h-16 mx-auto" disabled={showLoader} >
      {!showLoader ? 
        <div>
        Send Mail
        <div className="icon-1"><img src={a} alt="a" />
        </div>
        <div className="icon-2"><img src={b} alt="a" />
        </div>
        <div className="icon-3"><img src={c} alt="a" />
        </div>
        </div>
         : "Loading..."}
      </button>

    </form>
  )
}