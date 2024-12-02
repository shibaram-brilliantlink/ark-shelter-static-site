import styled from "styled-components";
import { Xpadding } from "../styles";

export default function Section02() {
  return (
    <Section>
      <Container>Section02 Followed by slider</Container>
    </Section>
  );
}
const Section = styled.section`
  height: 10vh;
  background: #000;
  color: white;
`;
const Container = styled(Xpadding)``;
