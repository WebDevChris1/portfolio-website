// importss
import React from "react";
// styled components
import { Wrapper, Content, Image } from "./home.styles";
// data
import homePageInfo from "./data";

//component
const Home = () => {
  return (
    <Wrapper>
      <Content>
        {/* header */}
        <main className="header-wrapper">
          <section className="img-wrapper">
            <Image src={homePageInfo.img} />
          </section>
          <section className="header">
            <h2>{homePageInfo.mainTitle}</h2>
            <h3>{homePageInfo.subTitle}</h3>
          </section>
        </main>
        {/* welcome message */}
        <p>{homePageInfo.welcomeMsg}</p>
      </Content>
    </Wrapper>
  );
};

export default Home;
