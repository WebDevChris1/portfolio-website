import React from "react";
import { Wrapper, Content, Image } from "./about.styles";
import { useGlobalContext } from "../../../context";
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
          <section>
            <p>
              my journey in tech began in middle school. I was fortunate enough
              to have classes that taught me computer basics and a variety of
              applications like Microsoft’s Suite, Garageband, Dreamweaver and
              Adobe Flash Player. Without me knowing during that time my
              obsession with making stick figure animation and games would be
              laying down the foundation for my natural curiosity in the way
              things work. Quickly after my introduction to these concepts and
              terminology my first website was born. My class was tasked with
              building a website and the best website will go on to represent
              the school in a ThinkQuest competition. I wasn’t selected but my
              basic car themed website was an experience I would never forget.
            </p>
            <br />
            <p>
              I took my new acquaintance and attended a vocational school which
              had a variety of shop classes. During my first year the students
              were shuffled between each shop class to help us decide a path we
              can eventually graduate certified in the trade. Although the other
              shop classes had a lasting impression, I stuck to my premature
              understanding of tech and chose to pursue the certification in
              Graphic Design. During the next 3 years I was thought a variety of
              adobe software like Photoshop, InDesign, and Illustrator. In
              retrospect I owe these years of my life for the development of my
              creativity and deeper understanding
            </p>
          </section>
          <section className="second-section">
            <div className="tech-stack">
              <h3>My Tech Stack</h3>
              <ul>
                {techStack.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div>
              <Image />
            </div>
          </section>

          <section>
            <h3>Goals</h3>
          </section>
        </div>
      </Content>
    </Wrapper>
  );
};

export default About;
