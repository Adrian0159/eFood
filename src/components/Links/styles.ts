import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const LinkContainer = styled(Link)`
  background-color: ${cores.amareloEscuro};
  color: ${cores.amarelo};
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
`;
