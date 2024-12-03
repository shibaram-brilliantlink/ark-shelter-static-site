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
              <input type="email" />
              <button type="button" className="btn">
                Go
              </button>
            </div>
            <div>
              <img
                src="/public/red-dot-logo.png"
                alt="red-dot-logo"
                width={40}
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
  h4 {
    color: #000;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
  .footer__links {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 30px;
    text-align: left;
    width: 100%;
    max-width: 380px;
  }
  .footer__newsletter {
    width: 40%;
  }
`;
const Footer__bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: center;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
