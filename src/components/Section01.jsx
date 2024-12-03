import styled from "styled-components";
import { Slink, Xpadding } from "../styles";

export default function Section01() {
  return (
    <Section>
      <Container>
        <Section__index>
          <div>Nr. 01</div>
          <div>Our philosophy of works</div>
          <div>Back to Nature</div>
        </Section__index>
        <Section__body>
          <Section__title>
            What's Ark- <br />
            Shelter ?
          </Section__title>
          <Section__content>
            <h3>
              Ark-Shelters are prefabricated, fully finished, modular units. By
              a lake, deep in a forest, at the edge of a field, a steep mountain
              hill or your city rooftop! Make your dream come true, installed in
              one day, no extra on-site work.
            </h3>
            <div className="body__content">
              <p>
                The shelters are built in one piece, which gives the incredible
                mobility to reach your dream location. Modularity ensures that
                over time you can grow your Ark to your needs. The units are
                created by craftsmen in our factory.
              </p>
              <p>
                We have ideal conditions and are able to reach the highest
                details and reduce production time. Which allows us to keep
                control of the price, remove any onsite construction constraints
                and make your dream home, on time, on budget, at the highest
                quality possible.
              </p>
            </div>
            <div className="body__links">
              <p>Choose your purpose</p>
              <Slink href="#">Ark-shelter to live in closer to nature.</Slink>
              <Slink href="#">Ark-shelter as an office.</Slink>
              <Slink href="#">Ark-shelter to relax in at home.</Slink>
            </div>
          </Section__content>
        </Section__body>
        <Section__bottom>
          <img
            src="https://images.unsplash.com/photo-1682063659507-fd75b710e81b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
            alt="helo"
          />
        </Section__bottom>
      </Container>
    </Section>
  );
}
const Section = styled.section``;
const Container = styled(Xpadding)`
  max-width: 1200px;
  margin: 0 auto;
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
      width: 30%;
    }
  }
`;
const Section__body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Section__title = styled.div`
  margin-bottom: 24px;
  width: 30%;
`;

const Section__content = styled.div`
  width: 100%;
  h3 {
    line-height: 1.4;
    margin-bottom: 50px;
  }
  .body__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 25px;
  }
  .body__links {
    p {
      margin-bottom: 10px;
    }
    a {
      display: block;
      text-decoration: underline;
      text-underline-offset: 5px;
      text-decoration-thickness: 1.5px;
      margin-bottom: 0.5em;
    }
  }

  @media (min-width: 768px) {
    width: 70%;
    .body__content {
      flex-direction: row;
      p {
        flex: 1;
      }
    }
  }
`;
const Section__bottom = styled.div`
  width: 100%;
`;
