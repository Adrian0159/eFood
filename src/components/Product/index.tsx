import { useState } from "react";
import pizzaMarguerita from "../../assets/images/image4.png";
import close from "../../assets/images/close 1.png";
import { Modal, ModalContainer, ModalImg, ModalText } from "./styles";
import { Botao, Descrition, ProductContainer, Titulo } from "./styles";

type Props = {
  foto: string;
  id: number;
  nome: string;
  descricao: string;
};

const Product = ({ foto, nome, descricao }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <ProductContainer>
        <img src={foto} alt={nome} />
        <Titulo>{nome}</Titulo>
        <Descrition>{descricao}</Descrition>
        <Botao onClick={() => setModalOpen(true)}>Mais detalhes</Botao>
      </ProductContainer>
      <Modal className={modalOpen ? "visible" : ""}>
        <ModalContainer>
          <ModalImg>
            <img src={pizzaMarguerita} alt="Pizza Marguerita" />
          </ModalImg>
          <img src={close} alt="fechar" onClick={() => setModalOpen(false)} />
          <ModalText>
            <h3>Pizza Marguerita</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </p>
            <button>Adicionar ao carrinho - R$ 60,90</button>
          </ModalText>
        </ModalContainer>
        <div className="overlay" onClick={() => setModalOpen(false)}></div>
      </Modal>
    </>
  );
};

export default Product;
