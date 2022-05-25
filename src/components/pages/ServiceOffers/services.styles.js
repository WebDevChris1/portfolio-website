import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  ul {
    width: 100%;
    height: 150px;
    padding-left: 50px;
  }

  li {
    line-height: 1.5rem;
  }

  .page-info {
    padding: 0 20px 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .divider {
      font-size: 1.7rem;
      width: 40%;
      text-align: center;
      margin-top: 10px;
    }

    p {
      text-align: center;
    }
  }

  .tier-options {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
    justify-items: center;
    width: 100%;
    gap: 3rem;
  }

  .tier {
    border: 1px solid var(--border-color);
    border-radius: 10px;
    height: 450px;
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }

  .unavailable {
    border: 1px solid rgba(255, 255, 255, 0.5);

    .price {
      z-index: 10;
      backdrop-filter: opacity(10%);
      top: 0;
      left: auto;
      padding: 200px;
      font-size: 2rem;
      font-weight: 600;
      background-color: rgba(0, 0, 0, 0.85);
      color: white;
    }
  }

  .icon {
    font-size: 5rem;
    margin-top: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  .price {
    font-size: 1.1rem;
    text-align: center;
    position: absolute;
    padding: 10px 20px;
    top: -5px;
    left: -7px;
    background-color: white;
    color: black;
    border-radius: 10px;
  }

  .delivery-revision {
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    gap: 5px;

    .cycle-icon {
      font-size: 1.3rem;
      margin-left: 30px;
    }

    .clock-icon {
      font-size: 1.3rem;
    }

    span {
      font-size: 1.1rem;
      font-weight: normal;
    }
  }

  a {
    text-decoration: none;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
  }

  @media screen and (min-width: 800px) {
    gap: 50px;

    .divider {
      font-size: 2rem;
      width: 20%;
      text-align: center;
    }

    .page-info {
      width: 80%;
      gap: 1.3rem;
    }

    .tier-options {
      grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    }
  }
`;
