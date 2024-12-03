import styled from "styled-components";
import { Slink, Xpadding } from "../styles";

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <Footer__top>
          <div className="footer__links">
            <div>
              <h4>Sitemap</h4>
              <ul>
                <li>
                  <Slink href="#">Home</Slink>
                </li>
                <li>
                  <Slink href="#">Live</Slink>
                </li>
                <li>
                  <Slink href="#">Work</Slink>
                </li>
                <li>
                  <Slink href="#">Relax</Slink>
                </li>
                <li>
                  <Slink href="#">Studio</Slink>
                </li>
                <li>
                  <Slink href="#">Gallery</Slink>
                </li>
                <li>
                  <Slink href="#">About</Slink>
                </li>
                <li>
                  <Slink href="#">Contact</Slink>
                </li>
              </ul>
            </div>
            <div>
              <h4>Information</h4>
              <ul>
                <li>FAQ</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="footer__newsletter">
            <h4>Join our newsletter</h4>
            <p>We will send you updates on new products and discounts.</p>
            <div className="footer__email">
              <input type="email" placeholder="Email" />
              <button type="button">Go</button>
            </div>
            <div>
              <img
                src="/public/red-dot-logo.png"
                alt="red-dot-logo"
                width={45}
              />
              &nbsp;winner 2020
            </div>
          </div>
        </Footer__top>
        <Footer__bottom>
          <span>Copyright &copy; Ark-Shelter 2018</span>
          <span>Website by Ollie</span>
        </Footer__bottom>
      </Container>
    </FooterSection>
  );
}
const FooterSection = styled.footer``;
const Container = styled(Xpadding)`
  padding-bottom: 80px;
  padding-top: 100px;
  color: #555c62;
`;
const Footer__top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  h4 {
    color: #000;
    margin-bottom: 6px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    text-align: left;
  }
  .footer__links {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 30px;
    text-align: left;
    width: 100%;
    max-width: 380px;
    li {
      margin-bottom: 8px;
    }
  }
  .footer__newsletter {
    width: 320px;
    p {
      margin-bottom: 16px;
    }
    .footer__email {
      border-bottom: 2px solid lightgray;
      margin-bottom: 20px;
      &:hover {
        border-bottom: 2px solid black;
      }
    }

    input {
      outline: none;
      border: none;
      display: inline-block;
      padding: 1em;
      font-size: 18px;
      font-family: inherit;
      letter-spacing: 1.5px;
    }

    button {
      border: none;
      outline: none;
      font-size: 30px;
      background: transparent;
      cursor: pointer;
    }
  }
`;
const Footer__bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: center;
  width: 100%;
  border-top: 1px solid gray;
  padding-top: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
