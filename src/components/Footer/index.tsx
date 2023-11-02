import {
  ContainerFooter,
  ContainerImg,
  Paragrafo,
  ImageLogo,
  ImageSocial,
} from "./styles";
import Logo from "../../assets/images/logo.png";
import Instagram from "../../assets/images/instagram.png";
import Facebook from "../../assets/images/facebook.png";
import Twitter from "../../assets/images/twiter.png";

const Footer = () => (
  <ContainerFooter>
    <ContainerImg>
      <ImageLogo>
        <img src={Logo} alt="Logo" />
      </ImageLogo>
      <ImageSocial>
        <img src={Instagram} alt="Instagram" />
        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
      </ImageSocial>
    </ContainerImg>

    <Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.{" "}
    </Paragrafo>
  </ContainerFooter>
);

export default Footer;
