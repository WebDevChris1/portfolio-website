import React from "react";
import { useGlobalContext } from "../../../context";
import { Wrapper, Content } from "./services.styles";
import { Link } from "react-router-dom";
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
            All service tiers are offered with guarenteed customer support. You
            can expect fast response times, relevant updates throughout the
            development process and free consultations. I will work with you to
            bring your ideas to life. Whether it is a blog or landing page I
            will strive to always deliver quality work.
          </p>
        </div>

        <div className="tier-options">
          {tierList.map((tier) => {
            const {
              id,
              icon,
              title,
              price,
              desc,
              delivery,
              revisions,
              available,
            } = tier;
            return (
              <article
                key={id}
                className={`${available ? "tier" : "tier unavailable"}`}
              >
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <div className="delivery-revision">
                  <BiTimeFive className="clock-icon" />
                  <span>{`${delivery} Day Delivery`}</span>
                  <BiRevision className="cycle-icon" />
                  <span>{`${revisions} Revisions`}</span>
                </div>
                <ul>
                  {desc.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <h4 className="price">{available ? price : "Coming Soon"}</h4>
                <Link to="/contact">Book Now</Link>
              </article>
            );
          })}
        </div>
      </Content>
    </Wrapper>
  );
};

export default Services;
