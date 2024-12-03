import styled from "styled-components";
import { Xpadding } from "../styles";

export default function HeroSection() {
  return (
    <Section>
      <Container>
        <Hero__video autoPlay muted loop>
          <source src="./public/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Hero__video>
        <div className="overlay"></div>
        <Hero__content>
          <div className="hero__heading">
            <h1>
              New way <br />
              Of living.
            </h1>
            <p>Change the way you live life, closer to nature.</p>
          </div>
          <div className="hero__aside">Modular, Sustainable, premium</div>
          <Hero__bottom>
            <div className="index__card">
              <p>Nr. 01</p>
              <p className="index__heading">Live in ark.</p>
              <p className="index__subheading">
                Learn more aobut arks to live in.
              </p>
            </div>
            <div className="index__card">
              <p>Nr. 02</p>
              <p className="index__heading">Live in ark.</p>
              <p className="index__subheading">
                Learn more aobut arks to live in.
              </p>
            </div>
            <div className="index__card">
              <p>Nr. 03</p>
              <p className="index__heading">Live in ark.</p>
              <p className="index__subheading">
                Learn more aobut arks to live in.
              </p>
            </div>
          </Hero__bottom>
        </Hero__content>
      </Container>
    </Section>
  );
}
const Section = styled.section`
  overflow: hidden;
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -9;
  }
`;
const Hero__video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -10;
  object-fit: cover;
  height: 100vh;
  width: 100%;
`;
const Hero__content = styled.div`
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;

  /* dfdf */
  .hero__heading {
    padding-left: clamp(1rem, 4.2105vw + -0.0526rem, 5rem);
    max-width: 1300px;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 75px;
      line-height: 1.1;
      margin-bottom: 0.5em;
    }
    p {
      font-size: 1.5rem;
    }
    @media (min-width: 768px) {
      height: 70vh;
    }
  }
  .hero__aside {
    position: absolute;
    transform: rotate(90deg);
    right: 0;
    top: 50%;
    font-size: 1.35rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const Hero__bottom = styled.div`
  height: 40vh;
  width: 80%;
  padding-left: clamp(1rem, 4.2105vw + -0.0526rem, 5rem);
  display: flex;
  justify-content: space-between;
  background: #fff;
  color: #000;
  padding-bottom: 20px;
  padding-top: 20px;
  .index__card {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 1rem;
    font-size: 14px;
    line-height: 1.25;
  }
  .index__heading {
    font-size: 1.25rem;
    margin-top: 3px;
  }
  .index__subheading {
    color: gray;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    /* height: 20vh; */
  }
`;
