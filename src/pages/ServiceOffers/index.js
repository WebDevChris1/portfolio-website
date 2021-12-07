import React from "react";
import { useGlobalContext } from "../../context";
import { Wrapper, Content } from "./services.styles";
import { Link } from "react-router-dom";
// import { GiCycle } from "react-icons/gi";

import { BiRevision } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";

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
            const { id, icon, title, price, desc, delivery, revisions } = tier;
            return (
              <article key={id} className="tier">
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <div className="delivery-revision">
                  <BiTimeFive className="clock-icon" />
                  <span>{delivery}</span>
                  <BiRevision className="cycle-icon" />
                  <span>{revisions}</span>
                </div>
                <ul>
                  {desc.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <div className="price">{price}</div>
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
