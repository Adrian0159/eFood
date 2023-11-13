import styled from "styled-components";
import { cores } from "../../styles";

export const ProductContainer = styled.div`
  background-color: ${cores.amareloEscuro};
  padding: 8px;

  img {
    width: 100%;
  }
`;

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: ${cores.amareloClaro};
`;

export const Descrition = styled.p`
  font-size: 14px;
  color: ${cores.amareloClaro};
`;

export const Botao = styled.button`
  color: ${cores.amareloEscuro};
  background-color: ${cores.amareloClaro};
  display: block;
  text-align: center;
  margin-top: 8px;
  font-size: 16px;
  padding: 4px 0;
  font-weight: bold;
  width: 100%;
  border: none;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${cores.amareloEscuro};
  display: flex;
  max-width: 1024px;
  height: 344px;
  padding: 32px;

  > img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`;

export const ModalText = styled.div`
  color: ${cores.branca};

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    margin-top: 16px;
    padding: 4px 8px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    color: ${cores.amareloEscuro};
  }
`;

export const ModalImg = styled.div`
  margin-right: 24px;
`;
