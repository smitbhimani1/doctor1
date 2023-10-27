import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import "../Styles/maps.css";
import YT from "../Components/YT";

export function Home() {

  return (
    <div className="home-section" >
      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <YT/>
      <Reviews />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7410.439141720047!2d72.15450858568032!3d21.771761483859017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5a61e9eae567%3A0xf5080460521bceaa!2sDeri%20Road%20Area%2C%20Krishna%20Nagar%2C%20Bhavnagar%2C%20Gujarat%20364001!5e0!3m2!1sen!2sin!4v1696770800141!5m2!1sen!2sin" className="maps" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <Doctors />
      <Footer />
    </div>
  );
}
