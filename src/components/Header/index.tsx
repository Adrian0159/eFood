import Logo from "../../assets/images/logo.png";
import { HeaderContainer, LinkVoltar, NavContainer, P } from "./styles";

const Header = () => (
  <HeaderContainer>
    <NavContainer>
      <LinkVoltar to="/">Restalrantes</LinkVoltar>
      <img src={Logo} alt="Logo" />
      <P>0 Produto(s) no carrinho</P>
    </NavContainer>
  </HeaderContainer>
);

export default Header;
