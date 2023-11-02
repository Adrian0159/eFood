import BannerImg from "../../assets/images/imagem_de_fundo.png";
import { BannerContainer, Imagem, Tag, Titulo } from "./styles";

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <BannerContainer>
      <Tag>Italiana</Tag>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </BannerContainer>
  </Imagem>
);

export default Banner;
