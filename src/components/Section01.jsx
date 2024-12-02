import styled from "styled-components";
import { Xpadding } from "../styles";

export default function Section01() {
  return (
    <Section>
      <Container>Simple section 01</Container>
    </Section>
  );
}
const Section = styled.section`
  height: 10vh;
  background: #000;
  color: white;
`;
const Container = styled(Xpadding)``;
