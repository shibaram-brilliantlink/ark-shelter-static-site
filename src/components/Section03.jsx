import styled from "styled-components";
import { Xpadding } from "../styles";

export default function Section03() {
  return (
    <Section>
      <Container>Section03 Video section</Container>
    </Section>
  );
}
const Section = styled.section`
  height: 10vh;
  background: #000;
  color: white;
`;
const Container = styled(Xpadding)``;
