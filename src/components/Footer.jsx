import styled from "styled-components";
import { Xpadding } from "../styles";

export default function Footer() {
  return (
    <FooterSection>
      <Container>Footer section</Container>
    </FooterSection>
  );
}
const FooterSection = styled.footer`
  height: 10vh;
  background: #000;
  color: white;
`;
const Container = styled(Xpadding)``;
