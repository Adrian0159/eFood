import Product from "../Product";
import { Container, ListContainer } from "./styles";

const ProductList = () => (
  <Container>
    <ListContainer>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
      <li>
        <Product />
      </li>
    </ListContainer>
  </Container>
);

export default ProductList;
