import React from "react";
import { useGlobalContext } from "../../context";
import { Wrapper, Content } from "./services.styles";
import { Link } from "react-router-dom";

const Services = () => {
  const { tierList } = useGlobalContext();
  return (
    <Wrapper>
      <Content>
        <div className="page-info">
          <h2>Services</h2>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            ducimus deserunt minus. Iusto, atque debitis ratione illum, a quas
            deserunt similique rerum voluptatem natus cum! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Placeat aut, mollitia ducimus
            magnam quam velit dolor? Laudantium architecto error est quam
            blanditiis aspernatur impedit deserunt?
          </p>
        </div>

        <div className="tier-options">
          {tierList.map((tier) => {
            const { id, icon, title, price, desc } = tier;
            return (
              <article key={id} className="tier">
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <ul>
                  {desc.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <div>{price}</div>
              </article>
            );
          })}
        </div>
        <Link to="/contact" className="btn">
          Book Now
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Services;
