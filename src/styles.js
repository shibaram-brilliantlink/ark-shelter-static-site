import styled from "styled-components";

export const Slink = styled.a`
  display: inline-block;
  color: #555c62;
  /* text-decoration: none;*/
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1.5px;

  &:active,
  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1.5px;
  }
`;
export const Xpadding = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  /* margin: 0 auto; */
  @media (min-width: 768px) {
    padding-left: clamp(1rem, 4.2105vw + -0.0526rem, 5rem);
    padding-right: clamp(1rem, 4.2105vw + -0.0526rem, 5rem);
  }
`;
