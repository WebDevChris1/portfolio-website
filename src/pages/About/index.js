import React from "react";
import { Wrapper, Content, Image } from "./about.styles";
import { useGlobalContext } from "../../context";
import aboutImage from "./images/about-image.jpeg";
const About = () => {
  const { techStack } = useGlobalContext();

  return (
    <Wrapper>
      <Content>
        <div className="hero">
          <h2>
            Here's <br /> My Story
          </h2>
        </div>
        <div className="about-me">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ad
            ea maiores inventore beatae necessitatibus excepturi molestiae modi,
            neque omnis rem libero delectus cumque totam et, id placeat hic
            veniam sit cum harum. Molestiae ad nulla laudantium, minima
            praesentium veritatis beatae magnam provident ipsam possimus
            reprehenderit mollitia distinctio numquam enim! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Officiis mollitia ab iusto
            similique fugit nostrum unde voluptates, nemo aliquam! Eveniet quo,
            aut, dolore, provident nisi eius commodi quasi eaque delectus minima
            possimus omnis beatae modi nostrum? Provident officia et nam debitis
            quaerat laboriosam enim, qui, in, fugiat eligendi nostrum corrupti.
          </p>
          <h3>My Tech Stack</h3>
          <ul>
            {techStack.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <h3>Goals</h3>
        </div>
      </Content>
    </Wrapper>
  );
};

export default About;
