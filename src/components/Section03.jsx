import styled from "styled-components";
import { Xpadding } from "../styles";

export default function Section03() {
  return (
    <Section>
      <Container>
        <Section__index>
          <div>Nr. 03</div>
          <div>
            <p>About ark-shelter?</p>
            <p>Back to Nature</p>
          </div>
        </Section__index>
        <Section__heading>
          Our Arks are manufactured by carefully selected and trained craftsmen.
          The high-quality wood we use for the base structure is durable and
          designed to be resistant in any environment.
        </Section__heading>
        <Section__body>
          <h3>More about Ark-Shelter</h3>
          <div className="body__content">
            <div className="__video">
              <video muted>
                <source src="/public/hero-video.mp4" type="video/mp4" />
                Your browser does not support video tag.
              </video>
            </div>
            <div className="__content">
              <h6>THE STORY ABOUT HOW ARK-SHELTER WAS CREATED</h6>
              <p>
                Ark-Shelter began with one question: how will people live in the
                future? Architecture students Michiel and Martin came up with
                the first concept of the Ark-Shelter, a compact house with a
                clean design. It’s a reinvention of how people live their lives
                in today’s fast paced and busy world by going back to nature and
                back to basics. The concept has one purpose, allow people to
                come to themselves, reconnect with nature and reconnect with
                themselves.
              </p>
            </div>
          </div>
        </Section__body>
      </Container>
      <VideoPlayer>
        <h1>Video player is here</h1>
      </VideoPlayer>
    </Section>
  );
}
const Section = styled.section``;
const Container = styled(Xpadding)`
  margin: 25px auto 25px;
  max-width: 1200px;
`;
const Section__index = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1rem;

  margin-bottom: 50px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 100px;
    div {
      flex: 1;
    }
    div:last-child {
      display: flex;
      justify-content: space-between;
    }
  }
`;
const Section__heading = styled.h2`
  margin-bottom: 0.7em;
  font-size: 24px;
  line-height: 1.35;
`;
const Section__body = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 2px;
    margin-bottom: 1.25em;
  }
  .body__content {
    display: flex;
    flex-direction: column;
    div {
    }
    @media screen {
      flex-direction: row;
    }
  }
  .__video {
    height: 400px;

    video {
      height: 100%;
    }
  }
`;

const VideoPlayer = styled.div`
  height: 100vh;
  width: 100%;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
