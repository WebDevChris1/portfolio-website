import React from "react";
import { Content, Form, Wrapper, Label, Input } from "./contact.styles";

const Contact = () => {
  return (
    <Wrapper>
      <Content>
        <h2>How Can I Assist?</h2>
        <Form>
          <div>
            <Label>Name</Label>
            <Input type="text" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" />
          </div>
          <div>
            <Label>Phone</Label>
            <Input type="text" placeholder="optional" />
          </div>
          <div>
            <Label>Social</Label>
            <Input type="text" placeholder="optional" />
          </div>
          <div>
            <Label for="tiers">Choose a Tier</Label>
            <select name="tiers">
              <option value="Select">Select</option>
              <option value="tier-one">Tier 1</option>
              <option value="tier-two">Tier 2</option>
              <option value="tier-three">Tier 3</option>
              <option value="inquiry-only">Inquiry Only</option>
            </select>
          </div>
          <div>
            <textarea
              name=""
              cols="40"
              rows="3"
              placeholder="Describe Your Business"
            ></textarea>
          </div>
          <div>
            <textarea
              name=""
              cols="40"
              rows="3"
              placeholder="Additional Notes"
            ></textarea>
          </div>
          <button>Submit</button>
        </Form>
      </Content>
    </Wrapper>
  );
};

export default Contact;
