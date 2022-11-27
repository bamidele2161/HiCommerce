import React from "react";
import { Container, ProductContainer } from "./styles";

type props = {
  children: any;
};
const ProductLayout: React.FC<props> = ({ children }) => {
  return (
    <Container>
      <ProductContainer>{children}</ProductContainer>
    </Container>
  );
};

export default ProductLayout;
