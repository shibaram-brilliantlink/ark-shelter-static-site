import styled from "styled-components";
import { Xpadding } from "../styles";

export default function Section06() {
  return (
    <Section>
      <Container>Section06 For Works hover effect.</Container>
    </Section>
  );
}
const Section = styled.section`
  height: 10vh;
  background: #000;
  color: white;
`;
const Container = styled(Xpadding)``;
