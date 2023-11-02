import styled from "styled-components";
import { cores } from "../../styles";

export const ImgLogo = styled.h1`
  text-align: center;
`;

export const ImagemBanner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 360px;
  margin-bottom: 80px;
`;

export const Paragrafo = styled.p`
  color: ${cores.amareloEscuro};
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 360px;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
