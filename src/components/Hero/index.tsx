import Logo from "../../assets/images/logo.png";
import Banner from "../../assets/images/hero.png";
import { Container, ImagemBanner, ImgLogo, Paragrafo } from "./styles";

const Hero = () => (
  <ImagemBanner style={{ backgroundImage: `url(${Banner})` }}>
    <Container>
      <ImgLogo>
        <img src={Logo} alt="Logo" />
      </ImgLogo>

      <Paragrafo>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Paragrafo>
    </Container>
  </ImagemBanner>
);

export default Hero;
