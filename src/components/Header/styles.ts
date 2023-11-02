import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const P = styled.p`
  color: ${cores.amareloEscuro};
  font-size: 18px;
  font-weight: bold;

  @media only screen and (max-width: 556px) {
    margin-top: 16px;
  }
`;

export const LinkVoltar = styled(Link)`
  color: ${cores.amareloEscuro};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;

  @media only screen and (max-width: 556px) {
    display: block;
    margin-bottom: 16px;
  }
`;

export const HeaderContainer = styled.header`
  height: 160px;
  background-color: ${cores.amarelo};
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 16px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 556px) {
    display: block;
    padding-top: 16px;
  }
`;
