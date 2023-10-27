import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function ContactForm() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const [patientName, setPatientName] = useState("");
    const [email, setPatientEmail] = useState("");
    const [patientNumber, setPatientNumber] = useState("");
    const [patientMsg, setPatientMsg] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = async(e) => {
        e.preventDefault();

        // Validate form inputs
        const errors = {};
        if (!patientName.trim()) {
            errors.patientName = "Patient name is required";
        } else if (patientName.trim().length < 8) {
            errors.patientName = "Patient name must be at least 8 characters";
        }

        if (!patientNumber.trim()) {
            errors.patientNumber = "Patient phone number is required";
        } else if (patientNumber.trim().length !== 10) {
            errors.patientNumber = "Patient phone number must be of 10 digits";
        }

        if (!email.trim()) {
            errors.email = "Email is required";
        }

        if (!patientMsg.trim()) {
            errors.patientMsg = "Enter Your Message";
        } else if (patientMsg.trim().length < 10) {
            errors.patientMsg = "Message must be of 10 characters";
        }

        try {
            await axios.post('https://sheet.best/api/sheets/60942c80-2557-485d-8547-64e20f79f706', { patientName, patientNumber, email, patientMsg }).then((data) => {
                console.log("Data Sent");
            }).catch((err) => {
                console.log(err);
                window.alert("Error: " + err.message);
            })
        } catch (err) {
            window.alert("Error: " + err.message);
        }

        toast.success("Appointment Scheduled !", {
            position: toast.POSITION.TOP_CENTER,
            onOpen: () => setIsSubmitted(true),
            onClose: () => setIsSubmitted(false),
        });

        // Reset form fields and errors after successful submission
        setPatientName("");
        setPatientNumber("");
        setPatientEmail("");
        setPatientMsg("");
        setFormErrors({});
    };

    return (
        <div className="appointment-form-section">
            <h1 className="legal-siteTitle">
                <Link to="/">
                    Health <span className="legal-siteSign">+</span>
                </Link>
            </h1>

            <div className="form-container">
                <h2 className="form-title">
                    <span>Contact Us</span>
                </h2>

                <form className="form-content" onSubmit={handleSubmit}>
                    <label>
                        Full Name:
                        <input
                            type="text"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            required
                        />
                        {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
                    </label>

                    <br />
                    <label>
                        Phone Number:
                        <input
                            type="text"
                            value={patientNumber}
                            onChange={(e) => setPatientNumber(e.target.value)}
                            required
                        />
                        {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
                    </label>
                    <br />

                    <label>
                        Email:
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setPatientEmail(e.target.value)}
                            required
                        />
                        {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
                    </label>

                    <label>
                        Message:
                        <input
                            type="text"
                            value={patientMsg}
                            onChange={(e) => setPatientMsg(e.target.value)}
                            required
                        />
                        {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
                    </label>

                    <br />
                    <button type="submit" className="text-appointment-btn">
                        Send Us
                    </button>

                    <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>Appointment details has been sent to the patients phone number via SMS.</p>
                </form>
            </div>

            <div className="legal-footer">
                <p>© 2023 Satyam Neuorology Hospital. All rights reserved.</p>
            </div>

            <ToastContainer autoClose={5000} limit={1} closeButton={false} />
        </div>
    );
}

export default ContactForm;
