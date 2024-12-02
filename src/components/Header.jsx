import styled from "styled-components";
import { Slink, Xpadding } from "../styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <div className="nav__logo">ARK-SHELTER</div>
        <div className="nav__links">
          <Slink href="#">Live</Slink>
          <Slink href="#">Work</Slink>
          <Slink href="#">Relax</Slink>
          <Slink href="#">Studio</Slink>
          <Slink href="#">About</Slink>
          <Slink href="#">Contact</Slink>
        </div>
        <div className="nav__home">
          <Slink href="#">Home</Slink>
          <Slink href="#">Gallery</Slink>
        </div>
      </Container>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.header``;
const Container = styled(Xpadding)`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  color: white;
  background: transparent;
  .nav__logo {
    font-size: 1.5rem;
  }
  .nav__links {
    display: none;
  }
  a {
    margin-left: 1.5em;
    font-weight: 600;
    color: white;
  }
  @media (min-width: 1024px) {
    .nav__links {
      display: block;
    }
  }
`;
