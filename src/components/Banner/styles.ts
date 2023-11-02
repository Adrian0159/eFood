import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 556px) {
    margin-top: 16px;
  }
`;

export const BannerContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  color: ${cores.branca};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0px 32px;

  @media only screen and (max-width: 992px) {
    margin: 0 16px;
  }
`;

export const Tag = styled.p`
  font-size: 32px;
  font-weight: 100;
`;

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: 900;
`;
