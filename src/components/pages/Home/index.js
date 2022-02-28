import React from "react";
import { Wrapper, Content, Image } from "./home.styles";
import selfie from "./images/me.jpeg";
import { useGlobalContext } from "../../../context";

const Home = () => {
  const { showLinks } = useGlobalContext();
  return (
    <Wrapper style={{ opacity: showLinks ? ".4" : "1" }}>
      <Image src={selfie} />
      <Content>
        <h2>
          Christopher <br /> Lutchmidat
        </h2>
        <h3>Web Developer / Tech Enthusist</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
          tenetur suscipit esse. Corporis, repellendus? Quo nostrum corrupti
          iure odit id aperiam. Ab est molestias expedita eaque alias facere
          rerum aut quibusdam vel rem? Accusantium sequi iure molestiae
          necessitatibus, veritatis alias possimus excepturi debitis sint nobis
          explicabo, ex, nemo dignissimos dolore.
        </p>
      </Content>
    </Wrapper>
  );
};

export default Home;
