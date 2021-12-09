import React from "react";
import { Wrapper, Content } from "./footer.styles";
import { useGlobalContext } from "../../context";

const Footer = () => {
  const { changeBg } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <div className="bg one" onClick={() => changeBg("5")}></div>
        <div className="bg two" onClick={() => changeBg("4")}></div>
        <div className="bg three" onClick={() => changeBg("3")}></div>
        <div className="bg four" onClick={() => changeBg("2")}></div>
        <div className="bg five" onClick={() => changeBg("1")}></div>
      </Content>
    </Wrapper>
  );
};

export default Footer;
