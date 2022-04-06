import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { Content, Form, Wrapper, Input, TextArea } from "./contact.styles";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [captchaToken, setCaptchaToken] = useState(null);

  const recaptchaRef = useRef();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
  };

  const onChange = (value) => {
    setCaptchaToken(value);
  };

  const sendEmail = () => {
    if (captchaToken) {
      formRef.current.reset();

      const notify = toast.loading("Sending Email...");

      emailjs
        .sendForm(
          "service_sut2owl",
          "template_oh7uuel",
          formRef.current,
          "user_FLpD0WW5oi0KL9K4eHddp"
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              console.log(result);
              recaptchaRef.current.reset();
              setCaptchaToken(null);
              toast.update(notify, {
                render: "Email Sent",
                type: "success",
                isLoading: false,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          },
          (error) => {
            if (error !== "OK") {
              console.log(error.text);
              recaptchaRef.current.reset();
              setCaptchaToken(null);
              toast.update(notify, {
                render: "Something Went Wrong",
                type: "error",
                isLoading: false,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          }
        );
    }
  };

  useEffect(() => {
    sendEmail();
  }, [captchaToken]);

  return (
    <Wrapper>
      <Content>
        <ToastContainer
          style={{ margin: "45px 0 0 0" }}
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <h2>How Can I Assist?</h2>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <div className="input-container">
            <Input
              type="text"
              placeholder="First name"
              name="first-name"
              className="small-input"
              required
            />
            <Input
              type="text"
              placeholder="Last name"
              name="last-name"
              className="small-input"
              required
            />
          </div>
          <Input
            className="med-input"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <div className="input-container">
            <Input
              type="tel"
              placeholder="Phone (optional)"
              name="phone"
              className="small-input"
              maxLength="10"
            />
            <Input
              type="text"
              placeholder="Social (optional)"
              name="social"
              className="small-input"
            />
          </div>
          <div>
            <label htmlFor="tiers">Choose a Tier</label>
            <select name="tier" required>
              <option value="inquiry-only">Inquiry</option>
              <option value="one">Tier 1</option>
              <option value="two">Tier 2</option>
              <option value="three">Tier 3</option>
            </select>
          </div>
          <TextArea
            name="about-business"
            cols="40"
            rows="5"
            placeholder="Describe Your Business"
          ></TextArea>
          <TextArea
            name="additional-notes"
            cols="40"
            rows="5"
            placeholder="Additional Notes"
          ></TextArea>

          <input className="btn" type="submit" value="Submit" />

          <ReCAPTCHA
            ref={recaptchaRef}
            theme="dark"
            size="invisible"
            sitekey="6Lc5vSkfAAAAAE8XC8q_r56cCXGTUw9z5ndjivhQ"
            onChange={onChange}
            // badge="bottomleft"
          />
        </Form>
      </Content>
    </Wrapper>
  );
};

export default Contact;
