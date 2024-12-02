import styled from "styled-components";
import { Xpadding } from "../styles";

export default function Section05() {
  return (
    <Section>
      <Container>Section05 Grid from relax</Container>
    </Section>
  );
}
const Section = styled.section`
  height: 10vh;
  background: #000;
  color: white;
`;
const Container = styled(Xpadding)``;
