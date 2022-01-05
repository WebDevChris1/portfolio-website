import React from "react";
import { Content, Form, Wrapper, Input, TextArea } from "./contact.styles";
import { useGlobalContext } from "../../context";

const Contact = () => {
  const { handleSubmit } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <h2>How Can I Assist?</h2>
        <Form onSubmit={handleSubmit}>
          <div className="input-container">
            <Input
              type="text"
              placeholder="First name"
              className="small-input"
              required
            />
            <Input
              type="text"
              placeholder="Last name"
              className="small-input"
              required
            />
          </div>
          <Input type="email" placeholder="Email address" required />
          <div className="input-container">
            <Input
              type="tel"
              placeholder="Phone (optional)"
              className="small-input"
              maxLength="10"
            />
            <Input
              type="text"
              placeholder="Social (optional)"
              className="small-input"
            />
          </div>
          <div>
            <label for="tiers">Choose a Tier</label>
            <select name="tiers">
              <option value="Select">Select</option>
              <option value="tier-one">Tier 1</option>
              <option value="tier-two">Tier 2</option>
              <option value="tier-three">Tier 3</option>
              <option value="inquiry-only">Inquiry Only</option>
            </select>
          </div>
          <TextArea
            name=""
            cols="40"
            rows="4"
            placeholder="Describe Your Business"
          ></TextArea>
          <TextArea
            name=""
            cols="40"
            rows="4"
            placeholder="Additional Notes"
          ></TextArea>
          <button>Submit</button>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default Contact;
