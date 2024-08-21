import React, { useRef, useState } from "react";
import transition from "../transition";
import emailjs from "@emailjs/browser"

import { AnimatePresence, motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  slideAnimation,
} from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const emailInputRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_j2zca0m",
        "template_0866v9s",
        {
          from_name: form.name,
          to_name: "Jonas",
          from_email: form.email,
          to_email: "jonas.buisness.mayer@gmail.com",
          message: form.message,
        },
        "mrnslVZuCA0dylU_L"
      )
      .then(() => {
        setLoading(false);
        alert("Email has sent");
        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong");
          }
        );
      });
  }
  const validateEmail = () => {
    const email = emailInputRef.current.value;
    const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
      formRef.current.classList.add("valid");
      formRef.current.classList.remove("invalid");
    } else {
      formRef.current.classList.add("invalid");
      formRef.current.classList.remove("valid");
    }
    if (email === "") {
      formRef.current.classList.remove("valid");
      formRef.current.classList.remove("invalid");
    }
  };

  return (
    <AnimatePresence>
      <div className="section__form">
        <div className="Container">
          <div className="wrapper">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <motion.div
              variants={staggerContainer(0.2, 0.2)}
              initial="hidden"
              animate="show"
              className="container__formular"
            >
              <div className="form">
                <div className="Container__text">
                  <motion.h3 variants={fadeIn("", "", 0.2, 1)}>
                    Get in touch
                  </motion.h3>
                </div>
                <motion.h2 {...slideAnimation("left")}>Formular</motion.h2>
                <form ref={formRef} onSubmit={handleSubmit} action="#">
                  <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="inputbox"
                  >
                    <input
                      required="required"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handelChange}
                    />
                    <span className="inputbox__placeholder">Name</span>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("", "", 0.3, 1)}
                    className="inputbox"
                  >
                    <input
                      required="required"
                      name="email"
                      id="email"
                      onChange={handelChange}
                      value={form.email}
                      ref={emailInputRef}
                      onKeyUp={validateEmail}
                    />
                    <span className="inputbox__placeholder">Email</span>
                    <div className="indicator"></div>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("", "", 0.5, 1)}
                    className="inputbox"
                  >
                    <textarea
                      required
                      rows="7"
                      name="message"
                      value={form.message}
                      onChange={handelChange}
                    />
                    <span className="inputbox__placeholder">Message</span>
                  </motion.div>
                  <div className="ButtonWrapper">
                    <motion.input
                      className="button"
                      type="reset"
                      id="reset"
                    />
                    <motion.button
                      className="button primary"
                      variants={fadeIn("", "", 0.7, 1)}
                      type="submit"
                    >
                      {loading ? "Sending ..." : "Send"}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default transition(Contact);
