import React from "react";
import { Wrapper, Content, Image } from "./about.styles";
import { useGlobalContext } from "../../../context";
import aboutImage from "./images/about-me-image.jpeg";
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ad
              ea maiores inventore beatae necessitatibus excepturi molestiae
              modi, neque omnis rem libero delectus cumque totam et, id placeat
              hic veniam sit cum harum. Molestiae ad nulla laudantium, minima
              praesentium veritatis beatae magnam provident ipsam possimus
              reprehenderit mollitia distinctio numquam enim! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Officiis mollitia ab iusto
              similique fugit nostrum unde voluptates, nemo aliquam! Eveniet
              quo, aut, dolore, provident nisi eius commodi quasi eaque delectus
              minima possimus omnis beatae modi nostrum? Provident officia et
              nam debitis quaerat laboriosam enim, qui, in, fugiat eligendi
              nostrum corrupti.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              iusto necessitatibus tenetur labore? Recusandae sapiente
              voluptatibus vitae vel molestias! Provident labore sequi
              voluptatibus fugiat necessitatibus, obcaecati molestias autem
              quibusdam unde earum laborum odit, voluptas ea, accusamus sint
              ipsum nostrum consectetur recusandae reprehenderit rem animi
              commodi harum tempora? Incidunt, eius impedit! Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Explicabo vitae sapiente
              impedit cupiditate vero unde possimus, exercitationem laborum
              eveniet magnam incidunt voluptatem. Aut enim possimus magnam
              maxime, distinctio dolorem illo. Necessitatibus ducimus blanditiis
              aperiam sit autem incidunt recusandae qui minus quidem excepturi
              animi assumenda, itaque optio quod cumque nobis laboriosam.
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
