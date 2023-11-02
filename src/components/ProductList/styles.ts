import styled from "styled-components";

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 56px;
  grid-gap: 32px;

  @media only screen and (max-width: 768px) {
    display: block;

    margin: 0 16px;

    li {
      margin-bottom: 24px;
    }
  }
`;

export const Container = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    margin-top: 32px;
  }
`;
