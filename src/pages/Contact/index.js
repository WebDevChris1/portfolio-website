import React from "react";
import { Content, Form, Wrapper, Input, TextArea } from "./contact.styles";
import { useGlobalContext } from "../../context";

const Contact = () => {
  const { handleSubmit, sendEmail } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <h2>How Can I Assist?</h2>
        <Form onSubmit={handleSubmit}>
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
              <option value="inquiry-only">Inquiry Only</option>
              <option value="one">Tier 1</option>
              <option value="two">Tier 2</option>
              <option value="three">Tier 3</option>
            </select>
          </div>
          <TextArea
            name="about-business"
            cols="40"
            rows="4"
            placeholder="Describe Your Business"
          ></TextArea>
          <TextArea
            name="additional-notes"
            cols="40"
            rows="4"
            placeholder="Additional Notes"
          ></TextArea>
          <input type="submit" className="btn" value={sendEmail}></input>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default Contact;
