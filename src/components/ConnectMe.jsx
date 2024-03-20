import Header from "./Header"
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Footer from "./footer";
export default function ContactMe(){
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_zlc0wie', 'service_zlc0wie', form.current, {
            publicKey: 'DSYP_0ltYETcXCIYP',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <>
        <Header/>
        <div className="flex-col h-screen flex items-center justify-center animate-slidein3 ">
            <div className="h-1/5 flex justify-start items-center w-5/6 text-left text-5xl font-extrabold ">Contact Me<span className="text-6xl text-purple-600">.</span></div>
            <form ref={form} onSubmit={sendEmail} className="h-4/5 w-5/6 flex flex-col justify-around items-center">
                <div className="w-full 1/6 md:flex md:justify-center md:items-center block">
                <input name='user_name' type="text" placeholder="Name" className="md:w-2/5 h-full m-1 bg-gray-200 rounded-md mx-8 md:mx-2" required/>
                <input name="user_email" type="email" placeholder="Email" className="md:w-2/5 h-full m-1  bg-gray-200 rounded-md mx-8 md:mx-2" required/>
                </div>
                <div className="w-5/6 h-6/6">
                <textarea name="message" id="" cols="30" rows="10" className="resize-none rounded-md w-full h-11/12  bg-gray-200 " placeholder="Message"></textarea>
                </div>
                <input type="submit" className="inline-flex items-center rounded-md  px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-black mr-2 hover:text-xl hover:border-2 hover:border-black animate-slidein2"/>
            </form>
        </div>
        <Footer/>
        </>
    )
}