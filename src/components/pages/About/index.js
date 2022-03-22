// imports
import React from "react";
import { useGlobalContext } from "../../../context";
// styled components
import { Wrapper, Content, Image } from "./about.styles";

const About = () => {
  const { myTechStack } = useGlobalContext();

  return (
    // component wrapper
    <Wrapper>
      {/* all content */}
      <Content>
        {/* hero */}
        <section className="hero">
          <h2>
            Here's <br /> My Story
          </h2>
        </section>
        {/* image */}
        <section className="image-wrapper">
          <Image />
        </section>
        {/* about me */}
        <section className="about-me">
          {/* tech history */}
          <p>
            My journey in tech began in middle school. I was fortunate enough to
            have classes that taught me computer basics and a variety of
            applications like Microsoft’s Suite, Garageband, Dreamweaver and
            Adobe Flash Player. Without me knowing during that time my obsession
            with making stick figure animation and games would be laying down
            the foundation for my natural curiosity in the way things work.
            Quickly after my introduction to these concepts and terminology my
            first website was born. My class was tasked with building a website
            and the best website will go on to represent the school in a
            ThinkQuest competition. I wasn’t selected but my basic car themed
            website was an experience I would never forget.
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
          <br />
          {/* goals */}
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi modi
            adipisci doloribus nisi officia maxime iste dolore, consectetur
            totam fugit provident cumque laboriosam eaque mollitia quidem
            officiis ut corporis quo fugiat odio sed culpa nemo. Ipsa veritatis
            ducimus qui libero nulla, rem temporibus voluptate alias rerum
            voluptas quas ad. Doloremque repellendus iste quia perferendis. Iste
            officia, in temporibus necessitatibus dolorem illo quasi, inventore
            sed doloribus autem rem iure? Cupiditate eos rerum ex magni hic
            laborum, doloribus eveniet numquam fugit, quas delectus praesentium
            repellendus distinctio, iste illo quaerat aut. Sint quas ad ex
            dolore iure velit accusamus at veniam, voluptatibus ipsa esse
            similique temporibus tenetur reiciendis veritatis adipisci alias
            molestiae. Perspiciatis fugit, magni tenetur tempore cupiditate
            impedit. Necessitatibus ipsum voluptatum aliquid quod sequi possimus
            iusto voluptatibus, esse, impedit culpa aspernatur, minima ducimus
            quaerat quisquam vitae nemo? Tempora corporis alias maxime eos
            voluptates odit facere optio voluptatem consectetur ea laudantium,
            eaque eius impedit atque reprehenderit! Sapiente aspernatur nulla,
            labore error dicta laboriosam nostrum sunt accusamus ratione
            officiis sint reprehenderit eligendi recusandae, esse voluptatum
            quae iusto quibusdam aliquam, laborum tenetur soluta consectetur
            veniam quidem? Consectetur magnam ipsam nobis, omnis culpa modi
            perferendis nostrum ut, tempore nesciunt debitis, ex enim aliquam.
            Ab libero molestiae alias recusandae. Quasi nostrum magni illum
            fugit? Dolor similique iure nemo, praesentium fuga pariatur tenetur
            provident adipisci illum, cumque accusantium magnam blanditiis
            repellendus esse ipsa exercitationem velit sed nisi optio cupiditate
            repellat cum? Quas beatae aperiam dolorem earum rerum vitae ad ullam
            iste incidunt accusamus! Veniam mollitia tenetur officiis provident
            quod vitae tempore vel, voluptatem illum necessitatibus voluptates
            repellat saepe ex quos. Minima, quas quidem. Quam saepe, eaque ex
            sit hic debitis fugit inventore commodi maxime, sequi, natus dolore
            deleniti! Exercitationem sit amet velit, voluptatem dolor corporis
            saepe in eaque eveniet ab temporibus, laborum et eius molestiae
            veritatis beatae deleniti.
          </p>
        </section>
        {/* tech stack */}
        <section className="tech-stack-wrapper">
          <h3>My Tech Stack</h3>
          <div className="tech-stack">
            {/* map tech stack data */}
            {myTechStack.map((item) => {
              const { text, icon, id } = item;
              return (
                <div className="tech" key={id}>
                  <div className="icon">{icon}</div>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        </section>
      </Content>
    </Wrapper>
  );
};

export default About;
