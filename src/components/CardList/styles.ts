import styled from "styled-components";

export const ContainerCardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px 80px;
  padding: 0 20px;

  @media only screen and (max-width: 768px) {
    display: block;

    li {
      margin-bottom: 24px;
    }
  }
`;

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
