import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";
import "../Styles/Navbar.css";
import ClockFun from "./ClockFun";
import { useMediaQuery } from '@chakra-ui/react'

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // single media query with no options
  const [isLargerThan800] = useMediaQuery('(min-width: 900px)')
  console.log(isLargerThan800);
  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">
            Satyam Neurology Hospital - Bhavnagar
          </h2>
          <p className="text-descritpion">
          "DrNeuro served by Dr Prakash Bhatt who specialized in Neurology. Dr Prakash Bhatt is a young and dynamic Neurologist in Bhavnagar. He is able to manage acute and chronic neurological disorders, such as disorders of the Brain, Spine, nerves and muscles." <br></br><b>Emergency Number: +91 0278-6640664</b>
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <br />
          <button
            className="text-appointment-btn"
            id="clock"
            type="button"
          >
            <FontAwesomeIcon /> {isLargerThan800 ? <a href="#contact" id="exceptional" className="navbar-links">Contact Us</a> : <ClockFun />}
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>18k+</p>
              <p>OPD Patients</p>
            </div>

            <div className="text-stats-container">
              <p>400+</p>
              <p>Critical Patients</p>
            </div>

            <div className="text-stats-container">
              <p>2k+</p>
              <p>Neuro Procedures</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
