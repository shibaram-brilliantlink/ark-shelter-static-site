import styled from "styled-components";
import { Slink, Xpadding } from "../styles";

export default function Section02() {
  return (
    <Section>
      <Container>
        <Section__index>
          <div>Nr. 02</div>
          <div>
            <p>Why ark-shelter?</p>
            <p>Back to Nature</p>
          </div>
        </Section__index>
        <Section__body>
          <div className="section__content">
            <div>
              <h4>Find a space to unwind</h4>
              <p>
                Ark-Shelter shows the beauty of natural light and allows you to
                reconnect with nature. The large single pane windows seamlessly
                integrate the natural environment within your Ark. Enjoy a
                moment for yourself and take time to unwind.
              </p>
            </div>
            <div>
              <h4>Connect with nature</h4>
              <p>
                Due to Ark-Shelter’s self-sufficient system and ecological
                materials, you’ll live with zero-impact. Become as productive as
                nature itself, and grow and bloom within your own Ark.
              </p>
            </div>
            <div>
              <p>Need more info?</p>
              <Slink href="#">Asks us your questions.</Slink>
              <Slink href="#">Download our broucher</Slink>
            </div>
          </div>
          <div className="section__img">
            <img
              src="https://images.unsplash.com/photo-1682063659507-fd75b710e81b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
              alt="helo"
            />
          </div>
        </Section__body>
      </Container>
    </Section>
  );
}
const Section = styled.section``;
const Container = styled(Xpadding)`
  margin: 25px auto 50px;
  max-width: 1200px;
  font-size: 1rem;
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
const Section__body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  div {
    flex: 1;
  }

  .section__content {
    div {
      margin-bottom: 16px;
    }
    & > div:last-child p {
      margin-bottom: 50px;
    }
    a {
      display: block;
      margin-bottom: 0.5em;
    }
  }
  .section__img img {
    height: 100%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
