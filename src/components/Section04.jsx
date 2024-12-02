import styled from "styled-components";
import { Xpadding } from "../styles";

export default function Section04() {
  return (
    <Section>
      <Container>Section 04 Quote </Container>
    </Section>
  );
}
const Section = styled.section`
  height: 10vh;
  background: #000;
  color: white;
`;
const Container = styled(Xpadding)``;
